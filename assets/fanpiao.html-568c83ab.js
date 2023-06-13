import{_ as i,o as e,c as n,e as u}from"./app-b939c1ec.js";const l="/documentation/images/2020-06-19-16-04-13.png",t="/documentation/images/2020-06-19-16-05-54.png",d={},a=u(`<h1 id="fan-票系统" tabindex="-1"><a class="header-anchor" href="#fan-票系统" aria-hidden="true">#</a> Fan 票系统</h1><h3 id="fan-票列表" tabindex="-1"><a class="header-anchor" href="#fan-票列表" aria-hidden="true">#</a> fan 票列表</h3><ul><li>GET /token/all</li><li>参数： <ul><li>page 默认值 1</li><li>pagesize 默认值 20</li><li>sort 排序方式，可选值： <ul><li>general：综合排序</li><li>unit-price-(desc|asc)：单价排序</li><li>liquidity-(desc|asc)：流动金排序</li><li>exchange-(desc|asc)：24h 成交量排序</li><li>name-(desc|asc)：首字母排序</li><li>time-(desc|asc)：时间排序</li></ul></li></ul></li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;data&quot;: {
        &quot;count&quot;: 38,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 22,
                &quot;uid&quot;: 526,
                &quot;name&quot;: &quot;岛岛币&quot;,
                &quot;symbol&quot;: &quot;DAO&quot;,
                &quot;decimals&quot;: 4,
                &quot;total_supply&quot;: 260000000,
                &quot;create_time&quot;: &quot;2019-09-30T10:37:15.000Z&quot;,
                &quot;status&quot;: 1,
                &quot;logo&quot;: &quot;/image/2019/09/30/f6bb15a48c91bb872045c471bf45af07.png&quot;,
                &quot;brief&quot;: &quot;xxx&quot;,
                &quot;introduction&quot;: &quot;xxxx&quot;,
                &quot;contract_address&quot;: &quot;0x280Be10b609F95f70E82c0D7151543f59102f47D&quot;,
                &quot;username&quot;: &quot;lychees&quot;,
                &quot;nickname&quot;: &quot;xiaodao&quot;,
                &quot;avatar&quot;: &quot;/avatar/2019/07/12/d0c1f59b794f1dd9437c84af8cc57b6e.png&quot;,
                &quot;amount&quot;: 81577552,
                &quot;liquidity&quot;: 137933397,
                &quot;exchange_amount&quot;: 245069,
                &quot;member&quot;: &quot;0&quot;
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fan-票的信息" tabindex="-1"><a class="header-anchor" href="#fan-票的信息" aria-hidden="true">#</a> Fan 票的信息</h3><ul><li><p>GET /minetoken/{tokenId}</p></li><li><p>参数：</p><ul><li>tokenId</li></ul></li><li><p>返回数据：</p><ul><li><p>token 总发行量：token.total_supply / (10^token.decimals)</p></li><li><p>token 合约地址：token.contract_address</p></li><li><p>token 现价：exchange.price（单位 cny）</p></li><li><p>流动金池：</p><ul><li>CNY 流动金：exchange.cny_reserve /(10^token.decimals)</li><li>token 流动金：exchange.token_reserve / (10^token.decimals)</li></ul></li><li><p>24h 成交量</p><ul><li>token 成交量：exchange.volume_24h / (10^token.decimals)</li><li>cny 成交额：exchange.amount_24h / (10^token.decimals)</li></ul></li><li><p>24h 成交量涨跌幅：exchange.change_24h</p></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;data&quot;: {
        &quot;user&quot;: {
            &quot;id&quot;: 526,
            &quot;username&quot;: &quot;lychees&quot;,
            &quot;platform&quot;: &quot;github&quot;,
            &quot;password_hash&quot;: null,
            &quot;email&quot;: &quot;&quot;,
            &quot;nickname&quot;: &quot;xiaodao&quot;,
            &quot;avatar&quot;: &quot;/avatar/2019/07/12/d0c1f59b794f1dd9437c84af8cc57b6e.png&quot;,
            &quot;create_time&quot;: &quot;2019-07-05T12:59:41.000Z&quot;,
            &quot;introduction&quot;: &quot;一個弱菜。&quot;,
            &quot;accept&quot;: 1,
            &quot;source&quot;: &quot;ss&quot;,
            &quot;reg_ip&quot;: null,
            &quot;last_login_time&quot;: &quot;2020-06-10T23:59:36.000Z&quot;,
            &quot;is_recommend&quot;: 1,
            &quot;referral_uid&quot;: 0,
            &quot;last_login_ip&quot;: &quot;127.0.0.1&quot;,
            &quot;level&quot;: 1,
            &quot;status&quot;: 3,
            &quot;banner&quot;: &quot;/banner/2019/12/06/cb68b9c2f06b5390cdbc8d32db0d1e57.jpeg&quot;
        },
        &quot;token&quot;: {
            &quot;id&quot;: 22,
            &quot;uid&quot;: 526,
            &quot;name&quot;: &quot;岛岛币&quot;,
            &quot;symbol&quot;: &quot;DAO&quot;,
            &quot;decimals&quot;: 4,
            &quot;total_supply&quot;: 260000000,
            &quot;create_time&quot;: &quot;2019-09-30T10:37:15.000Z&quot;,
            &quot;status&quot;: 1,
            &quot;logo&quot;: &quot;/image/2019/09/30/f6bb15a48c91bb872045c471bf45af07.png&quot;,
            &quot;brief&quot;: &quot;和我签订契约，成为魔法少女。&quot;,
            &quot;introduction&quot;: &quot;韵文在整个安琪拉里流淌，穿过每一个波浪，\\n穿过每一个生命，韵文使我们成为一个整体。\\n韵文约束着我们，约束着叙述者和探险者。\\n我的故事将(会)成为你自己的故事,同时你的也会成为我的。\\n你会通过我的眼睛经历我的一生....\\n你也会认识到真理。&quot;,
            &quot;contract_address&quot;: &quot;0x280Be10b609F95f70E82c0D7151543f59102f47D&quot;
        },
        &quot;exchange&quot;: {
            &quot;id&quot;: 36,
            &quot;token_id&quot;: 22,
            &quot;total_supply&quot;: 33262079,
            &quot;create_time&quot;: &quot;2019-11-30T09:25:59.000Z&quot;,
            &quot;exchange_uid&quot;: 1072,
            &quot;token_reserve&quot;: 81577552,
            &quot;cny_reserve&quot;: 137933397,
            &quot;volume_24h&quot;: 144762,
            &quot;change_24h&quot;: 0.001722173464399639,
            &quot;price&quot;: 1.6908,
            &quot;amount_24h&quot;: 245069
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看用户发行的-fan-票" tabindex="-1"><a class="header-anchor" href="#查看用户发行的-fan-票" aria-hidden="true">#</a> 查看用户发行的 fan 票</h3><ul><li>GET token/user/{userId}</li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;data&quot;: {
        &quot;id&quot;: 44,
        &quot;uid&quot;: 23,
        &quot;name&quot;: &quot;稳定币&quot;,
        &quot;symbol&quot;: &quot;DAI&quot;,
        &quot;decimals&quot;: 4,
        &quot;total_supply&quot;: 1000000000,
        &quot;create_time&quot;: &quot;2020-01-03T04:32:56.000Z&quot;,
        &quot;status&quot;: 1,
        &quot;logo&quot;: &quot;/image/2020/01/03/882a27ba3e8a1b93a1ce66b05cdb6173.jpeg&quot;,
        &quot;brief&quot;: &quot;加油！奥力给！&quot;,
        &quot;introduction&quot;: &quot;&quot;,
        &quot;contract_address&quot;: &quot;0x4897835C0657A8d27b3Ab22AA3f09b49Ca4550d0&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fan-票持仓列表" tabindex="-1"><a class="header-anchor" href="#fan-票持仓列表" aria-hidden="true">#</a> Fan 票持仓列表</h3><ul><li>GET /token/{tokenId}/balances</li><li>参数： <ul><li>pagesize 默认值 10</li><li>page 默认值 1</li><li>sort 排序方式 <ul><li>amount-(desc|asc) 持仓量排序</li><li>name-(desc|asc) 姓名排序</li></ul></li></ul></li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;data&quot;: {
        &quot;count&quot;: 197,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 506,
                &quot;uid&quot;: 1072,
                &quot;token_id&quot;: 22,
                &quot;amount&quot;: 81577552,
                &quot;total_supply&quot;: 260000000,
                &quot;username&quot;: &quot;exchange_DAO&quot;,
                &quot;nickname&quot;: null,
                &quot;avatar&quot;: &quot;/avatar/exchange.png&quot;
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流动金持仓列表" tabindex="-1"><a class="header-anchor" href="#流动金持仓列表" aria-hidden="true">#</a> 流动金持仓列表</h3><ul><li>GET /token/{tokenId}/liquidity/balances</li><li>其他同【Fan 票持仓列表】</li></ul><h3 id="fan-票流水列表" tabindex="-1"><a class="header-anchor" href="#fan-票流水列表" aria-hidden="true">#</a> Fan 票流水列表</h3><ul><li>GET /token/{tokenId}/transactions</li><li>参数： <ul><li>pagesize 默认值 10</li><li>page 默认值 1</li></ul></li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;data&quot;: {
        &quot;count&quot;: 838,
        &quot;list&quot;: [
            {
                &quot;token_id&quot;: 22,
                &quot;from_uid&quot;: 1072,
                &quot;to_uid&quot;: 2331,
                &quot;amount&quot;: 134762,
                &quot;create_time&quot;: &quot;2020-06-11T04:39:53.000Z&quot;,
                &quot;type&quot;: &quot;exchange_purchase&quot;,
                &quot;tx_hash&quot;: &quot;0x740ad9ec829513d583882441584374789175a1d4f332a39450e7eac50268c43b&quot;,
                &quot;name&quot;: &quot;岛岛币&quot;,
                &quot;symbol&quot;: &quot;DAO&quot;,
                &quot;decimals&quot;: 4,
                &quot;from_username&quot;: &quot;exchange_DAO&quot;,
                &quot;from_nickname&quot;: null,
                &quot;from_avatar&quot;: &quot;/avatar/exchange.png&quot;,
                &quot;to_username&quot;: &quot;pengan1987&quot;,
                &quot;to_nickname&quot;: &quot;pengan&quot;,
                &quot;to_avatar&quot;: &quot;/avatar/2020/06/06/50916d14ec93e5860129db6d17653a28.jpg&quot;
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流动金流水列表" tabindex="-1"><a class="header-anchor" href="#流动金流水列表" aria-hidden="true">#</a> 流动金流水列表</h3><ul><li>GET /token/{tokenId}/liquidity/transactions</li><li>其他同【Fan 票流水列表】</li></ul><h3 id="fan-票相关创作列表" tabindex="-1"><a class="header-anchor" href="#fan-票相关创作列表" aria-hidden="true">#</a> fan 票相关创作列表</h3><ul><li>GET /minetoken/{tokenId}/related</li><li>参数： <ul><li>page: 1</li><li>pagesize: 10</li><li>filter: <ul><li>1: 持票可见</li><li>2: 付费可见</li><li>3: 持票可见 + 付费可见</li></ul></li><li>sort: <ul><li>time-desc: 时间降序</li><li>popular-desc: 热度降序</li></ul></li></ul></li><li>返回数据：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;data&quot;: {
        &quot;count&quot;: 65,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 4331,
                &quot;uid&quot;: 526,
                &quot;author&quot;: &quot;lychees&quot;,
                &quot;title&quot;: &quot;Defi Billboard Design Doc&quot;,
                &quot;hash&quot;: &quot;QmTHs6vyZqPzE4SP6zpsNK8P7pzQUkibLeYgKiHd5NXmMn&quot;,
                &quot;create_time&quot;: &quot;2020-06-11T04:42:26.000Z&quot;,
                &quot;cover&quot;: &quot;/image/2020/06/11/357064a8ff7856c838e50dd7bbc5664d.png&quot;,
                &quot;require_holdtokens&quot;: 1,
                &quot;require_buy&quot;: 0,
                &quot;short_content&quot;: &quot;。&quot;,
                &quot;nickname&quot;: &quot;xiaodao&quot;,
                &quot;avatar&quot;: &quot;/avatar/2019/07/12/d0c1f59b794f1dd9437c84af8cc57b6e.png&quot;,
                &quot;read&quot;: 4,
                &quot;likes&quot;: 3,
                &quot;pay_platform&quot;: null,
                &quot;pay_symbol&quot;: null,
                &quot;pay_price&quot;: null,
                &quot;pay_decimals&quot;: null,
                &quot;pay_stock_quantity&quot;: null,
                &quot;token_id&quot;: 22,
                &quot;token_amount&quot;: 1000000,
                &quot;token_name&quot;: &quot;岛岛币&quot;,
                &quot;token_symbol&quot;: &quot;DAO&quot;,
                &quot;token_decimals&quot;: 4,
                &quot;tags&quot;: []
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看我当前-token-的持仓" tabindex="-1"><a class="header-anchor" href="#查看我当前-token-的持仓" aria-hidden="true">#</a> 查看我当前 token 的持仓</h3><ul><li>GET /minetoken/balance</li><li>参数： <ul><li>tokenId</li></ul></li><li>Headers <ul><li>x-access-token: 用户登录的 accessToken</li></ul></li><li>返回数据 <ul><li>持仓量 = data / (10^token_decimals)</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;data&quot;: 111434
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fan-票转账" tabindex="-1"><a class="header-anchor" href="#fan-票转账" aria-hidden="true">#</a> Fan 票转账</h3><p><img src="`+l+`" alt="2020-06-19-16-04-13"></p><ul><li>POST /minetoken/transfer</li><li>Headers <ul><li>x-access-token: 用户登录的 accessToken</li></ul></li><li>request body <ul><li>tokenId:fan 票 id</li><li>to: 转给的用户 id</li><li>amount: 转账数量</li><li>memo: 转账留言</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;tokenId&quot;:14,
    &quot;to&quot;:38,
    &quot;amount&quot;:10000,
    &quot;memo&quot;: &quot;奥利给&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回数据 tx_hash 为交易成功的链上 hash</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:{
        &quot;tx_hash&quot;:&quot;0xebd43a6af34dea4004f75134d0a65db3f42a48104165b85e4bda552325cce0ca&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cny-转账" tabindex="-1"><a class="header-anchor" href="#cny-转账" aria-hidden="true">#</a> CNY 转账</h3><p><img src="`+t+`" alt="2020-06-19-16-05-54"></p><ul><li>POST /asset/transfer</li><li>Headers <ul><li>x-access-token: 用户登录的 accessToken</li></ul></li><li>request body</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;symbol&quot;:&quot;CNY&quot;,&quot;to&quot;:38,&quot;amount&quot;:100}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;code&quot;:0,&quot;message&quot;:&quot;成功&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看我所有-fan-票的交易日志记录" tabindex="-1"><a class="header-anchor" href="#查看我所有-fan-票的交易日志记录" aria-hidden="true">#</a> 查看我所有 fan 票的交易日志记录</h3><ul><li>GET /token/allLogs</li><li>参数： <ul><li>pagesize: 默认 10（可选）</li><li>page: 默认 1（可选）</li><li>type（可选）可选值如下 <ul><li>mint: 增发,</li><li>transfer: 转账,</li><li>exchange_purchase: 交易所购买,</li><li>exchange_addliquidity: 添加流动金&#39;,</li><li>exchange_removeliquidity: 删除流动金,</li><li>reward_article: 打赏文章,</li><li>pay_article: 支付文章,</li></ul></li></ul></li><li>Headers <ul><li>x-access-token: 用户登录的 accessToken</li></ul></li><li>返回数据 <ul><li>post_id: 文章 id</li><li>title: 文章名</li><li>cover: 文章封面</li><li>memo: 交易 memo</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;data&quot;: {
        &quot;count&quot;: 125,
        &quot;list&quot;: [
            {
                &quot;token_id&quot;: 14,
                &quot;from_uid&quot;: 1042,
                &quot;to_uid&quot;: 1105,
                &quot;amount&quot;: 10000,
                &quot;create_time&quot;: &quot;2020-07-07T20:13:52.000Z&quot;,
                &quot;type&quot;: &quot;reward_article&quot;,
                &quot;tx_hash&quot;: &quot;0x119676a8937866c9b45d0d1f4600f98eaf8c923bad306aa309d1b90027473d6d&quot;,
                &quot;post_id&quot;: 102024,
                &quot;memo&quot;: &quot;测试冲冲冲&quot;,
                &quot;name&quot;: &quot;小田的空气币&quot;,
                &quot;symbol&quot;: &quot;XTB&quot;,
                &quot;decimals&quot;: 4,
                &quot;from_username&quot;: &quot;sh****eo@163.com&quot;,
                &quot;from_nickname&quot;: &quot;天下第一&quot;,
                &quot;from_avatar&quot;: &quot;/avatar/2019/10/16/9eff045272a135e771b60f5bb3badd89.png&quot;,
                &quot;to_username&quot;: &quot;gu*****o71@hotmail.com&quot;,
                &quot;to_nickname&quot;: &quot;林可MATATAKI&quot;,
                &quot;to_avatar&quot;: &quot;/avatar/2019/11/07/740fd91594538dbe1f016bd301e7e234.jpg&quot;,
                &quot;title&quot;: &quot;123123&quot;,
                &quot;cover&quot;: &quot;/image/2020/06/29/e85a24054d5f4780d3bceca9748956de.jpg&quot;
            },
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看我所有-fan-票的流动金日志记录" tabindex="-1"><a class="header-anchor" href="#查看我所有-fan-票的流动金日志记录" aria-hidden="true">#</a> 查看我所有 fan 票的流动金日志记录</h3><ul><li>GET /token/allLiquidityLogs</li><li>参数： <ul><li>pagesize: 默认 10（可选）</li><li>page: 默认 1（可选）</li><li>type（可选）可选值如下 <ul><li>exchange_addliquidity: 添加流动金&#39;,</li><li>exchange_removeliquidity: 删除流动金,</li></ul></li></ul></li><li>Headers <ul><li>x-access-token: 用户登录的 accessToken</li></ul></li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;list&quot;: [
            {   &quot;id&quot;: 69,
                &quot;uid&quot;: 1042,
                &quot;token_id&quot;: 18,
                &quot;cny_amount&quot;: 100,
                &quot;token_amount&quot;: 3534,
                &quot;liquidity&quot;: 9,
                &quot;create_time&quot;: &quot;2020-06-02T00:52:21.000Z&quot;,
                &quot;name&quot;: &quot;林小可&quot;,
                &quot;symbol&quot;: &quot;LLKT&quot;,
                &quot;decimals&quot;: 4,
                &quot;total_supply&quot;: 10000000,
                &quot;logo&quot;: &quot;/image/2019/10/11/d55345c66f1f620ba2418dd5f3f58964.jpg&quot;,
                &quot;username&quot;: &quot;gu*****o71@gmail.com&quot;,
                &quot;nickname&quot;: &quot;007&quot;
            },
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看-fan-票历史价格" tabindex="-1"><a class="header-anchor" href="#查看-fan-票历史价格" aria-hidden="true">#</a> 查看 fan 票历史价格</h3><ul><li>GET /history/price?tokenId=14</li><li>参数： <ul><li>tokenId</li></ul></li><li>返回数据 <ul><li>obj: 价格的对象形式</li><li>arr: 价格的数组形式</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;data&quot;: {
        &quot;obj&quot;: {
            &quot;2020-07-14&quot;: 0.4031
        },
        &quot;arr&quot;: [
            {
                &quot;time&quot;: &quot;2020-07-14&quot;,
                &quot;price&quot;: 0.4031
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),o=[a];function s(q,v){return e(),n("div",null,o)}const r=i(d,[["render",s],["__file","fanpiao.html.vue"]]);export{r as default};
