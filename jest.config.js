module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/tests/**',
    '!**/node_modules/**',
  ],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        // Jest(CommonJS)向けにモジュール形式を上書きする
        tsconfig: {
          module: 'commonjs',
          moduleResolution: 'node10',
        },
      },
    ],
  },
  testMatch: ['**/tests/**/*.test.ts'],
  moduleNameMapper: {
    '^#/(.+)': '<rootDir>/src/$1',
  },
}
