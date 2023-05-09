import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export const ROOT_PATH = path.resolve(__dirname);
export const APP_PATH = path.resolve(ROOT_PATH, 'src');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: './',
    root: './',
    envPrefix: 'APP_',
    resolve: {
      alias: {
        '@': path.resolve(APP_PATH),
        'react-native': 'react-native-web',
      },
      extensions: [
        '.web.ts',
        '.web.tsx',
        '.web.js',
        '.web.jsx',
        '.mjs',
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
      ],
    },
    define: {
      global: 'globalThis',
    },
    build: {
      outDir: 'dist-web',
      assetsDir: 'app_assets',
      sourcemap: true,
    },
    server: {
      port: 4000,
      host: 'localhost',
      open: true,
    },
    optimizeDeps: {
      esbuildOptions: {
        mainFields: ['module', 'main'],
        resolveExtensions: ['.web.js', '.web.ts', '.js', '.ts'],
      },
    },
    plugins: [
      react({
        babel: {
          plugins: ['babel-plugin-react-native-web'],
        },
        include: '**/*.{jsx,tsx,ts}',
      }),
    ],
  };
});
