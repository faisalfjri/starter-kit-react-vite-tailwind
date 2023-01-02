import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '@': resolve(__dirname, './src'),
        },
    },
    plugins: [react()],
})
