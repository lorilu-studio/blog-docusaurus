---
title: TailwindCSS食用指南
sidebar_label: TailwindCSS食用指南
hide_title: true
pagination_prev: null
pagination_next: null
---
import Image from '@theme/IdealImage';
import $styles from '../style.module.css';

<div className={$styles.banner}>
    <Image img={require('../images/nestjs-benner.png')} />
</div>

:::caution

本教程是有[lorilu-studioの博客](https://pincman.com)开发及制作且**视频和文档是完全免费**的(仅源码和问答服务收费)，未经许可不得随意篡改并商业销售，免费的分享请自便(各位同学请帮我B站三连，谢谢)

:::
 
## ⚡️适用场景

学习了Ts,Node,Nestjs来构建后端对于全栈开发是十分有帮助的,但不是所有场景都适合使用Node和TS的,下面我们来分析一下

Node.js的优势并不在于生态或性能

在技术选型上,Node.js目前的最大优势还是在于前后端同构以及serverless方面,但是以下场景都比较适用

- 聊天室,爬虫类,游戏服务端类,区块链(可代替go)项目等应用
- 缺少后端人员但需要快速快速上线的初创型项目
- 处于上升期,并发量,吞吐量和IO密集型有一定需求,同时对CPU密集不敏感的应用
- 需要项目一体化及与前端同构的应用
- serverless应用
- 前端与API的中间层
- 需要前后端一体化架构,代码统一的应用
- 性能要求不高的CLI类命令行工具以及桌面应用(Electron)
- 各种CLI工具
