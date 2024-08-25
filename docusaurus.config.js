/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable global-require */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');

const options = require('./data/config');

const { copyright, logo, ...siteOptions } = options.site;
/** @type {import('@docusaurus/types').Config} */
// @ts-ignore
const config = {
    ...siteOptions,
    presets: require(path.join(__dirname, './config/presets')),
    themeConfig: require(path.join(__dirname, './config/theme')),
    plugins: require(path.join(__dirname, './config/plugins')),
    // 因为build报错，所以隐藏本地搜索插件：https://docs.wangchong.wang/blog/2023/06/08/docusaurus-search-local
    // themes: [
    //     [
    //         require.resolve('@easyops-cn/docusaurus-search-local'),
    //         {
    //             hashed: true,
    //             language: ['en', 'zh'],
    //             indexPages: true,
    //             docsRouteBasePath: options.docs.routeBasePath,
    //             blogRouteBasePath: options.blog.routeBasePath,
    //             docsDir: options.docs.path,
    //             blogDir: options.blog.path,
    //         },
    //     ],
    // ],
    // clientModules: [require.resolve('./src/styles/index.css')],
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans', 'en'],
        localeConfigs: {
            'zh-Hans': {
                htmlLang: 'zh-CN',
            },
        },
    },
};

module.exports = config;
