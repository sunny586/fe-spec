const rule = require('../../rules/no-broad-semantic-versioning');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-broad-semantic-versioning', rule, {
  valid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'sunny586-fe-eslint-plugin': '^0.0.5' },
      })}`,
    },
    {
      filename: 'package.js',
      code: 'var t = 1',
    },
  ],

  invalid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'sunny586-fe-eslint-plugin': '*' },
      })}`,
      errors: [
        {
          message: 'The "sunny586-fe-eslint-plugin" is not recommended to use "*"',
        },
      ],
    },
  ],
});
