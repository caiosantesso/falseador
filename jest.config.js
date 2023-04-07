/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['./src/index.ts'],
  setupFiles: ['./jest.setup.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
};
