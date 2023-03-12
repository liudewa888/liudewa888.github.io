import{_ as n,b as e,g as t,l as o}from"./index-f290dfce.js";const a={},s={"ng-bind-html":"trustedHtml",class:"ng-binding"},c=o(`<h1>高级搜索</h1><h2>Google</h2><h3>搜索语法</h3><pre><code class="javascript language-javascript">
    &quot;vue&quot; // &quot;&quot; 双引号 精确搜索

    大河*东流 // * 模糊搜索

    好?哥 // ? 配置单个字符

    ~good // ~ 近义词

    -key // - 排除

    -url // -baidu.com 排除baidu.com

    key1 key2 key3 // 多个关键词

    OR/AND
    python OR java
    python AND java

    intitle:key // 页面标题含有key

    inurl:key // url中含有key

    intext:key // 正文中含有key

    inanchor: // 锚文本含有key

    site
    key site:juejin.cn // 只要juejin.cn结果

    filetype
    key filetype:pdf // 类型pdf
    // 支持type: pdf、doc、docx（Word）、ppt、pptx（PPT）、xls、xlsx（Excel）、txt、text、tex（Tex/LaTex）

    define key // 搜索key 定义
    
    weather city // 城市天气
        </code></pre><h2>stackoverflow</h2><p><a href="https://stackoverflow.com/help/searching">官方搜索文档</a></p><h3>搜索语法</h3><pre><code class="javascript language-javascript">
    [tag] // tag 搜索

    answers:0 // 答案数量

    user:1234 // by author

    score:3 // 3+ score

    &quot;words here&quot; // 双引号精确搜索

    is:question // type

    collective:&quot;Name&quot; // collective content

    isaccepted:yes // status
        </code></pre><h2>GitHub</h2><p><a href="https://docs.github.com/cn/search-github/searching-on-github/searching-for-repositories">官方搜索文档</a></p><h3>搜索语法</h3><pre><code class="javascript language-javascript">
    &quot;vue demo&quot; in:name topic:vue3 stars:&gt;500 language:java pushed:&gt;2019-12-01
    
    vue in:name // 名称含有vue的仓库

    vue in:description,name // 描述和名称中含有vue

    vue in:readme // readme文档含有vue
    

    repo:biao/blog // 匹配特定仓库名称,用户名为biao的blog仓库

    topic:vue3 // name含有vue 下方主题(tag/topic)含有vue3

    language:xxx // 编程语言是xxx

    label:&quot;bug fix&quot; // 具有标签&quot;bug fix&quot;,含有&quot;build&quot;字样
    
    stars:&gt; ：筛选stars数量大于某个值的仓库

    stars:start..end ：筛选stars数量在start和end区间的仓库
    

    fork:start..end // 复刻

    pushed:&gt;YYYY-MM-DD // 最后更新时间大于YYYY-MM-DD

    created:&gt;2016-04-29 // 创建的时间
    
    size:50..120 // 50kb - 120kb的仓库
    
    node followers:&gt;=1000 // 1000个关注作者的仓库
    
    topics:&gt;3 // 主题
    
    // 排除特定结果(只适用字符串)
    hello NOT world // 含hello不含world
    cats NOT &quot;hello world&quot;

    // - 前缀
    mentions:biao -org:github // 匹配提及@biao, 且不在github组织仓库的议题
        </code></pre>`,12),r=[c];function i(u,l){return e(),t("div",s,r)}const d=n(a,[["render",i]]);export{d as default};
