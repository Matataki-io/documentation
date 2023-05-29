import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
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
    },
  }),
})
