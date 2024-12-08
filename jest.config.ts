import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    globals: {
        __PACKAGE_VERSION__: true,
        __BUILD_TIME__: true,
        __RELEASE_INFORMATION__: true,
    },
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['**/src/**/*.ts', '!**/node_modules/**', '!**/spec/**'],
    coverageDirectory: 'test-reports',
    coverageReporters: ['text', 'text-summary', 'cobertura'],
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'test-reports',
                outputName: 'jest-junit.xml',
            },
        ],
    ],
    roots: ['<rootDir>/test'],
    setupFilesAfterEnv: ['<rootDir>/test/setup-textencoder.ts', '<rootDir>/test/setup.ts'],
    maxWorkers: 1,
    maxConcurrency: 1,
    verbose: true,
    forceExit: true,
    restoreMocks: true,
    testEnvironment: 'node',
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
};
export default config;
