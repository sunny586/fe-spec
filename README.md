# fe-spec

前端编码规范工程化

## husky、lint-staged、@commitlint/cli

-  安装依赖

```bash
npm i husky -D
npm i lint-staged -D
npm i @commitlint/cli @commitlint/config-conventional -D
```

- 运行初始化脚本

```bash
// 生成 .husky 的文件夹
npx husky install

// 添加 hooks，会在 .husky 目录下生成一个 pre-commit 脚本文件
npx husky add .husky/pre-commit "npx lint-staged"

// 添加 commit-msg
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'
```

- 生成的文件 pre-commit如果没有生成新建一下

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

- 生成的文件 commit-msg如果没有生成新建一下

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit ${1}
```

- 在 `package.json` 中配置lint-staged

```json
{
  // ...
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{scss,less,css,html,md}": [
      "prettier --write"
    ],
    "package.json": [
      "prettier --write"
    ],
    "{!(package)*.json,.!(browserslist)*rc}": [
      "prettier --write--parser json"
    ]
  }
}
```

- 根目录新增 commitlint.config.js

```js
module.exports = {
  extends: ['./packages/commitlint-config/index.js'],
};
```

- 提交格式

```bash
git commit -m <type>[optional scope]: <description> // 注意冒号后面有空格
- type：提交的类型（如新增、修改、更新等）
- optional scope：涉及的模块，可选
- description：任务描述
```

## markdownlint

需要安装2个包：markdownlint markdownlint-cli

```bash
npm i -D markdownlint markdownlint-cli
pnpm run lint
```

## 生成`CHANGELOG`

参考[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)，安装`conventional-changelog-cli`：

```bash
npm install -D conventional-changelog-cli
pnpm run changelog
```

## 参考资料

- [vue项目配置git提交规范husky、lint-staged、@commitlint/cli](https://blog.csdn.net/qq_61402485/article/details/131612959)
- [Vue3+Ts+Vite项目(第三篇)——配置husky、stylelint、commitlint，配置git提交代码校验](https://blog.csdn.net/qq_44741577/article/details/137959595)
