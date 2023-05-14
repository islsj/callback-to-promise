enum WAIT {
	ALL = 'all',
	RACE = 'race',
}
enum OUTPUT {
	SORT = 'sort',
	ORDER = 'order',
}
type Option = {
	wait?: 'all' | 'race' | number[] //  *全部* | 单个 | 指定
	output?: 'sort' | 'order' //  *按照列表排序* | 按照执行顺序
	second?: number // *0* | 自定义    设置最长等待时间,0为秒无限制等待,直到所有回调执行完成
}
//  删除数组中的一个元素
const delOneItemOfArr = (proxyArr: Function[], item: any) => {
	const index = proxyArr.indexOf(item)
	if (index > -1) proxyArr.splice(index, 1)
}
//  创建计时器
const createTimer = (rejectCallBack: Function, second: number): number => {
	return setTimeout(() => {
		if (second > 0) {
			rejectCallBack('execution time timeout')
		}
	}, second * 1000)
}
//  观察任务队列
type taskQueueType = {
	value: any[]
	updated: Function
}
class createTaskQueue {
	value: any[]
	updated: Function = () => {}
	constructor() {
		let self = this
		this.value = new Proxy([], {
			get(target, prop, receiver) {
				return Reflect.get(target, prop, receiver)
			},
			set(target: Function[], prop, newVal, receiver) {
				let idx = prop as unknown as number
				let oldVal = target[idx]
				Reflect.set(target, prop, newVal, receiver)
				self.updated(oldVal, newVal)
				return true
			},
		})
	}
}
//  观察任务队列
const watcTaskQueue = (taskQueue: any, callback: Function) => {
	taskQueue.updated = callback
}

export default function callbackToPromise<T extends Function>(original: T, option?: Option) {
	const { wait = WAIT.ALL, output = OUTPUT.SORT, second = 0 } = option || {}
	let result: any[] = []
	let taskQueue: Function[] = []

	let len = 0
	const fn = <T>(...args: any[]) => {
		return new Promise((res: (val: { callback: Function; result: any }[]) => void, rej) => {
			try {
				//  1.判断执行是否超时超时
				let timer = createTimer(rej, second)
				//  2.创建任务队列
				let taskQueue = new createTaskQueue()
				//  3.遍历入参,改造callback
				for (let idx in args) {
					if (toString.call(args[idx]) === '[object Function]') {
						const cb = args[idx]
						taskQueue.value.push(cb)

						if (!Array.isArray(wait) || wait.includes(parseInt(idx))) {
							args[idx] = () => {
								result.push({ callback: args[idx], result: cb() })
								// callback执行过后从任务队列里移除
								delOneItemOfArr(taskQueue.value, cb)
							}
						}
					}
				}
				len = taskQueue.value.length
				//  4.观察任务队列变化
				watcTaskQueue(taskQueue, () => {
					//  回调队列里全部执行,则为成功
					if ((wait === WAIT.ALL && result.length === len) || (Array.isArray(wait) && result.length === wait.length)) {
						clearTimeout(timer)
						//  输出模式为排序
						if (output === OUTPUT.SORT) {
							result = result.sort((a: { callback: Function; result: any }, b: { callback: Function; result: any }) => {
								const aIdx = args.indexOf(a.callback)
								const bIdx = args.indexOf(b.callback)
								return aIdx - bIdx
							})
							res(result)
						}
						//  输出模式为顺序
						if (output === OUTPUT.ORDER) {
							res(result)
						}
					}
					if (wait === WAIT.RACE && result.length) {
						res([result[0]])
					}
				})
				// 5.执行原始函数
				original(...args)
			} catch (err) {
				rej(err)
			}
		})
	}
	return fn
}
