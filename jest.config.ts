import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@remix-run/react|@web3-storage|other-package-you-need).+\\.js$'
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '@/(.*)': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',        // Включить все файлы .ts и .tsx из папки src
    '!**/*.d.ts',               // Исключить все файлы .d.ts
    '!**/node_modules/**',      // Исключить папку node_modules
    '!**/*.test.{ts,tsx}',      // Исключить тестовые файлы
    '!babel.config.ts',        // Исключить babel.config.ts
    '!jest.config.ts',         // Исключить jest.config.ts
    '!remix.config.ts',        // Исключить remix.config.ts
    '!vite-env.d.ts',          // Исключить vite-env.d.ts
    '!vite.config.ts',         // Исключить vite.config.ts
    '!**/entry.client.tsx',    // Исключить entry.client.tsx
    '!**/entry.server.tsx',    // Исключить entry.server.tsx
    '!**/types.ts',            
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

export default config;
