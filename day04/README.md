# vue2.0与vue1.0变化

## 一、 组件模板的变化 
    组件的template中，必须有且只有一个根元素


## 二、 生命周期的变化     
    vue1.0生命周期
        init、created、beforeCompile、compiled、ready、beforeDestroy、destroyed
    vue2.0生命周期
        beforeCreate 组件实例刚刚被创建，属性还没有
        created      组件已经创建完成，属性已经绑定
        beforeMount  模板编译之前
        mounted      模板编译之后 ，代替之前的compiled和ready两个状态    
        beforeUpdate 组件更新之前
        updated      组件更新完毕
        beforeDestroy组件销毁之前
        destroyed    组件销毁之后


## 三、 循环v-for的变化        

### 1. 语法变化 
    vue1.0
        v-for="(k,v) in arr"
    vue2.0     
        v-for="(v,k) in arr"
        更加类似于原生js的语法：arr.forEach(function(value,index){});

### 2. 可以直接循环包含重复数据的集合
    
### 3. 去除了隐式变量    
    vue2.0中不再有$index、$key等


## 四、 过滤器的变化 

### 1. 去除了所有内置过滤器
    vue1.0内置了多个过滤器，如currency、json、limitBy、filterBy等
    vue2.0不再提供任何内置过滤器，全部被删除了
    如何解决：
        a.使用自定义过滤器
        b.使用第三方工具库，如lodash

### 2.自定义过滤器的语法变化        
    主要是自定义过滤器时传参的变化
    vue1.0中传参时以空格隔开
    vue2.0中传参时使用小括号


## 五、 父子组件间的通信

    vue1.0中子组件可以同步修改父组件数据，在绑定父组件数据时添加.sync即可
    vue2.0中不允许直接修改父组件的数据   
        解决：可以将绑定过来的数据存入另一个变量中再操作 

        重点：如果想实现两步修改父组件中的数据，可以将父组件中的数据包装成对象，然后在子组件中修改对象的属性（对象是引用类型）


## 六、 非父子组件间的通信
    
    非父子组件间的通信，可以使用一个空的Vue实例作为中央事件总线，即单一事件管理组件通信
    
    var Event=new Vue();
    Event.$emit(事件名,数据);
    Event.$on(事件名,function(data){

    }.bind(this))


## 七、 动画的变化 

### 1. 使用方式的变化
vue1.0中使用transition，是一个属性
    <div transition="fade"></div>
    定义class:
        .fade-transition
        .fade-enter
        .fade-leave

vue2.0中使用transition，是一个组件
    <transition name="fade">
        <div>运动的元素</div>
    </transition>
    定义class:
        .fade-enter //初始状态
        .fade-enter-active //当元素显示时变成什么样
        .fade-leave //离开状态
        .fade-leave-active //当元素离开时变成什么样

### 2. transition相关函数
    钩子函数，函数参数表示当前运行的元素，DOM对象

### 3. 结合animate.css    
    
### 4. 多元素动画     
    <transition>只能应用于单个元素，如果有多个元素，需要使用<transition-group>，同时必须为每个元素设置:key属性，指定唯一key值


## 八、 路由的变化 

### 1. 基本用法
    a.布局
        <div>
            <!-- 使用router-link组件来导航，to属性可以指定链接，<router-link>组件默认会被渲染成一个<a>标签 -->
            <router-link to="/home">主页</router-link>
            <router-link to="/news">新闻</router-link>
        </div>
        <div>
            <router-view></router-view> <!-- 用来显示路由内容    -->
        </div>
    b.配置路由

### 2. 路由嵌套和参数传递
    获取参数的方式与vue1.0相同：
        传统方式：{{$route.query}}        
        rest风格：{{$route.params}}

### 3. 路由实例的方法
    router.push() //添加路由
    route.replace() //替换路由        

### 4.路由结合动画
    vue-router + animate.css


## 九、 vue2.0中的vue-cli

### 1. 基本使用，步骤：
    vue init webpack-simple vue-cli
    cd vue-cli
    cnpm install
    npm run dev

### 2. vue-loader结合vue-router
    cnpm install vue-router --save
    编辑main.js，如下：
    























