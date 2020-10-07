module.exports = {
  rootDir: '../../',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/scripts',
    'template'
  ],
  automock: false,
  testEnvironment: 'node'
}
