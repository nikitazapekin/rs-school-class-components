/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    reporters: ['default', 'hanging-process'],
    environment: 'jsdom',
    setupFiles: ['./test/setup-test-env.ts'],
  },
});
