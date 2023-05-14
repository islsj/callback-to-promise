module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-essential', '@vue/typescript/recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	//  请注意: off代表关闭规则 error代表用报错的方式提示 warn代表用警告的方式提示
	rules: {
		// js配置表 http://eslint.cn/docs/rules/
		'no-namespace': 'off', // 不允许自定义 TypeScript 模块和命名空间
		'no-undef': 'off', // 禁用未声明的变量
		'no-unused-vars': 'off', // 禁止出现未使用过的变量
		'no-useless-escape': 'off', // 禁止不必要的转义字符
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', //  禁用 console
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', //  禁用 debugger

		//  vue规则配置表 https://eslint.vuejs.org/rules/prefer-import-from-vue.html
		'vue/script-setup-uses-vars': 'error', // setup 语法糖校验
		'vue/prefer-import-from-vue': 'error', //  强制从“vue”导入，而不是从“@vue/*”导入
		'vue/multi-word-component-names': 'off', //  组件名称始终用短横杠连接

		//  ts规则配置表  https://typescript-eslint.io/rules/no-explicit-any/
		'@typescript-eslint/no-explicit-any': 'error', // 不允许使用any类型
		'@typescript-eslint/no-unused-vars': 'off', // 禁止出现未使用过的变量
		'@typescript-eslint/no-this-alias': 'off',
		'@typescript-eslint/no-var-requires': 'off', // 不允许导入require文件
	},
	globals: {
		defineOptions: 'readonly',
		defineProps: 'readonly',
	},
}
