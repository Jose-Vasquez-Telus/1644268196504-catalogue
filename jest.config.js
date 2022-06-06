const path = require("path");

module.exports = {
  rootDir: "./src",
  automock: false,
  moduleNameMapper: {
    "\\.(css|scss|less)$": "<rootDir>/mocks/styleMock.js",
    "\\.(png|jpg|gif|ttf|eot|svg)$": "<rootDir>/mocks/fileMock.js",
  },
  setupFiles: [
    path.resolve("jest/setupJest.js"),
    path.resolve("jest/setupEnzyme.js"),
  ],
};
