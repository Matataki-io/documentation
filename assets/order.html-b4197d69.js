import{_ as e,o as i,c as u,e as n}from"./app-b939c1ec.js";const t={},l=n(`<h1 id="订单系统" tabindex="-1"><a class="header-anchor" href="#订单系统" aria-hidden="true">#</a> 订单系统</h1><h3 id="创建订单" tabindex="-1"><a class="header-anchor" href="#创建订单" aria-hidden="true">#</a> 创建订单</h3><ul><li>PUT /orders</li><li>Request Body <ul><li>useBalance: 是否使用余额支付，0 or 1</li><li>items： Array <ul><li>type： 创建订单的类型 <ul><li>buy_token_input：以输入为准交易</li><li>buy_token_output：以输出为准交易</li><li>add: 添加流动金</li></ul></li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;useBalance&quot;:0,
    &quot;items&quot;:[
        {
            &quot;tokenId&quot;:14,
            &quot;type&quot;:&quot;buy_token_input&quot;,
            &quot;cny_amount&quot;:100,
            &quot;amount&quot;:237
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回数据：res.data为创建成功的订单号</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:&quot;rDg9zGhjZh9NKawcN1t0vKrzmfaEHsg&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根据订单号获取订单数据" tabindex="-1"><a class="header-anchor" href="#根据订单号获取订单数据" aria-hidden="true">#</a> 根据订单号获取订单数据</h3><ul><li>GET /orders/{orderId}</li><li>Headers <ul><li>x-access-token: 用户登录的accessToken</li></ul></li><li>返回数据：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:{
        &quot;trade_no&quot;:&quot;rDg9zGhjZh9NKawcN1t0vKrzmfaEHsg&quot;,
        &quot;total&quot;:100,
        &quot;amount&quot;:100,
        &quot;create_time&quot;:&quot;2020-06-12T02:57:32.000Z&quot;,
        &quot;status&quot;:0,
        &quot;use_balance&quot;:0,
        &quot;items&quot;:{
            &quot;orderPriceItem&quot;:null,
            &quot;orderTokenItem&quot;:{
                &quot;token_id&quot;:14,
                &quot;pay_cny_amount&quot;:0,
                &quot;cny_amount&quot;:100,
                &quot;token_amount&quot;:237,
                &quot;status&quot;:0,
                &quot;type&quot;:&quot;buy_token_input&quot;,
                &quot;name&quot;:&quot;小田的空气币&quot;,
                &quot;symbol&quot;:&quot;XTB&quot;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果订单不是你创建的，会返回未授权</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 401,
    &quot;message&quot;: &quot;未授权&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改订单是否使用余额支付" tabindex="-1"><a class="header-anchor" href="#修改订单是否使用余额支付" aria-hidden="true">#</a> 修改订单是否使用余额支付</h3><ul><li>PUT /orders/{orderId}</li><li>Request Body</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;useBalance&quot;:1}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Headers <ul><li>x-access-token: 用户登录的accessToken</li></ul></li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;code&quot;:0,&quot;message&quot;:&quot;成功&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="订单微信支付" tabindex="-1"><a class="header-anchor" href="#订单微信支付" aria-hidden="true">#</a> 订单微信支付</h3><ul><li>POST /order/wxpay</li><li>request Body <ul><li>tradeNo: 订单号</li><li>trade_type： 交易类型，填 NATIVE</li><li>title： 填 购买Fan票</li></ul></li><li>Headers <ul><li>x-access-token: 用户登录的accessToken</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;tradeNo&quot;:&quot;rDg9zGhjZh9NKawcN1t0vKrzmfaEHsg&quot;,
    &quot;trade_type&quot;:&quot;NATIVE&quot;,
    &quot;title&quot;:&quot;购买Fan票&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回数据 <ul><li>res.code_url：支付二维码地址</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;timeStamp&quot;:&quot;1591930899&quot;,
    &quot;return_code&quot;:&quot;SUCCESS&quot;,
    &quot;return_msg&quot;:&quot;OK&quot;,
    &quot;appid&quot;:&quot;wx95829b6a2307300b&quot;,
    &quot;mch_id&quot;:&quot;1555776841&quot;,
    &quot;nonce_str&quot;:&quot;wClySkSmwh0pCNcn&quot;,
    &quot;sign&quot;:&quot;A7E7E0DF18EC77764DE555635B67478F&quot;,
    &quot;result_code&quot;:&quot;SUCCESS&quot;,
    &quot;prepay_id&quot;:&quot;wx1211014209249817eb9da9151691218600&quot;,
    &quot;trade_type&quot;:&quot;NATIVE&quot;,
    &quot;code_url&quot;:&quot;weixin://wxpay/bizpayurl?pr=zBMNEUw&quot;,
    &quot;trade_no&quot;:&quot;rDg9zGhjZh9NKawcN1t0vKrzmfaEHsg&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),d=[l];function a(s,o){return i(),u("div",null,d)}const v=e(t,[["render",a],["__file","order.html.vue"]]);export{v as default};
