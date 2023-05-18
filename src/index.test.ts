import callbackToPromise from './index'
import { JSDOM } from 'jsdom'

describe('测试callbackToPromise函数', () => {
	const spy = jest.spyOn(console, 'log')
	//spy.mockRestore()
	test('测试默认值[wait="all",output="sort",second="0"]选项,单个callback', async () => {
		//let testFn = (val = 0, fn1: Function) => {
		//	setTimeout(() => fn1(), 50)
		//}
		//let testFnPromise = callbackToPromise(testFn)
		//let returnValue = await testFnPromise(null, () => {
		//	return 'fn1end'
		//})
		//console.log(returnValue[0].result)
		//expect(console.log).toHaveBeenCalledWith('fn1end')
	})
	test('测试[wait="[1]",output="sort"]选项', async () => {
		//let testFn = (fn1: Function, fn2: Function) => {
		//	setTimeout(() => fn1(), 100)
		//	setTimeout(() => fn2(), 50)
		//}
		//let testFnPromise = callbackToPromise(testFn, { wait: [1], output: 'sort' })
		//let returnValue = await testFnPromise(
		//	() => {
		//		return 'fn1end'
		//	},
		//	() => {
		//		return 'fn2end'
		//	},
		//)
		//console.log(returnValue[0].result)
	})
	test('测试[wait="[1,2]",output="order"]选项', async () => {
		//let testFn = (fn1: Function, fn2: Function, fn3: Function) => {
		//	setTimeout(() => fn1(), 500)
		//	setTimeout(() => fn2(), 100)
		//	setTimeout(() => fn3(), 100)
		//}
		//let testFnPromise = callbackToPromise(testFn, { wait: [1, 2], output: 'sort' })
		//let returnValue = await testFnPromise(
		//	() => {
		//		return 'fn1end'
		//	},
		//	() => {
		//		return 'fn2end'
		//	},
		//	() => {
		//		return 'fn3end'
		//	},
		//)
		//console.log(returnValue[0].result)
		//expect(console.log).toHaveBeenCalledWith('fn2end')
		//console.log(returnValue[1].result)
		//expect(console.log).toHaveBeenCalledWith('fn3end')
	})
	test('测试[wait="all",output="sort"]选项', async () => {
		//let testFn = (fn1: Function, fn2: Function, fn3: Function) => {
		//	setTimeout(() => fn1(), 500)
		//	setTimeout(() => fn2(), 900)
		//	setTimeout(() => fn3(), 100)
		//}
		//let testFnPromise = callbackToPromise(testFn, { wait: 'all', output: 'sort' })
		//let returnValue = await testFnPromise(
		//	() => {
		//		return 'fn1end'
		//	},
		//	() => {
		//		return 'fn2end'
		//	},
		//	() => {
		//		return 'fn3end'
		//	},
		//)
		//console.log(returnValue)
		//console.log(returnValue[0].result)
		//expect(console.log).toHaveBeenCalledWith('fn1end')
		//console.log(returnValue[1].result)
		//expect(console.log).toHaveBeenCalledWith('fn2end')
	})
	test('测试[wait="all",output="order"]选项', async () => {
		//let testFn = (fn1: Function, fn2: Function) => {
		//	setTimeout(() => fn1(), 100)
		//	setTimeout(() => fn2(), 50)
		//}
		//let testFnPromise = callbackToPromise(testFn, { wait: 'all', output: 'order' })
		//let returnValue = await testFnPromise(
		//	() => {
		//		return 'fn1end'
		//	},
		//	() => {
		//		return 'fn2end'
		//	},
		//)
		//console.log(returnValue[0].result)
		//expect(console.log).toHaveBeenCalledWith('fn2end')
		//console.log(returnValue[1].result)
		//expect(console.log).toHaveBeenCalledWith('fn1end')
	})
	test('测试等待超时,选项[wait="all",output="sort",second=1]', async () => {
		//let testFn = (fn1: Function, fn2: Function) => {
		//	setTimeout(() => fn1(), 50)
		//	setTimeout(() => fn2(), 1500)
		//}
		//let testFnPromise = callbackToPromise(testFn, { wait: 'all', output: 'sort', second: 1 })
		//let returnValue = await testFnPromise(
		//	() => {
		//		return 'fn1end!'
		//	},
		//	() => {
		//		return 'fn2end!'
		//	},
		//).catch((err) => {
		//	console.log(err)
		//})
		//expect(console.log).toHaveBeenCalledWith('execution time timeout')
	})
	test('测试[wait="race"]选项', async () => {
		//let testFn = (fn1: Function, fn2: Function) => {
		//	setTimeout(() => fn1(), 50)
		//	setTimeout(() => fn2(), 100)
		//}
		//let testFnPromise = callbackToPromise(testFn, { wait: 'race' })
		//let returnValue = await testFnPromise(
		//	() => {
		//		console.log('fn1')
		//		return 'fn1end!'
		//	},
		//	() => {
		//		return 'fn2end!'
		//	},
		//)
		//console.log(returnValue[0].result)
		//expect(console.log).toHaveBeenCalledWith('fn1')
		//expect(console.log).toHaveBeenCalledWith('fn1end!')
	})
	test('测试绑定this', async () => {
		//let obj = {
		//	testFn(fn1: Function) {
		//		setTimeout(() => fn1(), this.second * 1000)
		//	},
		//	second: 3,
		//	setTimeout: setTimeout,
		//	testVal: 'hello',
		//}
		//let testFnPromise = callbackToPromise(obj, 'testFn', { wait: 'all', output: 'sort' })
		//let returnValue = await testFnPromise(() => {
		//	return 'fn1end!'
		//})
		//console.log(returnValue[0].result)
		//expect(console.log).toHaveBeenCalledWith('fn1end!')
	})
	test('测试addEventListener的callback转换为promsie', async () => {
		//// 创建 JSDOM 环境
		//const dom = new JSDOM('<html><body></body></html>')
		//const jsdocument = dom.window.document
		//// 创建 DOM 元素
		//const button = jsdocument.createElement('button')
		//button.textContent = 'Click me'
		//jsdocument.body.appendChild(button)
		//// 触发点击事件
		//setTimeout(() => button.click(), 200)
		//// 绑定点击事件
		//let count = 0
		//let testFnPromise = callbackToPromise(button as any, 'addEventListener')
		//let returnValue = await testFnPromise('click', () => {
		//	count++
		//})
		////	移除事件
		//button.removeEventListener('click', returnValue[0].callback)
		//button.click()
		//console.log('Button clicked! count:' + count)
		//expect(console.log).toHaveBeenCalledWith('Button clicked! count:1')
	})
})
