export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    '^@i18nlite/core$': '<rootDir>/modules/core/dist',
    '^@i18nlite/testing$': '<rootDir>/modules/testing/dist',
    '^@i18nlite/react$': '<rootDir>/modules/react/dist',
    '^@i18nlite/svelte$': '<rootDir>/modules/svelte/dist',
  },
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'svelte'],
}
