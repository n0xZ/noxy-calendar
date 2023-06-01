import { defineConfig } from 'vite'

import React from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [React()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
})
