import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        server: {
            hmr: { path: '/vite-hmr/' },
            allowedHosts: ['.netlify.app']
        }
    },
    server: {
        port: 3000
    }
});
