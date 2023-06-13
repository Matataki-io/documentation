import{_ as e,o as i,c as n,e as u}from"./app-b939c1ec.js";const l="/documentation/images/2020-06-12-11-25-51.png",t="/documentation/images/2020-06-12-11-29-21.png",d={},a=u(`<h1 id="交易所系统" tabindex="-1"><a class="header-anchor" href="#交易所系统" aria-hidden="true">#</a> 交易所系统</h1><h2 id="交易" tabindex="-1"><a class="header-anchor" href="#交易" aria-hidden="true">#</a> 交易</h2><h3 id="我的交易流水" tabindex="-1"><a class="header-anchor" href="#我的交易流水" aria-hidden="true">#</a> 我的交易流水</h3><ul><li>GET /token/myPurchaseLogs</li><li>参数： <ul><li>tokenId</li></ul></li><li>Headers <ul><li>x-access-token: 用户登录的 accessToken</li></ul></li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:[
        {
            &quot;id&quot;:1021,
            &quot;uid&quot;:23,
            &quot;sold_token_id&quot;:0,
            &quot;sold_amount&quot;:100,
            &quot;bought_token_id&quot;:22,
            &quot;bought_amount&quot;:56,
            &quot;recipient&quot;:23,
            &quot;create_time&quot;:&quot;2020-06-02T09:01:51.000Z&quot;,
            &quot;ip&quot;:&quot;&quot;,
            &quot;cny_reserve_before&quot;:140675037,
            &quot;token_reserve_before&quot;:79958407,
            &quot;tx_hash&quot;:&quot;0x7caa48ce126425f762c75fcf8dc4e2793dd0eb98576750cdae15106b7a9ef7ba&quot;,
            &quot;direction&quot;:&quot;buy&quot;,
            &quot;cny_amount&quot;:100,
            &quot;token_amount&quot;:56
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全部交易流水" tabindex="-1"><a class="header-anchor" href="#全部交易流水" aria-hidden="true">#</a> 全部交易流水</h3><ul><li>GET /token/purchaseLogs</li><li>参数： <ul><li>tokenId</li></ul></li><li>返回数据：只返回最近的 100 条</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:[
        {
            &quot;id&quot;:1021,
            &quot;uid&quot;:23,
            &quot;sold_token_id&quot;:0,
            &quot;sold_amount&quot;:100,
            &quot;bought_token_id&quot;:22,
            &quot;bought_amount&quot;:56,
            &quot;recipient&quot;:23,
            &quot;create_time&quot;:&quot;2020-06-02T09:01:51.000Z&quot;,
            &quot;ip&quot;:&quot;&quot;,
            &quot;cny_reserve_before&quot;:140675037,
            &quot;token_reserve_before&quot;:79958407,
            &quot;tx_hash&quot;:&quot;0x7caa48ce126425f762c75fcf8dc4e2793dd0eb98576750cdae15106b7a9ef7ba&quot;,
            &quot;direction&quot;:&quot;buy&quot;,
            &quot;cny_amount&quot;:100,
            &quot;token_amount&quot;:56
        }
        ...
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流动金" tabindex="-1"><a class="header-anchor" href="#流动金" aria-hidden="true">#</a> 流动金</h2><h3 id="全部流水金流水" tabindex="-1"><a class="header-anchor" href="#全部流水金流水" aria-hidden="true">#</a> 全部流水金流水</h3><ul><li>GET /token/liquidityLogs</li><li>参数： <ul><li>tokenId</li></ul></li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:{
        &quot;count&quot;: 10,
        &quot;list&quot;: [{
            &quot;id&quot;:58,
            &quot;uid&quot;:1230,
            &quot;token_id&quot;:14,
            &quot;cny_amount&quot;:1700,
            &quot;token_amount&quot;:9684,
            &quot;liquidity&quot;:40,
            &quot;create_time&quot;:&quot;2020-02-28T08:33:34.000Z&quot;,
            &quot;name&quot;:&quot;小田的空气币&quot;,
            &quot;symbol&quot;:&quot;XTB&quot;,
            &quot;decimals&quot;:4,
            &quot;total_supply&quot;:1000000000000,
            &quot;logo&quot;:&quot;/image/2019/10/25/f905fe7c16d40c21668aef5d7b3c4dc0.png&quot;,
            &quot;username&quot;:&quot;0x28ac4bd00a49891a8c1a205699153c9532247d58&quot;,
            &quot;nickname&quot;:&quot;hi&quot;,
            &quot;tx_hash&quot;:&quot;0xcb6aabdc20aa59ee8e203a36c4c808fb672fa3a3b70d3ed6153d4dd888e7aa64&quot;
        },
        ...
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="我的流动金流水" tabindex="-1"><a class="header-anchor" href="#我的流动金流水" aria-hidden="true">#</a> 我的流动金流水</h3><ul><li>GET /token/myLiquidityLogs</li><li>参数： <ul><li>tokenId</li></ul></li><li>Headers <ul><li>x-access-token: 用户登录的 accessToken</li></ul></li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:{
        &quot;count&quot;: 10,
        &quot;list&quot;: [{
            &quot;id&quot;:58,
            &quot;uid&quot;:1230,
            &quot;token_id&quot;:14,
            &quot;cny_amount&quot;:1700,
            &quot;token_amount&quot;:9684,
            &quot;liquidity&quot;:40,
            &quot;create_time&quot;:&quot;2020-02-28T08:33:34.000Z&quot;,
            &quot;name&quot;:&quot;小田的空气币&quot;,
            &quot;symbol&quot;:&quot;XTB&quot;,
            &quot;decimals&quot;:4,
            &quot;total_supply&quot;:1000000000000,
            &quot;logo&quot;:&quot;/image/2019/10/25/f905fe7c16d40c21668aef5d7b3c4dc0.png&quot;,
            &quot;username&quot;:&quot;0x28ac4bd00a49891a8c1a205699153c9532247d58&quot;,
            &quot;nickname&quot;:&quot;hi&quot;,
            &quot;tx_hash&quot;:&quot;0xcb6aabdc20aa59ee8e203a36c4c808fb672fa3a3b70d3ed6153d4dd888e7aa64&quot;
        },
        ...
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="以输入为准计算输出" tabindex="-1"><a class="header-anchor" href="#以输入为准计算输出" aria-hidden="true">#</a> 以输入为准计算输出</h3><ul><li>GET /exchange/outputAmount</li><li>参数 <ul><li>inputTokenId （⚠️CNY 的话为 0）</li><li>outputTokenId ️️️（⚠️ 不能和 inputTokenId 相同）</li><li>inputAmount （⚠️= inputValue * (10^token_decimals)）</li></ul></li><li>返回数据： <ul><li>⚠️outputAmount = res.data / (10^token_decimals)</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:23530
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="以输出为准计算输入" tabindex="-1"><a class="header-anchor" href="#以输出为准计算输入" aria-hidden="true">#</a> 以输出为准计算输入</h3><ul><li>GET /exchange/inputAmount</li><li>参数</li><li>参数 <ul><li>inputTokenId （⚠️CNY 的话为 0）</li><li>outputTokenId ️️️（⚠️ 不能和 inputTokenId 相同）</li><li>outputAmount （⚠️= outputValue * (10^token_decimals)）</li></ul></li><li>返回数据： <ul><li>⚠️inputAmount = res.data / (10^token_decimals)</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:24175
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看用户-cny-余额" tabindex="-1"><a class="header-anchor" href="#查看用户-cny-余额" aria-hidden="true">#</a> 查看用户 CNY 余额</h3><ul><li><p>GET /asset/balance</p></li><li><p>参数：</p><ul><li>symbol：CNY</li></ul></li><li><p>Headers</p><ul><li>x-access-token: 用户登录的 accessToken</li></ul></li><li><p>返回数据为用户余额 （⚠️balance = res / (10^4)）</p></li></ul><h3 id="添加流动金-根据输入-cny-计算输出-token" tabindex="-1"><a class="header-anchor" href="#添加流动金-根据输入-cny-计算输出-token" aria-hidden="true">#</a> 添加流动金：根据输入 CNY 计算输出 token</h3><ul><li>GET /exchange/poolCnyToTokenPrice</li><li>参数 <ul><li>outputTokenId： 输出 token 的 id</li><li>inputAmount： 输入 cny 的数量（⚠️inputAmount = inputValue * (10^4)）</li></ul></li><li>返回数据 <ul><li>⚠️outputAmount = res.data / (10^token_decimals)</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:23849.594875117542
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加流动金-计算用户挖到的-token-流动金凭证" tabindex="-1"><a class="header-anchor" href="#添加流动金-计算用户挖到的-token-流动金凭证" aria-hidden="true">#</a> 添加流动金：计算用户挖到的 token 流动金凭证</h3><p><img src="`+l+`" alt="2020-06-12-11-25-51"></p><ul><li>GET /exchange/userMintToken</li><li>参数： <ul><li>tokenId</li><li>amount：输入 cny 的数量（⚠️inputAmount = inputValue * (10^4)）</li></ul></li><li>返回数据 <ul><li>⚠️token 流动金凭证 = res.data / (10^token_decimals)</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:1535
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除流动金-根据-token-凭证数量计算输出" tabindex="-1"><a class="header-anchor" href="#删除流动金-根据-token-凭证数量计算输出" aria-hidden="true">#</a> 删除流动金：根据 token 凭证数量计算输出</h3><p><img src="`+t+`" alt="2020-06-12-11-29-21"></p><ul><li>GET /exchange/outputPoolSize</li><li>参数： <ul><li>tokenId</li><li>amount：输入 cny 的数量（⚠️inputAmount = inputValue * (10^4)）</li></ul></li><li>返回数据： <ul><li>cny_amount：token 凭证对应的 cny 数量（⚠️ 显示 = cny_amount * (10^4)）</li><li>token_amount：token 凭证对应的 token 数量（⚠️ 页面显示 = token_amount * (10^token_decimals)）</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:{
        &quot;cny_amount&quot;:6511.876712328767,
        &quot;token_amount&quot;:15529.910958904109
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除流动金" tabindex="-1"><a class="header-anchor" href="#删除流动金" aria-hidden="true">#</a> 删除流动金</h3><ul><li>POST /exchange/removeLiquidity</li><li>request body</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;tokenId&quot;:14,
    &quot;amount&quot;:200,
    &quot;min_cny&quot;:12763.278356164383,
    &quot;min_tokens&quot;:30438.625479452054
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;code&quot;:0,&quot;message&quot;:&quot;成功&quot;,&quot;data&quot;:0}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,39),o=[a];function s(c,r){return i(),n("div",null,o)}const q=e(d,[["render",s],["__file","exchange.html.vue"]]);export{q as default};
