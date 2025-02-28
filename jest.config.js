module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.tests.ts"], 
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
