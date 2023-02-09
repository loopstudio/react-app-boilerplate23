const config = {
  moduleDirectories: ['node_modules', 'src'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.*',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.css$': 'jest-transform-css',
    '^.+\\.svg$': 'jest-transform-stub',
  },
};

module.exports = config;
