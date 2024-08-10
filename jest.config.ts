import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Используйте babel-jest для обработки файлов
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
    '**/*.{ts,tsx}',            
    '!**/*.d.ts',              
    '!**/node_modules/**',     
    '!**/*.test.{ts,tsx}',      
    '!**/index.tsx',            
    '!**/types.ts',       
    '!babel.config.ts',        
    '!jest.config.ts',         
    '!vite.config.ts',          
    '!**/entry.client.tsx',     
    '!**/entry.server.tsx',        
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

export default config;