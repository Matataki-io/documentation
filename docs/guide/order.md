# 订单系统

### 创建订单
* PUT /orders
* Request Body
    * useBalance: 是否使用余额支付，0 or 1
    * items： Array
        * type： 创建订单的类型
            * buy_token_input：以输入为准交易
            * buy_token_output：以输出为准交易
            * add: 添加流动金

```
{
    "useBalance":0,
    "items":[
        {
            "tokenId":14,
            "type":"buy_token_input",
            "cny_amount":100,
            "amount":237
        }
    ]
}
```
* 返回数据：res.data为创建成功的订单号
```
{
    "code":0,
    "message":"成功",
    "data":"rDg9zGhjZh9NKawcN1t0vKrzmfaEHsg"
}
```

### 根据订单号获取订单数据
* GET /orders/{orderId}
* Headers
    * x-access-token: 用户登录的accessToken
* 返回数据：
```
{
    "code":0,
    "message":"成功",
    "data":{
        "trade_no":"rDg9zGhjZh9NKawcN1t0vKrzmfaEHsg",
        "total":100,
        "amount":100,
        "create_time":"2020-06-12T02:57:32.000Z",
        "status":0,
        "use_balance":0,
        "items":{
            "orderPriceItem":null,
            "orderTokenItem":{
                "token_id":14,
                "pay_cny_amount":0,
                "cny_amount":100,
                "token_amount":237,
                "status":0,
                "type":"buy_token_input",
                "name":"小田的空气币",
                "symbol":"XTB"
            }
        }
    }
}
```
如果订单不是你创建的，会返回未授权
```
{
    "code": 401,
    "message": "未授权"
}
```

### 修改订单是否使用余额支付
* PUT /orders/{orderId}
* Request Body
```
{"useBalance":1}
```
* Headers
    * x-access-token: 用户登录的accessToken
* 返回数据
```
{"code":0,"message":"成功"}
```


### 订单微信支付
* POST /order/wxpay
* request Body
    * tradeNo: 订单号
    * trade_type： 交易类型，填 NATIVE
    * title： 填 购买Fan票
* Headers
    * x-access-token: 用户登录的accessToken
```
{
    "tradeNo":"rDg9zGhjZh9NKawcN1t0vKrzmfaEHsg",
    "trade_type":"NATIVE",
    "title":"购买Fan票"
}
```
* 返回数据
    * res.code_url：支付二维码地址
```
{
    "timeStamp":"1591930899",
    "return_code":"SUCCESS",
    "return_msg":"OK",
    "appid":"wx95829b6a2307300b",
    "mch_id":"1555776841",
    "nonce_str":"wClySkSmwh0pCNcn",
    "sign":"A7E7E0DF18EC77764DE555635B67478F",
    "result_code":"SUCCESS",
    "prepay_id":"wx1211014209249817eb9da9151691218600",
    "trade_type":"NATIVE",
    "code_url":"weixin://wxpay/bizpayurl?pr=zBMNEUw",
    "trade_no":"rDg9zGhjZh9NKawcN1t0vKrzmfaEHsg"
}
```