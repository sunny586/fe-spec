module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        // 编译相关的修改，例如发布版本，对项目构建或者依赖的改动
        'build',
        // 新功能(feature)
        'feat',
        // 修复bug
        'fix',
        // 更新某功能
        'update',
        // 重构
        'refactor',
        // 文档
        'docs',
        // 构建过程或者辅助工具的变动,如增加依赖库等
        'chore',
        // 不影响代码运行的变动
        'style',
        // 撤销commit,回滚到上一个版本
        'revert',
        // 性能优化
        'perf',
        // 测试(单元,集成测试)
        // 'test',
      ],
    ],
  },
};
