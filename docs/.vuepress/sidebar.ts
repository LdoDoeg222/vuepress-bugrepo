import { SidebarConfig } from '@vuepress/theme-default';

export const sideBar: SidebarConfig = {
  // '/guide/': [
  //   {
  //     text: 'Guide',
  //     children: [
  //       {
  //         link: '/guide/guide.md',
  //         text: 'guide',
  //       },
  //       {
  //         link: '/guide/intro.md',
  //         text: 'intro',
  //       },
  //       {
  //         link: '/guide/intro2.md',
  //         text: 'intro2',
  //       },
  //     ],
  //   },
  // ],
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/guide.md',
        '/guide/intro.md',
        '/guide/intro2.md',
      ],
    },
  ],
};
