# Backend Development Documentation

## Prerequisites

First, make sure that you have the following installed on your machine:

- Node.js (version 16.19.1 or later)
- Docker (for running the database)

> We recommend you have installed nvm in order to set the right node version to run this project
>
> ```
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
> ```

## Related resources

- [eggjs](https://www.eggjs.org)
- [eggjs 2.x](https://github.com/eggjs/egg/blob/2.x/site/docs/index.zh-CN.md)


## Environment variable configuration

Create a config/config.local.js file in the project directory and configure environment variables as needed:

```javascript
/**
 * egg-mysql(https://github.com/eggjs/egg-mysql/tree/d3fa13cff21dcb4cf2d72d52e144fc5d37c26694) config
 * use mysql 5.7
 * attention: this config used for docker compose, if you don't use docker compose, you should change it
 */
config.mysql = {
  client: {
    host: 'db_local',
    port: '3306',
    user: 'ss_test',
    password: 'p@sSw0Rd',
    database: 'ss',
    // ssl: {
    //   ca: fs.readFileSync(__dirname + '/certs/ca.pem'),
    //   key: fs.readFileSync(__dirname + '/certs/client-key.pem'),
    //   cert: fs.readFileSync(__dirname + '/certs/client-cert.pem')
    // },
    multipleStatements: true,
    charset: 'utf8mb4',
  },
};



/**
 * egg-redis(https://github.com/eggjs/egg-redis) config
 * use redis 7
 * attention: this config used for docker compose, if you don't use docker compose, you should change it
 */
config.redis = {
  client: {
    port: 6379,
    host: 'redis_local',
    password: 'p@sSw0Rd',
    db: 0,
  },
};
```

## Installation

1. Clone the repository to your local machine.
2. Run ``yarn`` in the project directory to install the necessary dependencies.
3. Spin up required services with ``docker-compose up -d``
    - Note: In addition to postgres and redis, this will also run ipfs service
4. By creating config/config.local.js
5. Start the development server by running ``yarn dev``.
6. Finally, visit http://localhost:7001 to see the website.


## Project deployment

要部署Egg.js项目，你可以使用不同的方式，例如使用PM2、Docker等。以下是一种常见的部署方法：

1. 配置部署环境：根据部署环境的要求，配置相关环境变量和配置文件。

2. 启动项目：使用以下命令启动项目：

```bash
yarn start
```

3. 监听日志：为了方便调试和监控，可以设置日志输出路径，并监控日志文件。

4. 监控和运维：根据实际需求，使用相关工具进行监控和运维，例如PM2、Nginx等。

## 其他内容

在开发文档中，你还可以包括以下内容：

- 项目结构说明
- 路由和控制器的定义和使用
- 数据库模型和操作示例
- 接口文档和使用示例
- 错误处理和日志记录
- 单元测试和集成测试
- 安全性和权限控制
- 性能优化和缓存策略

根据你的项目需求，你可以添加更多详细的内容和示例。

注意：上述文档仅作为示例，具体的项目开发文档内容应根据实际项目需求进行编写和补充。