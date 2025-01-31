import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    setupFiles: ['./setupTests.ts'],
  },
});
