const baseConfig = require('./jest.base.config')

module.exports = {
    ...baseConfig,
    "roots": ["<rootDir>/projects"],
    "testPathIgnorePatterns": [
        ...baseConfig.testPathIgnorePatterns,
        "<rootDir>/projects/*.*/cypress"
    ],
}
