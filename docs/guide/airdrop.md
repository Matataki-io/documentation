# DAPP-空投

### 创建空投
* POST /airdrop
* Headers
    * x-access-token: 用户登录的accessToken
* request body
    * tokenId:fan票id
    * amount: 空投总量
    * quantity: 空投份额
    * duration: 持续时间（单位：天）
```
{
	"title": "matataki世界第一个空投",
	"tokenId": 14,
	"amount": 50000,
	"quantity": 5,
	"duration": 5
}
```
* 返回数据
```
{
    "owner": 1042,
    "hash_tag": "RDKTCOOV63b5",
    "title": "matataki世界第三个空投",
    "token_id": 14,
    "amount": 50000,
    "quantity": 5,
    "duration": 5,
    "id": 14,
    "created_at": "2020-06-24T13:59:58.162Z"
}
```

### 获取空投列表
* GET /airdrop?sort=created_at,DESC&limit=10&page=1
* params:
    * sort: 排序，created_at,DESC 为按照创建时间倒序
    * limit: page size
    * page: page index
* 返回数据
```
{
    "data": [
        {
            "id": 14,
            "title": "matataki世界第三个空投",
            "owner": 1042,
            "hash_tag": "RDKTCOOV63b5",
            "token_id": 14,
            "quantity": 5,
            "created_at": "2020-06-24T13:59:58.162Z",
            "duration": 5,
            "amount": 50000
        },
        {
            "id": 13,
            "title": "matataki世界第二个空投",
            "owner": 1042,
            "hash_tag": "FmAjy9MMaMeB",
            "token_id": 14,
            "quantity": 5,
            "created_at": "2020-06-24T13:54:57.346Z",
            "duration": 5,
            "amount": 50000
        },
        {
            "id": 12,
            "title": "matataki世界第一个空投",
            "owner": 1042,
            "hash_tag": "OPJj2Ax20n8k",
            "token_id": 14,
            "quantity": 5,
            "created_at": "2020-06-24T13:22:41.983Z",
            "duration": 5,
            "amount": 50000
        }
    ],
    "count": 3,
    "total": 3,
    "page": 1,
    "pageCount": 1
}
```

### 获取空投项目
* GET /airdrop/:hash
* params
    * hash: 空投的唯一标识hash
* 返回数据
```
{
    "id": 12,
    "title": "matataki世界第一个空投",
    "owner": 1042,
    "hash_tag": "OPJj2Ax20n8k",
    "token_id": 14,
    "quantity": 5,
    "created_at": "2020-06-24T13:22:41.983Z",
    "duration": 5,
    "amount": 50000
}
```


### 领取空投
* POST /airdrop/:hash
* params
    * hash: 空投的唯一标识hash
* Headers
    * x-access-token: 用户登录的accessToken
* request body
```
{"memo":"领取一下空投"}
```
* 返回数据
```
{
    "uid": 1329,
    "hash_tag": "RDKTCOOV63b5",
    "amount": 10000,
    "token_id": 14,
    "tx_hash": "0xc448f0eeff7d115e3544d3cf377d9ba50a27a562d831ce135b5945dc54371418",
    "id": 6,
    "created_at": "2020-06-24T14:05:11.666Z"
}
```