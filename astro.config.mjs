// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    output: 'server', // SSRにする
    adapter: vercel(), // Vercelに最適な形でデプロイするための設定 
});
