module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/testUtils/setupTests.js'],
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: './tsconfig.json',
    },
  },
  testEnvironment: 'jsdom',
  testRegex: '(/src/.*.(test|spec)).(jsx?|tsx?|js|ts)$',

  // moduleNameMapper: {
  //   // Will need this for tests if you want to use CSS or SCSS
  //   // '\\.(scss|css)$': 'identity-obj-proxy',
  // },
  setupFiles: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '(tests/.*.mock).(jsx?|tsx?|js|ts)$',
    '/src/testUtils/',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/components/detail/Detail.tsx',
    '!src/components/utils/ErrorBoundary.tsx',
    '!src/components/list/List.tsx',
    '!src/components/list/List.tsx',
    '!src/components/utils/layout/index.tsx',
  ],
  verbose: true,
};
