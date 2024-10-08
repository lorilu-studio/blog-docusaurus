/* eslint-disable global-require */
import { WorkCardTagsType } from '@site/src/components/card/work';
import { WorkCardItemType, WorksPageInfoType, Techbadge } from '@site/src/types';

export const worksInfo: WorksPageInfoType = {
    title: '作品',
    description:
        '我是一名中年老码农,为生活而负重前行,为兴趣而坚守理想,专注于TS,React,Node全栈<br />同时拥有15年PHP开发经验并学习Golang中',
};
export const works: WorkCardItemType[] = [
    // {
    //     img: require('./images/works/work_common.png'),
    //     name: 'Rowfish',
    //     desc: '基于Docusaurus v2 静态网站生成器实现个人知识管理与分享程序,包含文档,博客,个人及作品介绍和生态导航等功能',
    //     link: '/rowfish',
    //     demo: 'https://pincman.com',
    //     source: 'http://github.com/rowfishjs/rowfish',
    //     tags: ['docusarus', 'typescript', 'react', 'theme'],
    // },
    
    {
        img: require('./images/works/work_common.png'),
        name: 'Talejs',
        desc: '一个使用EsBuild或SWC直接运行Node+TS的库,并结合Nodemon可在开发环境极速热重载',
        link: 'https://github.com/talejs/talejs',
        source: 'https://github.com/talejs/talejs',
        tags: ['typescript', 'nodejs', 'nestjs'],
    },
    
];
export const tags: WorkCardTagsType = {
    design: {
        label: 'Design',
        description: '纯设计或css类作品!',
        color: '#a44fb7',
    },
    typescript: {
        label: 'TypeScript',
        description: '使用Typescript编写的项目',
        color: '#007acc',
    },
    vue: {
        label: 'VUE',
        description: '基于vuejs实现的项目!',
        color: '#39ca30',
    },
    react: {
        label: 'React',
        description: '基于React实现的项目!',
        color: '#dfd545',
    },
    php: {
        label: 'PHP',
        description: '基于PHP开发的项目',
        color: '#dfd545',
    },

    golang: {
        label: 'Golang',
        description: '基于golang开发的项目',
        color: '#6c55d5',
    },

    nodejs: {
        label: 'Node.JS',
        description: 'NodeJS或全栈应用',
        color: '#39ca30',
    },

    nestjs: {
        label: 'NestJS',
        description: 'NestJS应用',
        color: '#ff3333',
    },
    theme: {
        label: 'Theme',
        description: '皮肤或主题',
        color: '#78c1cd',
    },
    dashbord: {
        label: 'Dashboard',
        description: '中后台管理面板或系统',
        color: '#6948cd',
    },
    docusarus: {
        label: 'docusarus',
        description: '在docusarus之上构建的项目',
        color: '#35cd35',
    },
};

export const badges: Techbadge[] = [
    {
        label: 'Javascript',
        logo: 'javascript',
    },
    {
        label: 'Typescript',
        logo: 'typescript',
    },
    {
        label: 'Node.js',
        logo: 'node.js',
    },
    {
        label: 'PHP',
        logo: 'php',
    },
    {
        label: 'Go',
        logo: 'go',
    },
    {
        label: 'React',
        logo: 'react',
    },
    {
        label: 'NestJS',
        logo: 'nestjs',
    },
    {
        label: 'Laravel',
        logo: 'laravel',
    },
    {
        label: 'Electron',
        logo: 'electron',
    },
    {
        label: '小程序',
        logo: 'wechat',
    },
    {
        label: 'Linux',
        logo: 'linux',
    },
    {
        label: 'Docker',
        logo: 'docker',
    },
    {
        label: 'Mysql',
        logo: 'mysql',
    },
    {
        label: 'MongoDB',
        logo: 'mongodb',
    },
    {
        label: 'Redis',
        logo: 'redis',
    },
    {
        label: 'RabbitMQ',
        logo: 'RabbitMQ',
    },
];
