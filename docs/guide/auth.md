# 账号系统

开发者可以去[matataki](https://www.matataki.io/article/)平台注册账号

![2020-06-11-14-51-50](/images/2020-06-11-14-51-50.png)

### 1. 获取用户登录 token

- POST /login/account
- 请求参数

```
{
    "username":"xxxx@xxx.com",
    "password":"xxxx"
}
```

- 返回数据，access token 为 response.data

```
{
    "code": 0,
    "message": "成功",
    "data": "xxxxx"
}
```

### 2. 获取用户信息

- GET /user/{userId}
- userId：用户的 id，类型为 int
- 返回数据

```
{
    "code":0,
    "message":"成功",
    "data":{
        "username":"lychees",
        "nickname":"xiaodao",
        "avatar":"/avatar/2019/07/12/d0c1f59b794f1dd9437c84af8cc57b6e.png",
        "introduction":"一個弱菜。",
        "banner":"/banner/2019/12/06/cb68b9c2f06b5390cdbc8d32db0d1e57.jpeg",
        "follows":143,
        "fans":220,
        "is_follow":false,
        "status":3
    }
}
```
