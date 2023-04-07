/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['./src/index.ts'],
  setupFiles: ['../../jest.setup.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
};
