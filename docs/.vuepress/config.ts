import { defaultTheme } from '@vuepress/theme-default';
import { navBar } from './navbar';
import { sideBar } from './sidebar';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  // locales: {
  //   '/': {
  //     lang: 'zh-CN',
  //     title: 'Blog',
  //   },
  // },
  title:'Blog',
  description: '你的第一个 Vuepress 博客',
  
  theme: defaultTheme({
    // home: '/',
    navbar: navBar,
    sidebar: sideBar,
  }),
});
