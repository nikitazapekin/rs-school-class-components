import type { Config } from 'jest';

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
  collectCoverageFrom: [
    '**/*.{ts,tsx}',            
    '!**/*.d.ts',              
    '!**/node_modules/**',     
    '!jest.config.ts',
    '!**/types.ts',       
    '!**/.next/types/**'     
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(module-to-transform|@remix-run)/)" 
  ]
};

export default config;
