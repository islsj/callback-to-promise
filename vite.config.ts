import { defineConfig } from 'vite'
//import typescript from 'rollup-plugin-typescript2'
export default defineConfig({
	// 打包配置
	build: {
		lib: {
			entry: './src/index.ts', // 设置入口文件
			name: 'callbackToPromise', // 起个名字，安装、引入用
			fileName: 'callbackToPromise', // 打包后的文件名
			formats: ['es', 'umd', 'iife'],
		},
		sourcemap: false, // 输出.map文件
		rollupOptions: {},
	},
})
