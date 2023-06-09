import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: '/documentation/',
  lang: 'zh-CN',
  title: 'Matataki',
  description: 'Matataki 相关文档',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '介绍',
        link: '/guide',
      },
      {
        text: '开发指南',
        link: '/development',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Matataki-io/matataki-frontend',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/README.md',
            '/guide/auth.md',
            '/guide/article.md',
            '/guide/fanpiao.md',
            '/guide/exchange.md',
            '/guide/order.md',
            '/guide/editor.md',
            {
              text: '第三方应用',
              children: [
                '/guide/airdrop.md',
                '/guide/lbs.md',
                '/guide/cryptohero.md',
              ],
            },
          ],
        },
      ],
      '/development/': [
        {
          text: '开发指南',
          children: [
            '/development/README.md',
            '/development/front-end.md',
            '/development/backend-development-guide.md',
            '/development/backend-deployment-guide.md',
            '/development/contributing.md',
            '/development/sponsors.md',
          ],
        },
      ],
    },
  }),
})
