# Front-end development documentation

This document provides information about the project's development environment setup, dependency installation, project startup, and deployment.

## Prerequisites

First, make sure that you have the following installed on your machine:

- Node.js (version 16.19.1 or later)

> Because the project has a long history, the higher version cannot be started normally.

## Related resources

- [Nuxt2](https://v2.nuxt.com/)
- [Vue2](https://v2.vuejs.org/)

## Environment variable configuration

项目使用环境变量来配置一些敏感信息或特定配置项。请按照以下步骤进行环境变量配置：

1. 在项目根目录创建一个名为 env.js 的文件。
2. 打开 env.js 文件，并按照需要设置以下环境变量：

```javascript
{
  // ENV
  NODE: 'development',
  NODE_ENV: 'development',
  // API Url
  VUE_APP_API: 'https://apitest.mttk.net',
  // Auth API
  VUE_APP_MATATAKIAUTH_API: 'https://auth.meta.io/apitest',
  // Cache Timeline
  VUE_APP_MATATAKI_CACHE: 'https://cache-ore.mttk.net/matatakitest',
  // OAuth
  VUE_APP_DEVELOPER: 'https://developer.meta.io',
  VUE_APP_DEVELOPER_API: 'https://developer.meta.io/api',
  // App Url
  VUE_APP_URL: 'https://test.meta.io',
  // Ontology scriptHash
  VUE_APP_SCRIPT_HASH: '36df9722fc0ff5fa3979f2a844a012cabe1d4c56',
  // Auth Github
  VUE_APP_GITHUB_CLIENT_ID: '889e6eafa77e2e87a08c',
  // OSS Url
  ssImgAddress: 'https://smartsignature-img.oss-cn-hongkong.aliyuncs.com',
  // App Pc Url
  VUE_APP_PC_URL: 'https://www.meta.io',
  // WeChat share domain name
  WX_SHARE_HOST: 'https://sstest.frontenduse.top',
  // hCaptcha
  VUE_APP_HCAPTCHA_SITE_KEY: 'add3227a-649b-4e14-b286-d6c917f9b775',
  // Telegram、
  TELEGRAM_IV_RHASH: '71acceb5462fa6',
  // Telegram Bot
  TELEGRAM_BOT_NAME: 'matataki_testing_bot',
  TELEGRAM_BOT_ROOT_NAME: 'matataki_test_mobile_bot',
  TELEGRAM_BOT_IN_WX: 'matataki_test_wx_bot',
  TELEGRAM_FANDOM_BOT: 'matataki_testing_bot',
  // Twitter Key
  TWITTER_APP_KEY: 'LdQ6moi0sfGzsPBtVMxjPhbeq',
  // Fanpiao bot
  FANDOM_SERVER_API: 'https://fanpiao-bot-data.web.app',
  // 微信备案域名
  VUE_APP_WX_URL: 'https://smartsignature.frontenduse.top',
  // 前端用来判断在 io 还是非 io
  VUE_APP_DOMAIN_IO: 'meta.io', // localhost
   // 前端用来判断在 cn 还是非 cn
  VUE_APP_DOMAIN_CN: 'meta.io',
  // ETHERSCAN
  VUE_APP_ETHERSCAN: 'https://rinkeby.etherscan.io',
  // BSCSCAN
  VUE_APP_BSCSCAN: 'https://testnet.bscscan.com',
  // MATICSCAN
  VUE_APP_MATICSCAN: 'https://mumbai.polygonscan.com',
  // DAPP Url
  VUE_APP_NFT: 'https://nft-market-test.mttk.net',
}
```

3. 保存并关闭 env.js 文件。

请注意，.env 文件应该被添加到 .gitignore 文件中，以确保敏感信息不会被提交到代码库中。但是我们这里使用的是 env.js 不需要忽略。

## Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/Matataki-io/matataki-frontend.git
```

2. Run ``yarn`` in the project directory to install the necessary dependencies.
3. Modify env.js environment variables.
4. Start the development server by running ``yarn dev``.
5. Finally, visit http://localhost:3000 to see the website.

## Project deployment

如果你的项目是基于 Nuxt.js 构建的，并且需要部署到生产环境，可以按照以下步骤进行部署：

1. 构建项目：

```bash
yarn build-prod
```

此命令将在项目目录中生成构建文件，可以通过任何支持托管的服务进行部署。

2. 将生成的文件部署到目标服务器或托管平台。

3. 配置服务器或托管平台，确保服务器环境满足 Nuxt.js 的要求，并配置适当的路由规则。

4. 启动应用程序：

```bash
yarn start-prod
```

此命令将在生产模式下启动应用程序。

## 更多信息

请参阅项目的其他文档和代码注释，以了解更多关于项目的详细信息和特定功能的使用方法。

如果需要进一步的帮助或有任何疑问，请随时联系我们的开发团队。

祝您开发愉快！

> 注意：以上步骤仅作为示例，具体的操作步骤可能因项目而异。请根据项目实际情况进行调整和修改。
