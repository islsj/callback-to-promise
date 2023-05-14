# callback-to-promise

## Installation

```bash
$ npm install --save callback-to-promise
```

## Usage

#### Import the module:

```js
import callbackToPromise from 'callback-to-promise'
```

#### Example 1:

```js
let setTimeoutPromise = callbackToPromise(setTimeout)
await setTimeoutPromise(() => {
	// todo
}, 1000)
```

#### Example 2:

```js
let testFn = (fn1: Function, fn2: Function, fn3: Function) => {
	setTimeout(() => fn1(), 300)
	setTimeout(() => fn2(), 100)
	setTimeout(() => fn3(), 200)
}
let setTimeoutPromise = callbackToPromise(testFn, { wait: 'all' output: 'order' })
await testFnPromise(
	() => {
		console.log('fn1')
	},
	() => {
		console.log('fn2')
	},
	() => {
		console.log('fn3')
	},
)
//	fn2
//	fn3
//	fn1
```

#### Example 3:

```js
let testFn = (fn1: Function, fn2: Function, fn3: Function) => {
	setTimeout(() => fn1(), 100)
	setTimeout(() => fn2(), 200)
	setTimeout(() => fn3(), 300)
}
let testFnPromise = callbackToPromise(testFn, { wait: [1, 2], output: 'sort' })
let returnValue = await testFnPromise(
	() => {
		return 'fn1end'
	},
	() => {
		return 'fn2end'
	},
	() => {
		return 'fn3end'
	},
)
console.log(returnValue[0].result) //fn2end
console.log(returnValue[1].result) //fn3end
```

## Option

| 配置   |            参数             |     默认 | 描述                                                                                                |
| :----- | :-------------------------: | -------: | --------------------------------------------------------------------------------------------------- |
| wait   | `"all"` `"race"` `number[]` |  `"all"` | all:等待所有 callback 执行<br>race:只等待最先执行的 callback<br>number[]:等待指定 callback 执行<br> |
| output |     `"sort"` `"order"`      | `"sort"` | sort:返回值已入参顺序返回<br>order:返回值已执行顺序返回<br>                                         |
| second |           number            |      `0` | 超时时间                                                                                            |

————————————————
