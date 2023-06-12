# Front-end development documentation

This document provides information about the project's development environment setup, dependency installation, project startup, and deployment.

## Prerequisites

First, make sure that you have the following installed on your machine:

- Node.js (version 16.19.1)

> Because the project has a long history, the higher version cannot be started normally.

## Related resources

- [Nuxt2](https://v2.nuxt.com/)
- [Vue2](https://v2.vuejs.org/)

## Clone this repository and join the folder

1. Clone the repository to your local machine.

```bash
git clone https://github.com/Matataki-io/matataki-frontend.git

cd matataki-frontend
```

## Environment variable configuration

Projects use environment variables to configure some sensitive information or specific configuration items. Follow the steps below to configure environment variables:

1. Open the env.js file and set the following environment variables as required:

```javascript
{
  // ENV
  NODE: 'development',
  NODE_ENV: 'development',
  // @required API Url
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
  // @important Auth Github
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

## Start project

1. Run `yarn` in the project directory to install the necessary dependencies.
2. Modify env.js environment variables.
3. Start the development server by running `yarn dev`.
4. Finally, visit [http://localhost:3000](http://localhost:3000) to see the website.

## Project deployment

If your project is built on Nuxt.js and needs to be deployed to a production environment, follow these steps:

1. Build the project:

```bash
yarn build-prod
```

2. To launch the application:

```bash
yarn start-prod
```

3. Visit [http://localhost:3000](http://localhost:3000) to see the website.
