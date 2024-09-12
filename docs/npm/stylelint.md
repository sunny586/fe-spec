---
title: sunny586-fe-stylelint-config
categories:
  - 工程规范
tags:
  - 工程规范

---

# sunny586-fe-stylelint-config

:::tip
sunny586 CSS 规范
:::

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

需要先行安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-SCSS](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install sunny586-fe-stylelint-config stylelint stylelint-scss --save-dev
```

## 使用

在 `.stylelintrc` 中继承本包:

```json
{
  "extends": "sunny586-fe-stylelint-config"
}
```
