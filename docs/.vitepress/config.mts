import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // outDir: '.vitepress/dist',
  base: process.env.NODE_ENV === 'production' ? '/fe-spec/' : '/',
  title: '前端编码规范',
  description: '前端编码规范',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/index' },
      {
        text: '编码规范',
        items: [
          { text: 'HTML 编码规范', link: '/coding/html' },
          { text: 'CSS 编码规范', link: '/coding/css' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript' },
          { text: 'Typescript 编码规范', link: '/coding/typescript' },
          { text: 'Node 编码规范', link: '/coding/node' },
        ],
      },
      {
        text: '工程规范',
        items: [
          { text: 'Git 规范', link: '/engineering/git' },
          { text: '文档规范', link: '/engineering/doc' },
          { text: 'CHANGELOG 规范', link: '/engineering/changelog' },
        ],
      },
      {
        text: 'NPM包',
        items: [
          { text: 'sunny586-fe-eslint-config', link: '/npm/eslint' },
          { text: 'sunny586-fe-stylelint-config', link: '/npm/stylelint' },
          { text: 'sunny586-fe-commitlint-config', link: '/npm/commitlint' },
          { text: 'sunny586-fe-markdownlint-config', link: '/npm/markdownlint' },
        ],
      },
      {
        text: '脚手架',
        items: [{ text: 'sunny586-fe-lint', link: '/cli/sunny586-fe-lint' }],
      },
    ],
    sidebar: [
      {
        text: '编码规范',
        items: [
          {
            text: 'HTML 编码规范',
            link: '/coding/html',
          },
          {
            text: 'CSS 编码规范',
            link: '/coding/css',
          },
          {
            text: 'JavaScript 编码规范',
            link: '/coding/javascript',
          },
          {
            text: 'Typescript 编码规范',
            link: '/coding/typescript',
          },
          {
            text: 'Node 编码规范',
            link: '/coding/node',
          },
        ],
      },
      {
        text: '工程规范',
        items: [
          {
            text: 'Git 规范',
            link: '/engineering/git',
          },
          {
            text: '文档规范',
            link: '/engineering/doc',
          },
          {
            text: 'CHANGELOG 规范',
            link: '/engineering/changelog',
          },
        ],
      },
      {
        text: 'NPM包',
        items: [
          { text: 'sunny586-fe-eslint-config', link: '/npm/eslint' },
          { text: 'sunny586-fe-stylelint-config', link: '/npm/stylelint' },
          { text: 'sunny586-fe-commitlint-config', link: '/npm/commitlint' },
          { text: 'sunny586-fe-markdownlint-config', link: '/npm/markdownlint' },
        ],
      },
      {
        text: '脚手架',
        items: [{ text: 'sunny586-fe-lint', link: '/cli/sunny586-fe-lint.md' }],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/sunny586/fe-spec' }],
  },
});
