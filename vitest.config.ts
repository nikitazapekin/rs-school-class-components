import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup-test-env.ts'],
    coverage: {
        provider: 'v8',
        reporter: ['text', 'text-summary', 'html', 'lcov'],
        include: ['**/*.{ts,tsx}'],
        exclude: [
            '**/*.d.ts',
            '**/node_modules/**',
            '**/types.ts',
            '**/.next/types/**',
            'vitest.config.ts',
            '**/entry.client.tsx',
            '**/entry.server.tsx',
            '**/root.tsx',
            'remix.config.ts',
            'vite.config.ts',
        ],
      },
  },
});
 