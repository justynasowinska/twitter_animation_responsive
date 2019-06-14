module.exports = {
    preset: 'react-native',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFiles: ['<rootDir>/setup.js'],
    testEnvironment: 'jsdom',
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
    cacheDirectory: '.jest/cache',
};
