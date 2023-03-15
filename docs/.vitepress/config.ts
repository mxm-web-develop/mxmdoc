import { defineConfig } from "vitepress";
export default defineConfig({
  title: "MxM_Document",
  titleTemplate: "Mxm 学习文档",
  lang: "zh-CN",
  lastUpdated: true,
  base: "/",
  description: "Mxm 学习文档",
  // outDir: '../documentWeb',
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "MxM | Leaning Notes",
    nav: [
      { text: "前端", link: "/construction/index.md" },
      { text: "后端", link: "/bugs/index.md" },
      { text: "web3", link: "/plan/index.md" },
      { text: "apis", link: "/plan/index.md" },
    ],
    sidebar: {
      "/frontend/": [
        {
          text: "Vue",
          collapsed: true,
          items: [
            { text: "Vue中的包装React组件", link: "/frontend/Vue/index.md" },
          ],
        },
        {
          text:'Vite',
          collapsed:true,
          items:[
            {text:"lib打包配置",link:'/frontend/Vite/buildforlib.md'}
          ]
        }
      ],
      "/backend/": [
        {
          text: "Git",
          collapsed: true,
          items: [
            { text: "Git常用命令", link: "/backend/Git/index.md" },
          ],
        },
      ],
      "/web3/":[
        {
          text: "Web3",
          collapsed: true,
          items: [
            { text: "关于Web3", link: "/web3/presentation/index.md" },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present MxM zhf",
    },
  },
});
