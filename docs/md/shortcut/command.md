# 常用快捷方式 和 命令行

## VSCode

### 快捷方式win系统

```

ctrl + 鼠标左键  // 多光标

ctrl + P // 查找文件

ctrl + T 或 前辍输入'#'标识(例:'#reactive') // **全部文件**下查找workspace(声明,函数,变量)

ctrl + shift + O 或 前辍输入'@'标识(例:'@reactive') // **当前文件**下查找workspace(声明,函数,变量)

ctrl + shift + \ // 跳转到对应匹配括号(例:'{'跳转到'}')

ctrl + K ctrl + 0 // 折叠 当前文件全部代码

ctrl + K ctrl + 1 // 折叠 当前代码级别level 1 折叠

ctrl + K ctrl + 2 // 折叠 当前代码级别level 2 折叠

ctrl + K ctrl + [ 或 ] // 对当前函数折叠和展开

```

## Win系统

### 命令行(默认cmd)
```
rd /s/q [dir name] // 强制删除 文件夹

del /f/s/q [filename] // 强制删除 文件

new-item [filename] // 创建 文件 (powershell)

echo a 2> [filename] // 创建 文件

md [dir name] // 创建 文件夹

```

## Git

### 命令行

```

// 工作中常用
git add *
git commit -m 'info'
git stash // 修改的文件 压入栈中
git pull origin dev
git push origin dev_yu
git stash pop // 弹出 最近栈中文件


```