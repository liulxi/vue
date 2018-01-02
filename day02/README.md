
## 一、 发送AJAX请求

### 1. 基本使用
    vue本身不支持，需要使用vue-resource插件实现发送AJAX和JSONP请求
    步骤：
    1.引入vue-resource.js文件
    2.使用this.$http发送请求
        this.$http({}).then(function(){},function(){});
        this.$http.get()
        this.$http.post()
        this.$http.jsonp()

### 2. 练习        
    百度搜索提示


## 二、 vue生命周期 
    vue实例从创建到销毁的过程，就是生命周期 ，共有七个阶段：
        init            实例开始初始化
        created         实例已经被创建
        beforeCompile   编译之前 
        compiled        编译之后 
        ready           准备就绪，插入文档中，此时页面中才真正显示内容
        beforeDestroy   销毁之前
        destroyed       销毁之后 
    每个阶段提供了相应的钩子函数，用来控制整个生命周期        
    注：此处针对的是vue1.x版本，vue2.x生命周期有所不同


## 三、 计算属性
    
### 1. 基本用法
    计算属性也是用来存储属性数据的，但具有以下特点：
        a.数据可以进行逻辑处理操作
        b.可以对计算属性中的数据进行监视    

### 2. 计算属性 vs 方法
    现象：将计算属性的get函数定义为一个方法也可以实现同样的功能
    区别：
        a.计算属性是基于它的依赖进行更新的，只有在相关依赖发生改变时才会更新变化
        b.计算属性是有缓存的，只要相关依赖没有改变，多次访问该计算属性时返回的是始终是相同的

### 3. get和set
    计算属性由两部分组成：get和set，分别用来获取计算属性和设置计算属性
    注：默认计算属性只有get，如果需要set，可以自己添加


## 四、 vue实例的属性和方法
    
    vm.$el
    vm.$data
    vm.$options
    vm.$mount()
    vm.$destroy()
    vm.$log()


## 五、 自定义指令
    使用全局方法Vue.directive()注册一个自定义指令，接收两个参数：指令ID，定义对象

### 1. 语法
    Vue.directive(指令名称,function(参数){ 

    });

    Vue.directive(指令名称,{
        bind:function(){
            alert('在指令第一次绑定到元素上时调用，只调用一次');
        },
        update:function(newValue,oldValue){
            alert('每当绑定值变化时都会调用');
        },
        unbind:function(){
            alert('在指令从元素上解绑时调用，只调用一次');
        }
    }); 

### 2. 元素指令
    自定义元素，即自定义指令以元素的形式使用，类似于angular中的restrict:E
    Vue.elementDirective(指令名称,{
        bind:function(){

        }
    });
    注：一般很少使用元素指令，更好的替代方式是使用vue中的组件

### 3. 练习
    使用自定义指令实现拖拽页面中的元素


## 六、 监视数据的变化 
    vue实例提供了$watch()，用于监视vue实例中数据的变化 

### 语法：
    vm.$watch(监视数据,function(newValue,oldValue){
        //操作
    },{deep:true});    
注：通常更好的办法是使用计算属性，而不是使用一个命令式的$watch回调


## 七、 过渡（动画）

    Vue在插入、更新或移除DOM元素时，可以提供多种不同的过渡效果
    本质上还是使用CSS3动画：transition、animation

    结合第三方动画库animate.css一起使用















