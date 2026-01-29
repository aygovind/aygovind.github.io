import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // Use relative paths for assets to work on any subpath
    build: {
        outDir: 'dist',
    }
})
