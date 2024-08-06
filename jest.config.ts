/*
import type {Config} from 'jest';

const config: Config = {

  clearMocks: true,

 
  collectCoverage: true,

  coverageDirectory: "coverage",

 
  testEnvironment: "jsdom",

};

export default config;
*/

/*

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: { // Handle Module Path Aliases
    '^@/(.*)$': '<rootDir>/$1', 
  },
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
*/
/*

import '@testing-library/jest-dom';

(() => {
  const originalConsole = global.console;

  global.console = {
    ...global.console,

    error: (...args) => {
      if (
        typeof args[0] === 'string' &&
        args[0].includes('React does not recognize the') &&
        args[0].includes('prop on a DOM element')
      ) {
        return true;
      }

      // Show the original error for everything else
      originalConsole.error(...args);
    },
  };
})();

export {};
*/
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
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
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);