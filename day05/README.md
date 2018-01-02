
## 一、 Element UI

### 1. 简介
    Element UI是饿了么团队提供的一套基于Vue2.0的组件库，可以快速的搭建网站，提高开发的效率
        ElementUI PC端
        MintUI 移动端

[官网](http://element.eleme.io)      

### 2. 快速上手

#### 2.1 准备工作
    vue init webpack-simple element-demo  
    cd element-demo
    cnpm install
    npm run dev

#### 2.2 安装element-ui
    cnpm install element-ui -S    

#### 2.3 在main.js中引入并使用组件
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-default/index.css' //该样式文件需要单独引入
    Vue.use(ElementUI); //使用ElementUI

#### 2.4 在webpack.config.js中添加loader
    css样式和字体图标都需要由相应的loader来加载，所以需要配置style-loader、css-loader和file-loader，内容：
          {
            test: /\.css$/, //加载样式
            loader: 'style-loader!css-loader'
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, //加载字体
            loader: 'file-loader'
          }
    默认并没有安装style-loader，所以需要单独安装该模块：
        cnpm install style-loader -D
    注：修改webpack.config.js文件后需要重启服务器 npm run dev           

#### 2.5 使用组件
        
#### 2.6 使用Less
    a.编写less，必须要指定lang="less"
        <style lang="less">
        </style>
    b.安装相关模块：less、less-loader
        cnpm install less less-loader --save-dev
    c.在webpack.config.js中添加loader
        {
            test: /\.less$/, //加载less
            loader: 'less-loader'
        }    


### 3. 按需引入

#### 准备工作
    vue init webpack-simple element-demo2
    cd element-demo2
    cnpm install
    cnpm install element-ui --save
    cnpm install style-loader --save-dev
    在webpack.config.js中添加loader
    npm run dev

#### 3.1 安装babel-plugin-component
    cnpm install babel-plugin-component -D    

#### 3.2 配置.babelrc文件
    "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]

#### 3.3 只引入需要的组件
    import {Button,Input,Radio,Select,Option,Rate,Table,TableColumn,Pagination,Carousel,CarouselItem} from 'element-ui'

    Vue.use(Button);
    Vue.use(Input);
    Vue.use(Radio);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(Rate);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Pagination);
    Vue.use(Carousel);
    Vue.use(CarouselItem);  



## 二、 axios

### 1. 简介
    axios是一个基于Promise的HTTP请求客户端，用来发送请求
    vue2.0官方推荐使用axios，同时不再对vue-resource进行更新

### 2. 基本用法 

#### 准备工作
    vue init webpack-simple axios-demo  
    cd axios-demo
    cnpm install
    npm run dev

#### 2.1 安装axios并引入
    cnpm install axios --save
    import axios from 'axios'

#### 2.2 发送AJAX请求


#### 2.3 发送跨域的请求
    axios本身并不支持jsonp，没有提供发送jsonp请求的方法，作者也暂没计划在axios中支持jsonp
    所以只能使用第三方jsonp模块包或其他框架

    cnpm install jsonp --save
    import jsonp from 'jsonp'

#### 2.4 为自定义组件添加事件
     <MyButton @click.native="send"></MyButton>    


## 三、 自定义全局组件(插件)
    
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)

    vue init webpack-simple component-demo

    |-components
        |-user
            |-Login.vue
            |-index.js //导出组件


## 四、 Vuex

### 1. 简介
    Vuex是一个专为Vue.js应用程序开发的状态管理模式。
    采用集中式存储管理应用中所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    简单来说，用来集中管理数据，类似于React中的Redux，都是基于Flux的前端状态管理框架

[官网](http://vuex.vuejs.org/zh-cn/)    

### 2. 基本用法，步骤 ：

#### 准备工作
    vue init webpack-simple vuex-demo
    cd vuex-demo
    cnpm install
    npm run dev

#### 2.1 安装vuex
    cnpm install vuex -S    

#### 2.2 创建store.js文件，在main.js中导入并配置store选项

#### 2.3 编辑store.js文件
    Vuex的核心是store(仓库)，相当于是一个容器，一个store实例中包含以下属性和方法：
        state       定义属性(状态、数据)
        actions     定义方法(动作)
        mutations   定义变化 
        getters     用来获取属性
        commit      提交变化

#### 2.4 编辑App.vue
    在子组件中访问store对象的两种方式：
        方式1：通过this.$store访问
        方式2：通过mapGetters和mapActions访问，vuex提供的两个方法
            mapGetters  获取属性(数据)，必须定义gettters方法
            mapActions  获取方法(动作)
            注：需要先导入这两个方法 import {mapGetters,mapActions} from 'vuex'

        可查看chrome的devtools中的Vuex    

### 3. 更好的组织项目结构
    如果store.js文件太大，内容比较多，建议将getters、actions、mutations分别定义到单独的文件中

##### 准备工作
    vue init webpack-simple vuex-demo2
    cd vuex-demo2
    cnpm install
    cnpm install vuex -S
    npm run dev

#### 项目结构   
    |-src
        |-store
            |-index.js
            |-actions.js
            |-getters.js
            |-types.js //类型常量
            |-moudles //相当于state，包含状态数据 
                |-user.js
                |-product.js
                |-.....
































