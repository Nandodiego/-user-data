module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  moduleFileExtensions: [
    "js",
    "vue"
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec).[jt]s?(x)'],
}
