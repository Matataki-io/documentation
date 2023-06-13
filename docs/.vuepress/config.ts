import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: '/documentation/',
  lang: 'zh-CN',
  title: 'Matataki',
  description: 'Matataki documentation',
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide/index.html',
      },
      {
        text: 'Development guide',
        link: '/development/index.html',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Matataki-io/documentation',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
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
          text: 'Development guide',
          children: [
            '/development/README.md',
            '/development/front-end-guide.md',
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
