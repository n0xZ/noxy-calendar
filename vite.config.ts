import { defineConfig } from 'vite'

import React from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import Million from 'million/compiler'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		React(),
		Million.vite(),
		AutoImport({ imports: ['react', 'react-router-dom'] }),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
})
