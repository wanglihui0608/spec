// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for ice TypeScript and react TypeScript project
module.exports = {
  extends: [
    require.resolve('eslint-config-ali/typescript/react'),
    // For some ci and jest test env, we chose require.resolve instead 'plugin:@appworks/best-practices/react-ts'
    require.resolve('@appworks/eslint-plugin-best-practices/src/configs/react-ts'),
  ],
};
