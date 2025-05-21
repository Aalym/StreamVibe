import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	assetsInclude: ['**/*.png'],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
	plugins: [react()],
})
