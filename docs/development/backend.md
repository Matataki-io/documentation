# 后端开发文档

## 环境要求

- Node.js 版本 v16.19.1 或更高版本

## 相关资源

- [eggjs](https://www.eggjs.org)
- [eggjs 2.x](https://github.com/eggjs/egg/blob/2.x/site/docs/index.zh-CN.md)


## 环境变量配置

在项目目录创建一个 config/config.local.js 文件，并按需配置环境变量：

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

## 依赖安装

1. 将存储库克隆到本地计算机。
2. 在项目目录中运行 yarn 以安装必要的依赖项。
3. 使用 docker-compose up -d 启动所需的服务
    - 注意：除了 mysql5.7 和 redis，还有 IPFS 相关服务
4. 通过创建 config/config.local.js
5. 通过运行 yarn dev 启动开发服务器。
6. 最后，访问 http://localhost:7001 查看网站。


## 项目部署

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