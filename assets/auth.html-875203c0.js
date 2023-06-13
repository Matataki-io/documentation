import{_ as i,r as a,o as s,c as d,b as n,d as e,a as o,e as u}from"./app-b939c1ec.js";const l="/documentation/images/2020-06-11-14-51-50.png",r={},c=n("h1",{id:"账号系统",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#账号系统","aria-hidden":"true"},"#"),e(" 账号系统")],-1),v={href:"https://www.matataki.io/article/",target:"_blank",rel:"noopener noreferrer"},q=u('<p><img src="'+l+`" alt="2020-06-11-14-51-50"></p><h3 id="_1-获取用户登录-token" tabindex="-1"><a class="header-anchor" href="#_1-获取用户登录-token" aria-hidden="true">#</a> 1. 获取用户登录 token</h3><ul><li>POST /login/account</li><li>请求参数</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;username&quot;:&quot;xxxx@xxx.com&quot;,
    &quot;password&quot;:&quot;xxxx&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回数据，access token 为 response.data</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;data&quot;: &quot;xxxxx&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-获取用户信息" tabindex="-1"><a class="header-anchor" href="#_2-获取用户信息" aria-hidden="true">#</a> 2. 获取用户信息</h3><ul><li>GET /user/{userId}</li><li>userId：用户的 id，类型为 int</li><li>返回数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;:0,
    &quot;message&quot;:&quot;成功&quot;,
    &quot;data&quot;:{
        &quot;username&quot;:&quot;lychees&quot;,
        &quot;nickname&quot;:&quot;xiaodao&quot;,
        &quot;avatar&quot;:&quot;/avatar/2019/07/12/d0c1f59b794f1dd9437c84af8cc57b6e.png&quot;,
        &quot;introduction&quot;:&quot;一個弱菜。&quot;,
        &quot;banner&quot;:&quot;/banner/2019/12/06/cb68b9c2f06b5390cdbc8d32db0d1e57.jpeg&quot;,
        &quot;follows&quot;:143,
        &quot;fans&quot;:220,
        &quot;is_follow&quot;:false,
        &quot;status&quot;:3
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function m(b,x){const t=a("ExternalLinkIcon");return s(),d("div",null,[c,n("p",null,[e("开发者可以去"),n("a",v,[e("matataki"),o(t)]),e("平台注册账号")]),q])}const _=i(r,[["render",m],["__file","auth.html.vue"]]);export{_ as default};
