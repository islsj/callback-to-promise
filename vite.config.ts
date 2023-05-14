import { defineConfig } from "vite";

export default defineConfig({
	// 打包配置
	build: {
		lib: {
			entry: "src/packages/index.ts", // 设置入口文件
			name: "vite-lib", // 起个名字，安装、引入用
			fileName: (format) => `vite-lib.${format}.js`, // 打包后的文件名
		},
		sourcemap: true, // 输出.map文件
		rollupOptions: {},
	},
});
