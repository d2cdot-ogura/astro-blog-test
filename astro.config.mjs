// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    output: 'server', // SSRにする
    adapter: vercel({
        isr: {
            expiration: 60, // 60秒間キャッシュする
            bypassToken: 'f3a13dad-b3d3-635a-94b7-eed969401a99', // キャッシュをバイパスするためのトークン
            exclude: ['/draft'],
        }
    }), // Vercelに最適な形でデプロイするための設定 
});
