import { defineConfig } from 'vite'

import React from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [React(), AutoImport({ imports: ['react', 'react-router-dom'] })],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
})
