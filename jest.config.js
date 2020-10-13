/* eslint-disable max-len */
module.exports = {
  collectCoverage: true,
  coverageReporters: ['lcov'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/app/javascript/__mocks__/fileMock.js',
  },
  roots: [
    'app/javascript',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/app/javascript/setupTests.ts',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
}
