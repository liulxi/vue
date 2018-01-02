<template>
  <div id="app">
    {{msg}}
    <br>
    <!-- 按钮 -->
    <el-button>我的按钮</el-button>
    <el-button type="primary">我的按钮</el-button>
    <el-button type="success">我的按钮</el-button>
    <el-button type="info">我的按钮</el-button>
    <el-button type="warning">我的按钮</el-button>
    <el-button type="danger">我的按钮</el-button>
    <br>
    <br>
    <el-button type="danger" icon="edit">我的按钮</el-button>
    <el-button type="danger" icon="search">我的按钮</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon-right"></i></el-button>
    <hr>
    <!-- 图标 -->
    <span class="el-icon-delete"></span>
    <i class="el-icon-close"></i>
    <i class="el-icon-loading"></i>
    <hr>
    <!-- 布局 -->
    <el-row>
      <el-col :span="6" class="grid">welcome</el-col>
      <el-col :span="6" class="grid">to</el-col>
      <el-col :span="6" class="grid">itany</el-col>
      <el-col :span="6" class="grid">网博</el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="grid">itany</el-col>
      <el-col :span="12" class="grid">网博</el-col>
    </el-row>
    <hr>
    <!-- 日期选择器 -->
    <DatePicker></DatePicker>
    <hr>
    <!-- 文件上传 -->
    <Upload></Upload>

  </div>
</template>

<script>
import DatePicker from './components/DatePicker.vue'
import Upload from './components/Upload.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to 网博'
    }
  },
  components:{
    DatePicker,
    Upload
  }
}
</script>

<style lang="less">
  .grid{
    border:1px solid #ccc;
    font-size:20px;
    color:@color;
    .h(80px);
  }
  @color:red; 
  .h(@height){
    height: @height;
  }





</style>
