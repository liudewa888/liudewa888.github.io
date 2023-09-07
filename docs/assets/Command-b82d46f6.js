import{ah as e,e as n,f as t,aj as c}from"./index-49fcc26f.js";const r={},i={"ng-bind-html":"trustedHtml",class:"ng-binding"},o=c(`<h1>常用快捷方式 和 命令行</h1><h2>VSCode</h2><h3>快捷方式win系统</h3><pre><code>ctrl + 鼠标左键  // 多光标

ctrl + P // 查找文件

ctrl + T 或 前辍输入&#39;#&#39;标识(例:&#39;#reactive&#39;) // **全部文件**下查找workspace(声明,函数,变量)

ctrl + shift + O 或 前辍输入&#39;@&#39;标识(例:&#39;@reactive&#39;) // **当前文件**下查找workspace(声明,函数,变量)

ctrl + shift + \\ // 跳转到对应匹配括号(例:&#39;{&#39;跳转到&#39;}&#39;)

ctrl + K ctrl + 0 // 折叠 当前文件全部代码

ctrl + K ctrl + 1 // 折叠 当前代码级别level 1 折叠

ctrl + K ctrl + 2 // 折叠 当前代码级别level 2 折叠

ctrl + K ctrl + [ 或 ] // 对当前函数折叠和展开</code></pre><h2>Win系统</h2><h3>命令行(默认cmd)</h3><pre><code>rd /s/q [dir name] // 强制删除 文件夹

del /f/s/q [filename] // 强制删除 文件

new-item [filename] // 创建 文件 (powershell)

echo a 2&gt; [filename] // 创建 文件

md [dir name] // 创建 文件夹

ren [old name] [new name] // 重命名</code></pre><h2>Git</h2><h3>命令行</h3><pre><code>// 工作中常用
git add *
git commit -m &#39;info&#39;
git stash // 修改的文件 压入栈中
git pull origin dev
git push origin dev_yu
git stash pop // 弹出 最近栈中文件</code></pre><h3>使用技巧</h3><pre><code>// 在线看源码
- github\`1s\`
例子:
https://github.com/liudewa888/webpack-example
// 添加 &#39;1s&#39; 直接用vscode打开对应的源码
https://github1s.com/liudewa888/webpack-example/</code></pre>`,12),l=[o];function s(a,d){return n(),t("div",i,l)}const m=e(r,[["render",s]]);export{m as default};
