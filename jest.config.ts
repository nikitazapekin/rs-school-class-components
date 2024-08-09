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


/*
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom', // или node, в зависимости от вашей среды
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	  },
	transformIgnorePatterns: [
	  '/node_modules/(?!@remix-run)',
	],
	moduleNameMapper: {
	  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	  '^@/(.*)$': '<rootDir>/src/$1',
	},
  };
  */
  
/*
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^~/(.*)$': '<rootDir>/$1',  
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

export default config;
*/
//testMatch: ['<rootDir>/**/*.test.{ts,tsx}'],  
/*
export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'^.+\\.svg$': 'jest-transformer-svg',
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

	collectCoverage: true,
	coverageDirectory: '<rootDir>/coverage',
	coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
	
	transformIgnorePatterns: [
	  '/node_modules/(?!@web3-storage/multipart-parser)'  
	],
};
 
*/
//collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/index.tsx', '!src/**/*.test.{ts,tsx}'],