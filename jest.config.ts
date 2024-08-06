import type { Config } from 'jest';
import nextJest from 'next/jest.js';
const createJestConfig = nextJest({ 
  dir: './',
});
const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/index.tsx', '!src/**/*.test.{ts,tsx}'],
};

export default createJestConfig(config);