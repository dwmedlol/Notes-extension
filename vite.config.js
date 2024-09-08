import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or other frameworks/plugins you might use

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        background: 'src/background.js',
        content: 'src/content.js',
        popup: 'src/popup.html',
        options: 'src/options.html',
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
    outDir: 'dist',
  },
  // Ensure compatibility with Chrome extension environment
  base: './',
});
