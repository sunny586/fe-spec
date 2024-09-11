import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'sunny586-fe 前端编码规范',
  description: '前端编码规范',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/index.md' },
      {
        text: '编码规范',
        items: [
          { text: 'HTML 编码规范', link: '/coding/html.md' },
          { text: 'CSS 编码规范', link: '/coding/css.md' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
          { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
          { text: 'Node 编码规范', link: '/coding/node.md' },
        ],
      },
      {
        text: '工程规范',
        items: [
          { text: 'Git 规范', link: '/engineering/git.md' },
          { text: '文档规范', link: '/engineering/doc.md' },
          { text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
        ],
      },
      {
        text: 'NPM包',
        items: [
          { text: 'encode-fe-eslint-config', link: '/npm/eslint.md' },
          { text: 'encode-fe-stylelint-config', link: '/npm/stylelint.md' },
          { text: 'encode-fe-commitlint-config', link: '/npm/commitlint.md' },
          { text: 'encode-fe-markdownlint-config', link: '/npm/markdownlint.md' },
        ],
      },
    ],
    sidebar: [
      {
        text: '编码规范',
        items: [
          {
            text: 'HTML 编码规范',
            link: '/coding/html.md',
          },
          {
            text: 'CSS 编码规范',
            link: '/coding/css.md',
          },
          {
            text: 'JavaScript 编码规范',
            link: '/coding/javascript.md',
          },
          {
            text: 'Typescript 编码规范',
            link: '/coding/typescript.md',
          },
          {
            text: 'Node 编码规范',
            link: '/coding/node.md',
          },
        ],
      },
      {
        text: '工程规范',
        items: [
          {
            text: 'Git 规范',
            link: '/engineering/git.md',
          },
          {
            text: '文档规范',
            link: '/engineering/doc.md',
          },
          {
            text: 'CHANGELOG 规范',
            link: '/engineering/changelog.md',
          },
        ],
      },
      {
        text: 'NPM包',
        items: [
          { text: 'encode-fe-eslint-config', link: '/npm/eslint.md' },
          { text: 'encode-fe-stylelint-config', link: '/npm/stylelint.md' },
          { text: 'encode-fe-commitlint-config', link: '/npm/commitlint.md' },
          { text: 'encode-fe-markdownlint-config', link: '/npm/markdownlint.md' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/sunny586/fe-spec' }],
  },
});
