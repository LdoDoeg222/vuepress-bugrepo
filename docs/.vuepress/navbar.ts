import { NavbarConfig } from '@vuepress/theme-default';

export const navBar: NavbarConfig = [
  // {
  //   text: 'Guide',
  //   children: [
  //     {
  //       link: '/guide/guide.md',
  //       text: 'guide',
  //     },
  //     {
  //       link: '/guide/intro.md',
  //       text: 'intro',
  //     },
  //     {
  //       link: '/guide/intro2.md',
  //       text: 'intro2',
  //     },
  //   ],
  // },
  {
    text: 'Guide',
    children: [
      '/guide/guide.md',
      '/guide/intro.md',
      '/guide/intro2.md'
    ],
  },
];
