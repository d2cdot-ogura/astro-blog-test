// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    output: 'server', // SSRにする
    adapter: vercel({
        isr: {
            expiration: 60, // 60秒間キャッシュする
            bypassToken: 'astro-isr-bypass', // キャッシュをバイパスするためのトークン
            exclude: ['/draft'],
        }
    }), // Vercelに最適な形でデプロイするための設定 
});
