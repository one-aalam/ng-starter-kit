module.exports = {
    "preset": "jest-preset-angular",
    "roots": ['src'],
    "coverageDirectory": 'reports',
    "setupFilesAfterEnv": [
      "<rootDir>/src/setup-jest.ts"
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/",
      "<rootDir>/dist/"
    ],
    "globals": {
      "ts-jest": {
        "allowSyntheticDefaultImports": true,
        "tsconfig": "<rootDir>/tsconfig.spec.json",
        "stringifyContentPathRegex": "\\.html$"
      }
    }
}
