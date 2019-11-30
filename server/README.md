# 从零使用Vue+Express+Mongodb搭建一个短链接及二维码生成平台
===

## 导读
首先呢，我们来明确一下，本章节我们要做什么呢？我们需要使用`vue`+`express`+`mongodb`搭建一个全栈短链接及二维码生成平台。

## 环境搭建

* 首先，我们需要在本地的一个文件夹目录里面，初始化本地项目，使用 `npm init -y`
* 接着，我们安装一些我们需要的模块包,`express` 、`mongoose`、`body-parser`、`config`、`shortid`、`valid-url`
* 我们来简单介绍下每个模块的基本作用：
    * `express` : 一款 `Node.js Web` 开发框架，它给我们提供了很多方便快捷的中间件、路由，及一些强大的 API，我们可以是用来它来创建一些接口，然后在浏览器客户端调用这些接口，实现数据的请求响应
    * `mongoose` : 这是一款工具，什么样的工具呢？我们可以使用它，简单方便操作MongoDB数据库。
    * `body-parser` : `body-parser`是一个HTTP请求体解析的中间件，一般呢，我们会场用于在`express`中间件，用于处理`json`、`urlencoded`数据格式，然后我们就可以在`req.body`中访问请求参数
    * `config` : 配置`Node.js`的相关常用的配置，比如启动的`IP`，`Mongodb`链接`url`，短链接服务地址等等
    * `shortid` : 生成`url`短`id`
    * `valid-url` : 验证url规则，通常我们会用它下面的`isUri`方法，来验证url是否符合规范
* 接着，我们来安装下，所需要的`vs code`插件，这里呢，我们来安装一个`REST Client`这样一个插件，用于在编辑器发出`http`请求
* 接着我们来，划分下我们的服务端的目录结构


## 文件目录结构划分

```bash
|   main.js
|   package.json
|   README.md
|
+---config
|       db.js
|       default.json
+---models
|       Url.js
|
+---public
|   |   index.html
|   |   main.js
|   +---images
|   |
|   \---scripts
|
+---requets
|       api.http
|
\---routes
|       index.js
|       url.js
```

## 本地服务编写

首先我们新建一个`main.js`, 编辑如下：

```js

```





