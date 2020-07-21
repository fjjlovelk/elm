# 前言

此项目是一个模仿饿了么外卖的练手项目，目的是增加自己vue的熟练度，UI部分借鉴了一些优秀的vue项目。该项目分为3个部分：

1. admin	后端添加数据，如添加商铺、商品、展示用户等
2. mobile   前端展示项目（请在浏览器调试台切换为手机模式预览），模仿饿了么布局
3. server    为以上2个项目提供接口支持
4. screenshot   项目部分截图

## 技术栈

1. admin	vue2.6.11 + vue-cli4.3.0 + vuex + vue-router + axios + element-ui + ES6/7
2. mobile   vue2.6.11 + vue-cli4.4.0 + vuex + vue-router + axios + vant-ui + ES6/7 + flex
3. server    nodejs10.16.3 + express4.17.1 + mongoose5.9.14 + jsonwebtoken + cors + bcrypt + multer

## 项目运行

#### 注意：电脑需要安装git、node(6.0版本以上)、mongodb

**(如果mobile项目启动后页面中没有数据，请启动admin添加商铺商品数据)**

```shell
git clone https://github.com/fjjlovelk/elm.git 

// 1. 先启动接口
cd server
npm install 或 yarn
node app.js

// 2. 启动 admin 或 mobile
cd admin/mobile
npm install 或 yarn
npm run serve

// 3. 运行地址
admin  http://localhost:8090
mobile  http://localhost:8091
server  http://localhost:3000

```
# 说明

>  jsonwebtoken	用来生成token，进行登录验证

>  cors	node中解决跨域的插件

>  bcrypt	将用户注册的密码加密

>  multer	处理图片上传的路径



# 项目布局

1. admin/mobile

```
.
├── src                       // 源码目录
│   ├── api                   // 对axios进行封装，对接口统一管理
|   ├──	assets                // 图片和iconfont
│   ├── components            // 组件
│   ├── plugins               // 引用的插件
│   ├── public                // 静态资源，入口html文件和图标
│   ├── router                // 路由配置
│   ├── store                 // vuex的状态管理
│   ├── utils                 // 工具类
│   ├── views                 // 页面文件
│   ├── App.vue               // 页面入口文件
│   ├── main.js               // 程序入口文件，加载各种公共组件
├── Vue.config.js             // vue和webpack配置文件
.
```

2. server

```
.
├── middleware                // 中间件
├── models                    // 数据库的各个模型
├── plugins                   // 引用的插件
├── routes                    // 路由/接口
├── uploads                   // 上传的图片
├── app.js                    // 程序入口
.
```

