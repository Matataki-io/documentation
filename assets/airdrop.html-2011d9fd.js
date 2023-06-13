import{_ as i,o as e,c as n,e as t}from"./app-b939c1ec.js";const u={},a=t(`<h1 id="dapp-空投" tabindex="-1"><a class="header-anchor" href="#dapp-空投" aria-hidden="true">#</a> DAPP-空投</h1><h3 id="创建空投" tabindex="-1"><a class="header-anchor" href="#创建空投" aria-hidden="true">#</a> 创建空投</h3><ul><li>POST /airdrop</li><li>Headers <ul><li>x-access-token: 用户登录的accessToken</li></ul></li><li>request body <ul><li>tokenId:fan票id</li><li>amount: 空投总量</li><li>quantity: 空投份额</li><li>duration: 持续时间（单位：天）</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	&quot;title&quot;: &quot;matataki世界第一个空投&quot;,
	&quot;tokenId&quot;: 14,
	&quot;amount&quot;: 50000,
	&quot;quantity&quot;: 5,
	&quot;duration&quot;: 5
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;owner&quot;: 1042,
    &quot;hash_tag&quot;: &quot;RDKTCOOV63b5&quot;,
    &quot;title&quot;: &quot;matataki世界第三个空投&quot;,
    &quot;token_id&quot;: 14,
    &quot;amount&quot;: 50000,
    &quot;quantity&quot;: 5,
    &quot;duration&quot;: 5,
    &quot;id&quot;: 14,
    &quot;created_at&quot;: &quot;2020-06-24T13:59:58.162Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取空投列表" tabindex="-1"><a class="header-anchor" href="#获取空投列表" aria-hidden="true">#</a> 获取空投列表</h3><ul><li>GET /airdrop?sort=created_at,DESC&amp;limit=10&amp;page=1</li><li>params: <ul><li>sort: 排序，created_at,DESC 为按照创建时间倒序</li><li>limit: page size</li><li>page: page index</li></ul></li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;data&quot;: [
        {
            &quot;id&quot;: 14,
            &quot;title&quot;: &quot;matataki世界第三个空投&quot;,
            &quot;owner&quot;: 1042,
            &quot;hash_tag&quot;: &quot;RDKTCOOV63b5&quot;,
            &quot;token_id&quot;: 14,
            &quot;quantity&quot;: 5,
            &quot;created_at&quot;: &quot;2020-06-24T13:59:58.162Z&quot;,
            &quot;duration&quot;: 5,
            &quot;amount&quot;: 50000
        },
        {
            &quot;id&quot;: 13,
            &quot;title&quot;: &quot;matataki世界第二个空投&quot;,
            &quot;owner&quot;: 1042,
            &quot;hash_tag&quot;: &quot;FmAjy9MMaMeB&quot;,
            &quot;token_id&quot;: 14,
            &quot;quantity&quot;: 5,
            &quot;created_at&quot;: &quot;2020-06-24T13:54:57.346Z&quot;,
            &quot;duration&quot;: 5,
            &quot;amount&quot;: 50000
        },
        {
            &quot;id&quot;: 12,
            &quot;title&quot;: &quot;matataki世界第一个空投&quot;,
            &quot;owner&quot;: 1042,
            &quot;hash_tag&quot;: &quot;OPJj2Ax20n8k&quot;,
            &quot;token_id&quot;: 14,
            &quot;quantity&quot;: 5,
            &quot;created_at&quot;: &quot;2020-06-24T13:22:41.983Z&quot;,
            &quot;duration&quot;: 5,
            &quot;amount&quot;: 50000
        }
    ],
    &quot;count&quot;: 3,
    &quot;total&quot;: 3,
    &quot;page&quot;: 1,
    &quot;pageCount&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取空投项目" tabindex="-1"><a class="header-anchor" href="#获取空投项目" aria-hidden="true">#</a> 获取空投项目</h3><ul><li>GET /airdrop/:hash</li><li>params <ul><li>hash: 空投的唯一标识hash</li></ul></li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: 12,
    &quot;title&quot;: &quot;matataki世界第一个空投&quot;,
    &quot;owner&quot;: 1042,
    &quot;hash_tag&quot;: &quot;OPJj2Ax20n8k&quot;,
    &quot;token_id&quot;: 14,
    &quot;quantity&quot;: 5,
    &quot;created_at&quot;: &quot;2020-06-24T13:22:41.983Z&quot;,
    &quot;duration&quot;: 5,
    &quot;amount&quot;: 50000
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="领取空投" tabindex="-1"><a class="header-anchor" href="#领取空投" aria-hidden="true">#</a> 领取空投</h3><ul><li>POST /airdrop/:hash</li><li>params <ul><li>hash: 空投的唯一标识hash</li></ul></li><li>Headers <ul><li>x-access-token: 用户登录的accessToken</li></ul></li><li>request body</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;memo&quot;:&quot;领取一下空投&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;uid&quot;: 1329,
    &quot;hash_tag&quot;: &quot;RDKTCOOV63b5&quot;,
    &quot;amount&quot;: 10000,
    &quot;token_id&quot;: 14,
    &quot;tx_hash&quot;: &quot;0xc448f0eeff7d115e3544d3cf377d9ba50a27a562d831ce135b5945dc54371418&quot;,
    &quot;id&quot;: 6,
    &quot;created_at&quot;: &quot;2020-06-24T14:05:11.666Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),d=[a];function l(s,o){return e(),n("div",null,d)}const v=i(u,[["render",l],["__file","airdrop.html.vue"]]);export{v as default};
