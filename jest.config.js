module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "@swc/jest",
  },
  moduleNameMapper: {
    "\\.css$": "<rootDir>/src/mocks/styleMock.js",
  },
}
