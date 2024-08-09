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