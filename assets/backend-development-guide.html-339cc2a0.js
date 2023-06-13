import{_ as s,r as i,o as r,c as l,b as e,d as n,a,e as t}from"./app-b939c1ec.js";const c={},d=e("h1",{id:"back-end-development-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#back-end-development-guide","aria-hidden":"true"},"#"),n(" Back-end development guide")],-1),u=e("p",null,"This document describes how to start the project locally.",-1),h={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),n(" Prerequisites")],-1),m=e("p",null,"First, make sure that you have the following installed on your machine:",-1),f=e("li",null,"Node.js (version 18 or later)",-1),b={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},g=e("blockquote",null,[e("p",null,"We recommend you have installed nvm in order to set the right node version to run this project"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])],-1),_=e("p",null,"Second, you need to apply for the following services:",-1),k={href:"https://www.infura.io/product/ipfs/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://fleek.co/storage/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.alibabacloud.com/product/object-storage-service/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.sendcloud.net/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.geetest.com/en/Captcha/",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"related-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#related-resources","aria-hidden":"true"},"#"),n(" Related resources")],-1),C={href:"https://www.eggjs.org",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/eggjs/egg/blob/2.x/site/docs/index.zh-CN.md",target:"_blank",rel:"noopener noreferrer"},I=t(`<h2 id="clone-this-repository-and-join-the-folder" tabindex="-1"><a class="header-anchor" href="#clone-this-repository-and-join-the-folder" aria-hidden="true">#</a> Clone this repository and join the folder</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/Matataki-io/matataki-backend.git

<span class="token builtin class-name">cd</span> matataki-backend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="run-with-docker-compose" tabindex="-1"><a class="header-anchor" href="#run-with-docker-compose" aria-hidden="true">#</a> Run with docker-compose</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),T=e("code",null,"no matching manifest for linux/arm64/v8 in the manifest list entries",-1),L={href:"https://hub.docker.com/layers/biarms/mysql/5.7.33-beta-circleci/images/sha256-70508b9c4b53d3598dabf6a11c68ceaf489c8d8e379d01f3b7c9e025d104840d?context=explore",target:"_blank",rel:"noopener noreferrer"},N=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>⠿ Network matataki-backend_default  Created
⠿ Container mysql_local             Started
⠿ Container elasticsearch_local     Started
⠿ Container redis_local             Started
⠿ Container ipfs_local              Started
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="environment-variable-configuration" tabindex="-1"><a class="header-anchor" href="#environment-variable-configuration" aria-hidden="true">#</a> Environment variable configuration</h2><p>To modify the project&#39;s configuration options, you can follow these steps:</p><ol><li><p>Locate the <code>config.default.js</code> file in your project <code>config/</code> directory. This file contains the default configuration options.</p></li><li><p>Create a copy of <code>config.default.js</code> and rename it as <code>config.local.js</code>.</p><ul><li><p>In <code>config.local.js</code>, you can modify the specific configuration options according to your requirements. The application will prioritize the values defined in <code>config.local.js</code> over the default options specified in <code>config.default.js</code>.</p></li><li><p>Locate the configuration options marked with <code>@required</code>. These options are essential for the application to function properly. Make sure to provide the necessary values for these options.</p></li><li><p>Additionally, some configuration options have default values set according to the requirements of Docker Compose. However, it is still recommended to review and adjust these values based on your specific needs.</p></li></ul></li><li><p>If you are using Docker Compose&#39;s pre-configured service, set the corresponding <code>host</code> to the IP address of your local machine (for example, <code>127.0.0.1</code>) in the configuration environment variable.</p><ul><li><code>mysql_local</code></li><li><code>redis_local</code></li><li><code>elasticsearch_local</code></li><li><code>ipfs_local</code></li></ul></li></ol><h2 id="start-project" tabindex="-1"><a class="header-anchor" href="#start-project" aria-hidden="true">#</a> Start project</h2>`,5),D=t(`<li><p>Run <code>yarn</code> in the project directory to install the necessary dependencies.</p></li><li><p>Initialize the database</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run db:init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The following message will be displayed if the database is initialized successfully:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run v1.22.19
$ <span class="token function">node</span> ./scripts/database/init.js
Connect to mysql_local:3306<span class="token punctuation">..</span>.
Connected to mysql_local:3306
Read SQL <span class="token function">file</span> /matataki-backend/database/db-dump.sql<span class="token punctuation">..</span>.
Query SQL <span class="token function">file</span> /matataki-backend/database/db-dump.sql<span class="token punctuation">..</span>.
Query SQL <span class="token function">file</span> /matataki-backend/database/db-dump.sql <span class="token keyword">done</span>
Done <span class="token keyword">in</span> <span class="token number">0</span>.96s.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>If you need to execute the database initialization script, set the <code>mysql</code> <code>host</code> in <code>config.default</code> to the IP address of the local machine (for example, <code>127.0.0.1</code>) when configuring the environment variables. Doing so ensures that the script runs correctly on the local database.</p></blockquote></li><li><p>Start the development server by running <code>yarn dev</code>.</p></li>`,3),R={href:"http://localhost:7001",target:"_blank",rel:"noopener noreferrer"},z=e("h2",{id:"check-the-status-of-the-services",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#check-the-status-of-the-services","aria-hidden":"true"},"#"),n(" Check the status of the services")],-1),E=e("code",null,"7001",-1),F={href:"http://localhost:7001",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"hi, egg, version=1.6.8, undefined",-1),Q={href:"http://localhost:7001/posts/timeRanking",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,'{"code":0,"message":"成功","data":{"count":0,"list":[]}}',-1),M=e("p",null,"Once the backend service is up and running, you are all done with the start.",-1);function V(B,O){const o=i("ExternalLinkIcon");return r(),l("div",null,[d,u,e("p",null,[n("We recommend using "),e("a",h,[n("docker-compose"),a(o)]),n(" to deploy the required services. A docker-compose.yml file has been provided with the configurations for MySQL, Redis, Elasticsearch, and Kubo IPFS. You can directly use this file to start and manage these services.")]),p,m,e("ul",null,[f,e("li",null,[e("a",b,[n("Docker"),a(o)])]),e("li",null,[e("a",v,[n("Docker Compose"),a(o)])])]),g,_,e("ul",null,[e("li",null,[n("IPFS Service, currently support "),e("a",k,[n("Infura"),a(o)]),n(" and "),e("a",y,[n("Fleek"),a(o)]),n(", you must choose one of them.")]),e("li",null,[e("a",w,[n("AlibabaCloud OSS"),a(o)])]),e("li",null,[e("a",x,[n("SendCloud"),a(o)])]),e("li",null,[e("a",j,[n("GeeTest CAPTCHA v3"),a(o)])])]),q,e("ul",null,[e("li",null,[e("a",C,[n("eggjs"),a(o)])]),e("li",null,[e("a",S,[n("eggjs 2.x"),a(o)])])]),I,e("blockquote",null,[e("ol",null,[e("li",null,[n("If you are using the Mac OS (M series) operating system. "),e("ul",null,[e("li",null,[n("You may encounter problems like "),T,n(". To solve this problem, you can consider replacing the image. For example, you could try using a "),e("a",L,[n("biarms/mysql:5.7-beta-circleci "),a(o)]),n(" image.")])])])])]),N,e("ol",null,[D,e("li",null,[e("p",null,[n("Finally, visit "),e("a",R,[n("http://localhost:7001"),a(o)]),n(" to see the website.")])])]),z,e("p",null,[n("Exposes "),E,n(" as the default port for the backend service. You can check the status of the backend service by visiting "),e("a",F,[n("http://localhost:7001"),a(o)]),n(" in your browser, it should return a text message like "),P,n(".")]),e("p",null,[n("Visiting "),e("a",Q,[n("http://localhost:7001/posts/timeRanking"),a(o)]),n(" can check if you are initializing the database successfully, it should return a JSON message like "),A,n(".")]),M])}const G=s(c,[["render",V],["__file","backend-development-guide.html.vue"]]);export{G as default};
