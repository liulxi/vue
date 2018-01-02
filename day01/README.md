# 讲师：汤小洋

## 一、 Vue.js简介

### 1. Vue.js是什么
Vue.js也称为vue，读音/vju:/，类似 view，错误读音v-u-e
版本 v1.x v2.x

+ 是一个构建用户界面的框架，数据驱动的
+ 通过简单的API实现响应的数据绑定和组合的视图组件
+ 是一个mvvm框架，和angular、react类似
+ 更容易上手、小巧

参考：[Vue.js官网](https://cn.vuejs.org/)

### 2. vue和angular的区别

#### 2.1 angular
+ 上手较难
+ 指令以ng-xxx开头
+ 所有属性和方法都存储在$scope中
+ 由Google维护

#### 2.2 vue
+ 简单、易学
+ 指令以v-xxx开头
+ HTML代码+JSON数据，再创建一个vue实例
+ 由个人维护


## 二、 起步

### 1. 下载核心库vue.js
版本 v1.0.28

### 2.Hello World（对比angular）

#### 2.1 angular实现
    js:
        var app=angular.module('myApp',[]);
        app.controller('MyController',['$scope',function($scope){
            $scope.msg='Hello World';
        }]);

    html:
        <html ng-app="myApp">
            <div ng-controller="MyController">
                {{msg}}
            </div>
        </html>    

#### 2.2 vue实现
    js:
        new Vue({
            el:'#itany', 
            data:{
                msg:'Hello World'
            }
        });

    html:
        <div id="itany">
            {{msg}}
        </div>

#### 2.3 安装vue-devtools插件，便于在Chrome中调用vue

步骤：
    1.git clone https://github.com/vuejs/vue-devtools.git
    2.cd vue-devtools
      cnpm install
    3.npm run build
    4.打开chrome的更多工具——扩展程序，将工程中的shells目录中的chrome目录拖放到扩展程序中即可


## 三、 指令

### 1. 什么指令？
    用来扩展html标签的功能
    angular中常用的指令：
        ng-model
        ng-repeat
        ng-click
        ng-show/ng-hide

### 2. vue中常用的指令
    
#### 2.1 v-model
    双向数据绑定，一般用于表单元素 

#### 2.2 v-for
    对数组或对象进行循环操作

#### 2.3 v-on
    用户绑定事件，用法v-on:事件名="函数"

#### 2.4 v-show  
    显示隐藏元素，只有v-show指令，没有v-hide


## 四、 练习：用户管理
    使用BootStrap+vue       


## 五、 事件和属性

### 1. 事件

#### 1.1 事件简写
    v-on:click=""，简写方式 @click=""（推荐）

#### 1.2 事件对象$event
    包含事件相关信息，如事件源、事件类型等

#### 1.3 事件冒泡
    概念：当一个元素上的事件被触发时，事件从事件源开始，往上冒泡直到页面的根元素，这一过程称为事件冒泡
    阻止冒泡：
        a)原生js方式：依赖事件对象
            e.stopPropagation();
            e.cancelBubble=true;
        b)vue方式：不依赖事件对象
            @click.stop="" （推荐）         

#### 1.4 默认行为
    概念：触发某些事件时默认会执行的行为，如：点击链接时默认会跳转，右键点击时默认会弹出菜单
    阻塞默认行为：
        a)原生js方式：依赖事件对象
            e.preventDefault()
        b)vue方式：不依赖事件对象
            @click.prevent="" (推荐)

#### 1.5 键盘事件
    @keydown @keypress @keyup
    回车：@keydown.13="" @keydown.enter=""  
         @keydown.37="" @keydown.left=""              
         @keydown.38="" @keydown.up=""              
         @keydown.39="" @keydown.right=""              
         @keydown.x=""   

         默认没有@keydown.ctrl事件，可以自定义键盘事件：Vue.directive('on').keyCodes.ctrl=17;            

### 2. 属性

#### 2.1 属性绑定和属性缩写
    v-bind主要用于属性绑定，如 v-bind:属性名=“”

    属性的简写：
        v-bind:src="" 简写 :src="" （推荐）

#### 2.2 class和style属性
    绑定class和style属性时比较特殊，语法比较复杂
    v-bind:class=""  :class=""
    v-bind:style=""  :style=""


## 六、 模板
    
    模板就是{{}}，用来进行数据的绑定，显示在页面中

    数据绑定的方式：
        1.双向绑定 v-model
        2.单向绑定
            方式1：使用花括号{{}}、{{*}}、{{{}}}，可能会出现闪烁的问题，可以使用v-cloak解决
            方式2：使用v-text、v-html(等同于{{{}}})
            注：在vue2.x中已经删除了{{{}}}


## 七、 过滤器

### 1. 基本用法
    用来过滤模型数据，在显示之前进行数据处理和筛选
    语法：{{ data | filter1 参数1 参数2 | filter2 参数1 参数2 }}

### 2. 内置过滤器
    currency、uppercase、lowercase、capitalize
    json、debounce
    limitBy
    filterBy
    orderBy

    注：在vue2.x中所有内置过滤器已经被删除了

### 3.自定义过滤器
    使用全局方法Vue.filter()注册一个自定义过滤器，接受两个参数：过滤器ID和过滤器函数

#### 3.1 语法 
    Vue.filter(过滤器名,function(data,参数){
        return 处理后数据;
    });    

#### 3.2 双向过滤器
    前面的过滤器都是单向的，由数据model--->视图view，即把来自模型的数据在视图中显示之前进行过滤处理
    双向过滤器是两个方向，由视图view<--->数据model，即也可以把来自视图的数据在绑定到模型中之前进行过滤处理    











