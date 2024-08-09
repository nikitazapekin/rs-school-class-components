// jest.config.ts
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',

  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', 
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js' 
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',            
    '!**/*.d.ts',              
    '!**/node_modules/**',     
    '!**/*.test.{ts,tsx}',      
    '!**/index.tsx',            
    '!**/types.ts',            
  ],
 // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
 setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
};

export default config;
