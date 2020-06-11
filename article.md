# 文章系统

### 1. 获取热门文章
* GET /posts/scoreRanking
* 参数
    - page：当前页数，默认值1
    - pagesize：每页大小，默认值20
* 返回数据，`token_`为开头的字段为需要的token信息，`pay_`为开头的为需要支付的信息
```
{
    "code":0,
    "message":"成功",
    "data":{
        "count":3621,
        "list":[
            {
                "id":4333,
                "uid":1108,
                "author":"b****************@g*ail.com",
                "title":"1111",
                "status":0,
                "hash":"QmYoNzoAzDNxayyXNZV3DyKvZaEtFLyHdEYFdnT44PcFUo",
                "create_time":"2020-06-11T07:14:35.000Z",
                "cover":"/image/2020/06/11/b47bd713de3733bccefd1de5da08a84c.png",
                "require_holdtokens":0,
                "require_buy":0,
                "short_content":"111",
                "nickname":"billchen",
                "avatar":"/avatar/2020/06/11/44b0fc8693b9155c8b7970d97cae0a68.jpg",
                "read":8,
                "likes":0,
                "pay_platform":null,
                "pay_symbol":null,
                "pay_price":null,
                "pay_decimals":null,
                "pay_stock_quantity":null,
                "token_id":null,
                "token_amount":null,
                "token_name":null,
                "token_symbol":null,
                "token_decimals":null,
                "tags":[{
                        "id":768,
                        "name":"哈尔滨工业大学",
                        "type":"post"
                    }]
            }
        ]
    }
}
```

### 2. 获取最新文章
* GET /posts/scoreRanking
* 其他同【1. 获取热门文章】