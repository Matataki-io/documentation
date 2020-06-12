# 交易所系统

## 交易

### 我的交易流水
* GET /token/myPurchaseLogs
* 参数：
    * tokenId
* Headers
    * x-access-token: 用户登录的accessToken
* 返回数据
```
{
    "code":0,
    "message":"成功",
    "data":[
        {
            "id":1021,
            "uid":23,
            "sold_token_id":0,
            "sold_amount":100,
            "bought_token_id":22,
            "bought_amount":56,
            "recipient":23,
            "create_time":"2020-06-02T09:01:51.000Z",
            "ip":"",
            "cny_reserve_before":140675037,
            "token_reserve_before":79958407,
            "tx_hash":"0x7caa48ce126425f762c75fcf8dc4e2793dd0eb98576750cdae15106b7a9ef7ba",
            "direction":"buy",
            "cny_amount":100,
            "token_amount":56
        }
    ]
}
```
### 全部交易流水
* GET /token/purchaseLogs
* 参数：
    * tokenId
* 返回数据：只返回最近的100条
```
{
    "code":0,
    "message":"成功",
    "data":[
        {
            "id":1021,
            "uid":23,
            "sold_token_id":0,
            "sold_amount":100,
            "bought_token_id":22,
            "bought_amount":56,
            "recipient":23,
            "create_time":"2020-06-02T09:01:51.000Z",
            "ip":"",
            "cny_reserve_before":140675037,
            "token_reserve_before":79958407,
            "tx_hash":"0x7caa48ce126425f762c75fcf8dc4e2793dd0eb98576750cdae15106b7a9ef7ba",
            "direction":"buy",
            "cny_amount":100,
            "token_amount":56
        }
        ...
    ]
}
```

## 流动金

### 全部流水金流水
* GET /token/liquidityLogs
* 参数：
    * tokenId
* 返回数据
```
{
    "code":0,
    "message":"成功",
    "data":{
        "count": 10,
        "list": [{
            "id":58,
            "uid":1230,
            "token_id":14,
            "cny_amount":1700,
            "token_amount":9684,
            "liquidity":40,
            "create_time":"2020-02-28T08:33:34.000Z",
            "name":"小田的空气币",
            "symbol":"XTB",
            "decimals":4,
            "total_supply":1000000000000,
            "logo":"/image/2019/10/25/f905fe7c16d40c21668aef5d7b3c4dc0.png",
            "username":"0x28ac4bd00a49891a8c1a205699153c9532247d58",
            "nickname":"hi",
            "tx_hash":"0xcb6aabdc20aa59ee8e203a36c4c808fb672fa3a3b70d3ed6153d4dd888e7aa64"
        },
        ...
    ]
}
```

### 我的流动金流水
* GET /token/myLiquidityLogs
* 参数：
    * tokenId
* Headers
    * x-access-token: 用户登录的accessToken
* 返回数据
```
{
    "code":0,
    "message":"成功",
    "data":{
        "count": 10,
        "list": [{
            "id":58,
            "uid":1230,
            "token_id":14,
            "cny_amount":1700,
            "token_amount":9684,
            "liquidity":40,
            "create_time":"2020-02-28T08:33:34.000Z",
            "name":"小田的空气币",
            "symbol":"XTB",
            "decimals":4,
            "total_supply":1000000000000,
            "logo":"/image/2019/10/25/f905fe7c16d40c21668aef5d7b3c4dc0.png",
            "username":"0x28ac4bd00a49891a8c1a205699153c9532247d58",
            "nickname":"hi",
            "tx_hash":"0xcb6aabdc20aa59ee8e203a36c4c808fb672fa3a3b70d3ed6153d4dd888e7aa64"
        },
        ...
    ]
}
```

### 以输入为准计算输出
* GET /exchange/outputAmount
* 参数
    * inputTokenId （⚠️CNY的话为0）
    * outputTokenId ️️️（⚠️不能和inputTokenId相同）
    * inputAmount （⚠️= inputValue * (10^token_decimals)）
* 返回数据：
    * ⚠️outputAmount = res.data / (10^token_decimals)
```
{
    "code":0,
    "message":"成功",
    "data":23530
}
```

### 以输出为准计算输入
* GET /exchange/inputAmount
* 参数
* 参数
    * inputTokenId （⚠️CNY的话为0）
    * outputTokenId ️️️（⚠️不能和inputTokenId相同）
    * outputAmount （⚠️= outputValue * (10^token_decimals)）
* 返回数据：
    * ⚠️inputAmount = res.data / (10^token_decimals)
```
{
    "code":0,
    "message":"成功",
    "data":24175
}
```

### 查看用户CNY余额
* GET /asset/balance
* 参数：
    * symbol：CNY
* Headers
    * x-access-token: 用户登录的accessToken

* 返回数据为用户余额 （⚠️balance = res / (10^4)）


### 添加流动金：根据输入CNY计算输出token
* GET /exchange/poolCnyToTokenPrice
* 参数
    * outputTokenId： 输出token的id
    * inputAmount： 输入cny的数量（⚠️inputAmount = inputValue * (10^4)）
* 返回数据
    * ⚠️outputAmount = res.data / (10^token_decimals)
```
{
    "code":0,
    "message":"成功",
    "data":23849.594875117542
}
```

### 添加流动金：计算用户挖到的token流动金凭证
![2020-06-12-11-25-51](images/2020-06-12-11-25-51.png)
* GET /exchange/userMintToken
* 参数：
    * tokenId
    * amount：输入cny的数量（⚠️inputAmount = inputValue * (10^4)）
* 返回数据
    * ⚠️token流动金凭证 = res.data / (10^token_decimals)
```
{
    "code":0,
    "message":"成功",
    "data":1535
}
```

### 删除流动金：根据token凭证数量计算输出
![2020-06-12-11-29-21](images/2020-06-12-11-29-21.png)
* GET /exchange/outputPoolSize
* 参数：
    * tokenId
    * amount：输入cny的数量（⚠️inputAmount = inputValue * (10^4)）
* 返回数据：
    * cny_amount：token凭证对应的cny数量（⚠️ 显示 = cny_amount * (10^4)）
    * token_amount：token凭证对应的token数量（⚠️页面显示 = token_amount * (10^token_decimals)）
```
{
    "code":0,
    "message":"成功",
    "data":{
        "cny_amount":6511.876712328767,
        "token_amount":15529.910958904109
    }
}
```

### 删除流动金
* POST /exchange/removeLiquidity
* request body
```
{
    "tokenId":14,
    "amount":200,
    "min_cny":12763.278356164383,
    "min_tokens":30438.625479452054
}
```
* 返回数据
```
{"code":0,"message":"成功","data":0}
```