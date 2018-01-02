
## 一、 组件Component

### 1. 什么是组件？
    组件是Vue.js最强大的功能之一，组件是自定义元素(对象)，可以扩展HTML元素，封装可重用的代码
    其实，vue中的组件类似于自定义的元素指令

### 2. 定义组件的两种方式
    方式1：先创建组件构造器，然后由构造器创建组件
    方式2：直接创建组件

### 3. 组件分类
    分类：全局组件、局部组件
    在组件中存储数据，必须以函数形式，函数返回一个对象

### 4. 引用模板
    将模板内容单独放到某个地方 

### 5. 动态组件
    多个组件使用同个挂载点，然后动态地在它们之间切换
    <component :is="组件名"></component>        


## 二、 组件间数据传递

### 1.父子组件
    在一个组件内部定义另一个组件，称为父子组件
    子组件只能在父组件内部使用
    默认情况下，子组件无法访问父组件的数据，每个组件实例的作用域是独立的

### 2. 组件间数据传递(通信)
    
#### 2.1 子组件获取父组件中的数据
    a)在调用子组件时，绑定想要获取的父组件中的数据
    b)在子组件内部，使用props选项声明获取的数据
    总结：父组件通过props向下传递数据给子组件

#### 2.2 父组件获取子组件中的数据        
    a)使用vm.$emit(事件名,数据)触发执行当前实例上的自定义事件
    b)在子组件上绑定相应事件，并在父组件中定义方法，用来获取数据
    总结：子组件用过events给父组件发送数据，实际上就是子组件把自己的数据发送到父级


## 三、 slot的使用
    本意：位置、槽
    作用：用来获取组件中的原内容，类似angular中的transclute指令


## 四、 vue-router路由

### 1. 基本用法
    使用vue构造SPA单页面应用
    使用不同url地址，出现不同效果，但显示在同一个页面中，称为单页面应用

    需要引入vue-router.js文件

    版本：0.x、2.x，不同版本在配置有所不同

### 2. 路由嵌套（多层路由）

### 3. 获取路由参数
    a)传统方式传参，查询字符串
        login?name=tom&pwd=123
    b)rest风格传参    
        regist/tom/123


## 五、 .vue文件、vue-loader、webpack

### 1. .vue文件
    .vue文件，也称为单文件组件，是Vue.js自定义的一种文件格式，一个.vue文件就量个单独的组件，在文件内封装了该组件相关的html、css和js，实现了对一个组件的封装

    .vue文件由三部分组件：<template>、<style>、<script>
        <template>
            html
        </template>

        <style>
            css
        </style>    

        <script>
            js
        </script>

### 2. vue-loader
    由于浏览器并不认识.vue文件，所以必须对.vue文件进行加载解析，此时就需要使用vue-loader，用来对.vue文件进行加载解析
    类似的loader还有很多，如：html-loader、css-loader、style-loader、babel-loader等
    需要注意的是vue-loader是基于webpack的，所以需要先构建webpack，然后在webpack中安装vue-loader模块

### 3.webpack
    webpack是一个前端资源模块化加载器和打包工具，它能把各种资源作用模块来使用和处理，如：样式(css、less、sass)、js、html、图片等
    实际上，webpack是通过不同的loader将这些资源进行加载后打包，然后输出打包后的文件
    简单来说，webpack就是一模块加载器，所有资源都可以作用为模块来加载，最后打包到一块

    [webpack官网](http://webpack.github.io/)

    webpack有一个核心配置文件webpack.config.js，必须放在项目根目录下

### 4.示例，步骤：

#### 4.1 创建如下的项目目录结构   
webpack-demo
    index.html
    main.js  入口文件
    App.vue  vue文件   
    package.json 工程文件
    webpack.config.js  webpack配置文件

#### 4.2 编写App.vue

#### 4.3 安装相关模块
    cnpm install vue@1.0.28 --save

    cnpm install webpack@1.15.0 -g
    cnpm install webpack@1.15.0 --save-dev
    cnpm install webpack-dev-server@1.16.3 --save-dev

    cnpm install vue-loader@8.5.4 --save-dev
    cnpm install vue-html-loader --save-dev
    cnpm install css-loader --save-dev
    cnpm install vue-style-loader --save-dev
    cnpm install vue-hot-reload-api@1.3.2 --save-dev

    cnpm install babel-loader@6.4.1 --save-dev
    cnpm install babel-core --save-dev
    cnpm install babel-preset-es2015 --save-dev //将es6语法转换为es5语法
    cnpm install babel-plugin-transform-runtime --save-dev //将es6新增api转换为es5实现
    cnpm install babel-runtime --save-dev
    
    合并：cnpm install --save-dev webpack@1.15.0 webpack-dev-server@1.16.3 vue-loader@8.5.4 vue-html-loader css-loader vue-style-loader vue-hot-reload-api@1.3.2 babel-loader@6.4.1 babel-core babel-preset-es2015 babel-plugin-transform-runtime babel-runtime

#### 4.4 编写main.js

#### 4.5 编写webpack.config.js

#### 4.6 编写package.json
    "scripts": {
        "dev": "webpack-dev-server --inline --hot --port 8080"
      },
    
#### 4.7 运行测试 
    npm run dev    


## 六、 vue-cli脚手架

### 1. 简介
    vue-cli是一个vue脚手架，可以快速构建项目结构
    vue-cli本身集成了很项目模板：
        simple
        webpack
        webpack-simple 推荐
        browserify
        browserify-simple

### 2. 示例，步骤 ：
    
#### 2.1 安装vue-cli            
    sudo cnpm install vue-cli -g
    验证：vue --version

#### 2.2 初始化项目，生成项目模板
    语法：vue init 模板名 项目名
    vue init webpack-simple#1.0 webpack-demo2

#### 2.3 进入生成的项目目录，安装模块包
    cd webpack-demo2
    cnpm install

#### 2.4 运行
    npm run dev





