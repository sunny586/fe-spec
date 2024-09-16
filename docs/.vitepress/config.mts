import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	// outDir: '.vitepress/dist',
	base: process.env.NODE_ENV === 'production' ? '/fe-spec/' : '/',
	title: '前端编码规范',
	description: '前端编码规范',
	themeConfig: {
		search: {
			provider: 'local',
			options: {
				locales: {
					zh: {
						translations: {
							button: {
								buttonText: '搜索文档',
								buttonAriaLabel: '搜索文档'
							},
							modal: {
								noResultsText: '无法找到相关结果',
								resetButtonTitle: '清除查询条件',
								footer: {
									selectText: '选择',
									navigateText: '切换'
								}
							}
						}
					}
				}
			}
		},
		i18nRouting: false,
		logo: '/logo.png',
		outline: {
			level: 'deep',
			label: '目录'
		},
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
					{ text: 'Node 编码规范', link: '/coding/node' }
				]
			},
			{
				text: '工程规范',
				items: [
					{ text: 'Git 规范', link: '/engineering/git' },
					{ text: '文档规范', link: '/engineering/doc' },
					{ text: 'CHANGELOG 规范', link: '/engineering/changelog' }
				]
			},
			{
				text: 'NPM包',
				items: [
					{ text: 'eslint-config-zack', link: '/npm/eslint' },
					{ text: 'sunny586-fe-stylelint-config', link: '/npm/stylelint' },
					{ text: 'sunny586-fe-commitlint-config', link: '/npm/commitlint' },
					{ text: 'sunny586-fe-markdownlint-config', link: '/npm/markdownlint' }
				]
			},
			{
				text: '脚手架',
				items: [{ text: 'sunny586-fe-lint', link: '/cli/sunny586-fe-lint' }]
			}
		],
		sidebar: [
			{
				text: '编码规范',
				items: [
					{
						text: 'HTML 编码规范',
						link: '/coding/html'
					},
					{
						text: 'CSS 编码规范',
						link: '/coding/css'
					},
					{
						text: 'JavaScript 编码规范',
						link: '/coding/javascript'
					},
					{
						text: 'Typescript 编码规范',
						link: '/coding/typescript'
					},
					{
						text: 'Node 编码规范',
						link: '/coding/node'
					}
				]
			},
			{
				text: '工程规范',
				items: [
					{
						text: 'Git 规范',
						link: '/engineering/git'
					},
					{
						text: '文档规范',
						link: '/engineering/doc'
					},
					{
						text: 'CHANGELOG 规范',
						link: '/engineering/changelog'
					}
				]
			},
			{
				text: 'NPM包',
				items: [
					{ text: 'eslint-config-zack', link: '/npm/eslint' },
					{ text: 'sunny586-fe-stylelint-config', link: '/npm/stylelint' },
					{ text: 'sunny586-fe-commitlint-config', link: '/npm/commitlint' },
					{ text: 'sunny586-fe-markdownlint-config', link: '/npm/markdownlint' },
					{ text: 'sunny586-fe-eslint-plugin', link: '/npm/eslint-plugin' }
				]
			},
			{
				text: '脚手架',
				items: [{ text: 'sunny586-fe-lint', link: '/cli/sunny586-fe-lint.md' }]
			}
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com/sunny586/fe-spec' }],
		footer: {
			message: '如有转载或 CV 的请标注本站原文地址',
			copyright: `Copyright © ${new Date().getFullYear()}-present zack`
		},
		lastUpdated: {
			text: '最后更新于',
			formatOptions: {
				dateStyle: 'short',
				timeStyle: 'medium'
			}
		},
		docFooter: {
			prev: '上一篇',
			next: '下一篇'
		},
		returnToTopLabel: '回到顶部',
		sidebarMenuLabel: '菜单',
		darkModeSwitchLabel: '主题',
		lightModeSwitchTitle: '切换到浅色模式',
		darkModeSwitchTitle: '切换到深色模式'
	}
})
