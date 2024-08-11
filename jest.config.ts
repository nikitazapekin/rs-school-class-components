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
  collectCoverageFrom: [
    '**/*.{ts,tsx}',            
    '!**/*.d.ts',              
    '!**/node_modules/**',     
    '!**/setIsLoading.ts',    
    '!**/*.test.{ts,tsx}',      
    '!**/isLoadingSelector.ts',    
    '!**/isLoadingUserData.ts',     
 '!**/setLoadingUserDataActionCreator.ts',
    '!**/types.ts',           
    '!jest.config.ts',   
  ],
};

export default createJestConfig(config);
