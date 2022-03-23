export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    '^@i18nlite/core$': '<rootDir>/dist/core',
    '^@i18nlite/testing$': '<rootDir>/dist/testing',
    '^@i18nlite/react$': '<rootDir>/dist/react',
    '^@i18nlite/svelte$': '<rootDir>/dist/svelte',
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
