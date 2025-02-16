module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',  
  transform: {
    '^.+\\.tsx?$': 'ts-jest', 
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.scss$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
