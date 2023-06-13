import{_ as o,r as t,o as i,c as r,b as e,d as n,a as s,e as l}from"./app-b939c1ec.js";const c={},d=e("h1",{id:"back-end-deployment-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#back-end-deployment-guide","aria-hidden":"true"},"#"),n(" Back-end deployment guide")],-1),h=e("p",null,"This document describes how to deploy this project.",-1),u={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),n(" Prerequisites")],-1),f=e("p",null,"First, make sure that you have the following installed on your machine:",-1),b={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"Second, you need to apply for the following services:",-1),g={href:"https://www.infura.io/product/ipfs/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://fleek.co/storage/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.alibabacloud.com/product/object-storage-service/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.sendcloud.net/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.geetest.com/en/Captcha/",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"related-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#related-resources","aria-hidden":"true"},"#"),n(" Related resources")],-1),j={href:"https://github.com/eggjs/egg/blob/2.x/site/docs/index.zh-CN.md",target:"_blank",rel:"noopener noreferrer"},C=l(`<h2 id="clone-this-repository-and-join-the-folder" tabindex="-1"><a class="header-anchor" href="#clone-this-repository-and-join-the-folder" aria-hidden="true">#</a> Clone this repository and join the folder</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/Matataki-io/matataki-backend.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> matataki-backend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="environment-variable-configuration" tabindex="-1"><a class="header-anchor" href="#environment-variable-configuration" aria-hidden="true">#</a> Environment variable configuration</h2><p>To modify the project&#39;s configuration options, you can follow these steps:</p><ol><li><p>Locate the <code>config.default.js</code> file in your project <code>config/</code> directory. This file contains the default configuration options.</p></li><li><p>Create a copy of <code>config.default.js</code> and rename it as <code>config.prod.js</code>.</p></li></ol><p>In <code>config.prod.js</code>, you can modify the specific configuration options according to your requirements. The application will prioritize the values defined in <code>config.prod.js</code> over the default options specified in <code>config.default.js</code>.</p><p>Locate the configuration options marked with <code>@required</code>. These options are essential for the application to function properly. Make sure to provide the necessary values for these options.</p><p>Additionally, some configuration options have default values set according to the requirements of Docker Compose. However, it is still recommended to review and adjust these values based on your specific needs.</p><h2 id="run-with-docker-compose" tabindex="-1"><a class="header-anchor" href="#run-with-docker-compose" aria-hidden="true">#</a> Run with docker-compose</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> deploy up <span class="token parameter variable">-d</span> <span class="token parameter variable">--build</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="initialize-the-database" tabindex="-1"><a class="header-anchor" href="#initialize-the-database" aria-hidden="true">#</a> Initialize the database</h2><ol><li><p>Attach to the ss_backend_local container</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> ss_backend_local <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Initialize the database</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run db:init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>The following message will be displayed if the database is initialized successfully:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run v1.22.19
$ <span class="token function">node</span> ./scripts/database/init.js
Connect to mysql_local:3306<span class="token punctuation">..</span>.
Connected to mysql_local:3306
Read SQL <span class="token function">file</span> /usr/src/app/database/db-dump.sql<span class="token punctuation">..</span>.
Query SQL <span class="token function">file</span> /usr/src/app/database/db-dump.sql<span class="token punctuation">..</span>.
Query SQL <span class="token function">file</span> /usr/src/app/database/db-dump.sql <span class="token keyword">done</span>
Done <span class="token keyword">in</span> <span class="token number">0</span>.96s.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="check-the-status-of-the-services" tabindex="-1"><a class="header-anchor" href="#check-the-status-of-the-services" aria-hidden="true">#</a> Check the status of the services</h2>`,16),S=e("code",null,"7001",-1),q={href:"http://localhost:7001",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"hi, egg, version=1.6.8, undefined",-1),z={href:"http://localhost:7001/posts/timeRanking",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,'{"code":0,"message":"成功","data":{"count":0,"list":[]}}',-1),L=e("p",null,"Once the backend service is up and running, you are all done with the deployment.",-1);function A(D,N){const a=t("ExternalLinkIcon");return i(),r("div",null,[d,h,e("p",null,[n("We recommend using "),e("a",u,[n("docker-compose"),s(a)]),n(" to deploy the required services. A docker-compose.yml file has been provided with the configurations for MySQL, Redis, Elasticsearch, and Kubo IPFS. You can directly use this file to start and manage these services.")]),p,f,e("ul",null,[e("li",null,[e("a",b,[n("Docker"),s(a)])]),e("li",null,[e("a",m,[n("Docker Compose"),s(a)])])]),v,e("ul",null,[e("li",null,[n("IPFS Service, currently support "),e("a",g,[n("Infura"),s(a)]),n(" and "),e("a",k,[n("Fleek"),s(a)]),n(", you must choose one of them.")]),e("li",null,[e("a",_,[n("AlibabaCloud OSS"),s(a)])]),e("li",null,[e("a",y,[n("SendCloud"),s(a)])]),e("li",null,[e("a",w,[n("GeeTest CAPTCHA v3"),s(a)])])]),x,e("ul",null,[e("li",null,[e("a",j,[n("eggjs 2.x"),s(a)])])]),C,e("p",null,[n("Docker Compose exposes "),S,n(" as the default port for the backend service. You can check the status of the backend service by visiting "),e("a",q,[n("http://localhost:7001"),s(a)]),n(" in your browser, it should return a text message like "),T,n(".")]),e("p",null,[n("Visiting "),e("a",z,[n("http://localhost:7001/posts/timeRanking"),s(a)]),n(" can check if you are initializing the database successfully, it should return a JSON message like "),I,n(".")]),L])}const R=o(c,[["render",A],["__file","backend-deployment-guide.html.vue"]]);export{R as default};
