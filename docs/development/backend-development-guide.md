# Back-end development guide

This document describes how to start the project locally.

We recommend using [docker-compose](https://docs.docker.com/compose/) to deploy the required services. A docker-compose.yml file has been provided with the configurations for MySQL, Redis, Elasticsearch, and Kubo IPFS. You can directly use this file to start and manage these services.

## Prerequisites

First, make sure that you have the following installed on your machine:

- Node.js (version 18 or later)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

> We recommend you have installed nvm in order to set the right node version to run this project
>
> ```
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
> ```

Second, you need to apply for the following services:

- IPFS Service, currently support [Infura](https://www.infura.io/product/ipfs/) and [Fleek](https://fleek.co/storage/), you must choose one of them.
- [AlibabaCloud OSS](https://www.alibabacloud.com/product/object-storage-service/)
- [SendCloud](https://www.sendcloud.net/)
- [GeeTest CAPTCHA v3](https://www.geetest.com/en/Captcha/)

## Related resources

- [eggjs](https://www.eggjs.org)
- [eggjs 2.x](https://github.com/eggjs/egg/blob/2.x/site/docs/index.zh-CN.md)

## Clone this repository and join the folder

```bash
git clone https://github.com/Matataki-io/matataki-backend.git

cd matataki-backend
```

## Run with docker-compose

```bash
docker compose up -d
```

> 1. If you are using the Mac OS (M series) operating system.
>       - You may encounter problems like `no matching manifest for linux/arm64/v8 in the manifest list entries`. To solve this problem, you can consider replacing the image. For example, you could try using a [biarms/mysql:5.7-beta-circleci
](https://hub.docker.com/layers/biarms/mysql/5.7.33-beta-circleci/images/sha256-70508b9c4b53d3598dabf6a11c68ceaf489c8d8e379d01f3b7c9e025d104840d?context=explore) image.

```bash
⠿ Network matataki-backend_default  Created
⠿ Container mysql_local             Started
⠿ Container elasticsearch_local     Started
⠿ Container redis_local             Started
⠿ Container ipfs_local              Started
```

## Environment variable configuration

To modify the project's configuration options, you can follow these steps:

1. Locate the `config.default.js` file in your project `config/` directory. This file contains the default configuration options.

2. Create a copy of `config.default.js` and rename it as `config.local.js`.

    - In `config.local.js`, you can modify the specific configuration options according to your requirements. The application will prioritize the values defined in `config.local.js` over the default options specified in `config.default.js`.

    - Locate the configuration options marked with `@required`. These options are essential for the application to function properly. Make sure to provide the necessary values for these options.

    - Additionally, some configuration options have default values set according to the requirements of Docker Compose. However, it is still recommended to review and adjust these values based on your specific needs.

3. If you are using Docker Compose's pre-configured service, set the corresponding `host` to the IP address of your local machine (for example, `127.0.0.1`) in the configuration environment variable.
    - `mysql_local`
    - `redis_local`
    - `elasticsearch_local`
    - `ipfs_local`

## Start project

1. Run ``yarn`` in the project directory to install the necessary dependencies.
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
    Read SQL file /matataki-backend/database/db-dump.sql...
    Query SQL file /matataki-backend/database/db-dump.sql...
    Query SQL file /matataki-backend/database/db-dump.sql done
    Done in 0.96s.
    ```

    > If you need to execute the database initialization script, set the `mysql` `host` in `config.default` to the IP address of the local machine (for example, `127.0.0.1`) when configuring the environment variables. Doing so ensures that the script runs correctly on the local database.


3. Start the development server by running ``yarn dev``.
4. Finally, visit [http://localhost:7001](http://localhost:7001) to see the website.

## Check the status of the services

Exposes `7001` as the default port for the backend service. You can check the status of the backend service by visiting [http://localhost:7001](http://localhost:7001) in your browser, it should return a text message like `hi, egg, version=1.6.8, undefined`.

Visiting [http://localhost:7001/posts/timeRanking](http://localhost:7001/posts/timeRanking) can check if you are initializing the database successfully, it should return a JSON message like `{"code":0,"message":"成功","data":{"count":0,"list":[]}}`.

Once the backend service is up and running, you are all done with the start.