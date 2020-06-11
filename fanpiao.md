# Fan票系统

### 1. 获取fan票列表
* GET /token/all
* 参数：
    * page 默认值1
    * pagesize 默认值20
    * sort 排序方式，可选值：
        * general：综合排序
        * unit-price-(desc|asc)：单价排序
        * liquidity-(desc|asc)：流动金排序
        * exchange-(desc|asc)：24h成交量排序
        * name-(desc|asc)：首字母排序
        * time-(desc|asc)：时间排序
* 返回数据
```
{
    "code": 0,
    "message": "成功",
    "data": {
        "count": 38,
        "list": [
            {
                "id": 22,
                "uid": 526,
                "name": "岛岛币",
                "symbol": "DAO",
                "decimals": 4,
                "total_supply": 260000000,
                "create_time": "2019-09-30T10:37:15.000Z",
                "status": 1,
                "logo": "/image/2019/09/30/f6bb15a48c91bb872045c471bf45af07.png",
                "brief": "xxx",
                "introduction": "xxxx",
                "contract_address": "0x280Be10b609F95f70E82c0D7151543f59102f47D",
                "username": "lychees",
                "nickname": "xiaodao",
                "avatar": "/avatar/2019/07/12/d0c1f59b794f1dd9437c84af8cc57b6e.png",
                "amount": 81577552,
                "liquidity": 137933397,
                "exchange_amount": 245069,
                "member": "0"
            }
        ]
    }
}
```

### 2. 获取Fan票的信息
* GET /minetoken/{tokenId}
* 参数：
    * tokenId
* 返回数据：
    - token总发行量：token.total_supply / (10^token.decimals)
    - token合约地址：token.contract_address

    - token现价：exchange.price（单位cny）
    - 流动金池：
        - CNY流动金：exchange.cny_reserve /(10^token.decimals)
        - token流动金：exchange.token_reserve / (10^token.decimals)
    - 24h成交量
        - token成交量：exchange.volume_24h / (10^token.decimals)
        - cny成交额：exchange.amount_24h / (10^token.decimals)
    - 24h成交量涨跌幅：exchange.change_24h
```
{
    "code": 0,
    "message": "成功",
    "data": {
        "user": {
            "id": 526,
            "username": "lychees",
            "platform": "github",
            "password_hash": null,
            "email": "",
            "nickname": "xiaodao",
            "avatar": "/avatar/2019/07/12/d0c1f59b794f1dd9437c84af8cc57b6e.png",
            "create_time": "2019-07-05T12:59:41.000Z",
            "introduction": "一個弱菜。",
            "accept": 1,
            "source": "ss",
            "reg_ip": null,
            "last_login_time": "2020-06-10T23:59:36.000Z",
            "is_recommend": 1,
            "referral_uid": 0,
            "last_login_ip": "127.0.0.1",
            "level": 1,
            "status": 3,
            "banner": "/banner/2019/12/06/cb68b9c2f06b5390cdbc8d32db0d1e57.jpeg"
        },
        "token": {
            "id": 22,
            "uid": 526,
            "name": "岛岛币",
            "symbol": "DAO",
            "decimals": 4,
            "total_supply": 260000000,
            "create_time": "2019-09-30T10:37:15.000Z",
            "status": 1,
            "logo": "/image/2019/09/30/f6bb15a48c91bb872045c471bf45af07.png",
            "brief": "和我签订契约，成为魔法少女。",
            "introduction": "韵文在整个安琪拉里流淌，穿过每一个波浪，\n穿过每一个生命，韵文使我们成为一个整体。\n韵文约束着我们，约束着叙述者和探险者。\n我的故事将(会)成为你自己的故事,同时你的也会成为我的。\n你会通过我的眼睛经历我的一生....\n你也会认识到真理。",
            "contract_address": "0x280Be10b609F95f70E82c0D7151543f59102f47D"
        },
        "exchange": {
            "id": 36,
            "token_id": 22,
            "total_supply": 33262079,
            "create_time": "2019-11-30T09:25:59.000Z",
            "exchange_uid": 1072,
            "token_reserve": 81577552,
            "cny_reserve": 137933397,
            "volume_24h": 144762,
            "change_24h": 0.001722173464399639,
            "price": 1.6908,
            "amount_24h": 245069
        }
    }
}
```

### Fan票持仓列表
* GET /token/{tokenId}/balances
* 参数：
    * pagesize 默认值 10
    * page 默认值 1
    * sort 排序方式
        * amount-(desc|asc) 持仓量排序
        * name-(desc|asc) 姓名排序
* 返回数据
```
{
    "code": 0,
    "message": "成功",
    "data": {
        "count": 197,
        "list": [
            {
                "id": 506,
                "uid": 1072,
                "token_id": 22,
                "amount": 81577552,
                "total_supply": 260000000,
                "username": "exchange_DAO",
                "nickname": null,
                "avatar": "/avatar/exchange.png"
            }
        ]
    }
}
```

### Fan票流水列表
* GET /token/{tokenId}/transaction
* 参数：
    * pagesize 默认值 10
    * page 默认值 1
* 返回数据
