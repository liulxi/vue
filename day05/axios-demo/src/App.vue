<template>
  <div id="app">
    {{msg}}
    <br>
    <button @click="send">发送请求</button>
    <button @click="sendJsonp">发送jsonp请求</button>
    <hr>
    <MyButton @click.native="send"></MyButton>
  </div>
</template>

<script>
import axios from 'axios'
import jsonp from 'jsonp'
import MyButton from './components/MyButton.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to itany'
    }
  },
  methods:{
    send(){
      // alert(111);
      // axios.get('user.json')
      axios.get('https://api.github.com/users/tangyang8942') //GitHub服务端支持跨域的请求，可以直接发送请求
        .then(function(resp){
          console.log(resp.data);
        }).catch(function(err){
          console.log(err);
        });
    },
    sendJsonp(){
      //https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=%20&json=1&p=3&sid=1458_21095_17001_22157&req=2&bs=%E7%99%BE%E5%BA%A6&pbs=%E7%99%BE%E5%BA%A6&csor=0&cb=jQuery110208586136400699615_1495519695400&_=1495519695408
      jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a',{
        param:'cb' //指定jsonp请求的参数名
      },function(err,data){
        if(err){
          console.log(err);
        }else{
          console.log(data);
        }
      });
    }
  },
  mounted(){ //页面加载时获取数据
     axios.get('https://api.github.com/users/tangyang8942') //GitHub服务端支持跨域的请求，可以直接发送请求
        .then(resp => {
          // console.log(resp.data);
          this.msg=resp.data.name;
          // console.log(this);
        }).catch(function(err){
          console.log(err);
        });
  },
  components:{
    MyButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
