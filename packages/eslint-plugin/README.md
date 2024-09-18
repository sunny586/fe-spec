# eslint-plugin-zackcode

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install eslint-plugin-zackcode eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
	plugin: ['eslint-config-zackcode'],
	rules: {
		'eslint-plugin-zackcode/no-secret-info': 'error'
	}
}
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
	extends: 'plugin:eslint-plugin-zackcode/recommended'
}
```

## 支持的规则

- [`no-broad-semantic-versioning`](https://sunny586.github.io/fe-spec/plugin/no-broad-semantic-versioning.html) 不要指定宽泛的版本范围
- [`no-http-url`](https://sunny586.github.io/fe-spec/plugin/no-http-url.html) 使用 HTTPS 协议头的 URL，而不是 HTTP
- [`no-js-in-ts-project`](https://sunny586.github.io/fe-spec/plugin/no-js-in-ts-project.html) 不要在 TS 项目中使用 JS
- [`no-secret-info`](https://sunny586.github.io/fe-spec/plugin/no-secret-info.html) 不要在代码中直接设置 `password` `token` and `secret` 信息
