# Back-end deployment guide

This document describes how to deploy this project.

We recommend using [docker-compose](https://docs.docker.com/compose/) to deploy the required services. A docker-compose.yml file has been provided with the configurations for MySQL, Redis, Elasticsearch, and Kubo IPFS. You can directly use this file to start and manage these services.

## Prerequisites

First, make sure that you have the following installed on your machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Second, you need to apply for the following services:
- IPFS Service, currently support [Infura](https://www.infura.io/product/ipfs/) and [Fleek](https://fleek.co/storage/), you must choose one of them.
- [AlibabaCloud OSS](https://www.alibabacloud.com/product/object-storage-service/)
- [SendCloud](https://www.sendcloud.net/)
- [GeeTest CAPTCHA v3](https://www.geetest.com/en/Captcha/)

## Related resources

- [eggjs 2.x](https://github.com/eggjs/egg/blob/2.x/site/docs/index.zh-CN.md)

## Clone this repository and join the folder

```bash
git clone https://github.com/Matataki-io/matataki-backend.git
```

```bash
cd matataki-backend
```

## Environment variable configuration

To modify the project's configuration options, you can follow these steps:

1. Locate the `config.default.js` file in your project `config/` directory. This file contains the default configuration options.

2. Create a copy of `config.default.js` and rename it as `config.prod.js`.

In `config.prod.js`, you can modify the specific configuration options according to your requirements. The application will prioritize the values defined in `config.prod.js` over the default options specified in `config.default.js`.

Locate the configuration options marked with `@required`. These options are essential for the application to function properly. Make sure to provide the necessary values for these options.

Additionally, some configuration options have default values set according to the requirements of Docker Compose. However, it is still recommended to review and adjust these values based on your specific needs.

## Run with docker-compose

```bash
docker compose --profile deploy up -d --build
```

## Initialize the database

1. Attach to the ss_backend_local container

    ```bash
    docker exec -it ss_backend_local sh
    ```

2. Initialize the database

    ```bash
    yarn run db:init
    ```

The following message will be displayed if the database is initialized successfully:

```bash
yarn run v1.22.19
$ node ./scripts/database/init.js
Connect to mysql_local:3306...
Connected to mysql_local:3306
Read SQL file /usr/src/app/database/db-dump.sql...
Query SQL file /usr/src/app/database/db-dump.sql...
Query SQL file /usr/src/app/database/db-dump.sql done
Done in 0.96s.
```

## Check the status of the services

Docker Compose exposes `7001` as the default port for the backend service. You can check the status of the backend service by visiting `http://localhost:7001/` in your browser, it should return a text message like `hi, egg, version=1.6.8, undefined`.

Visiting `http://localhost:7001/posts/timeRanking` can check if you are initializing the database successfully, it should return a JSON message like `{"code":0,"message":"成功","data":{"count":0,"list":[]}}`.

Once the backend service is up and running, you are all done with the deployment.
