import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup-test-env.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['html', 'text', 'text-summary', 'lcov'],
      include: ['**/*.{ts,tsx}'],
      exclude: [
        '**/*.d.ts',
        '**/node_modules/**',
        '**/types.ts',
        '**/.next/types/**',
        'vitest.config.ts'
      ],
    },
  },
});

/* 
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
      coverage: {
        provider: 'v8', // Используйте встроенный провайдер 'v8'
        reportsDirectory: './coverage',
        reporter: ['text', 'html'],
      },
      reporters: ['default', 'hanging-process'],
      environment: 'jsdom',
      setupFiles: ['./test/setup-test-env.ts'],
    },
  });
  

  */