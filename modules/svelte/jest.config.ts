export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@i18nlite/core$': '<rootDir>/node_modules/@i18nlite/core',
    '^@i18nlite/testing$': '<rootDir>/node_modules/@i18nlite/testing',
  },
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
}
