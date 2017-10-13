<template>
  <div class="nav">
 
      <el-menu theme='dark' class="el-menu-demo" mode="horizontal" default-active='1' @select="handleSelect">
        <el-menu-item index='1'>首页</el-menu-item>
        <el-submenu index='2'>
            <template slot="title">技术交流区</template>
            <el-menu-item index='2-1'>Node.js</el-menu-item>
            <el-menu-item index='2-2'>Java</el-menu-item>
            <el-menu-item index='2-3'>PHP</el-menu-item>
        </el-submenu>
        <el-menu-item index='3'>讨论</el-menu-item>

        <el-menu-item class="login" index='0'><router-link to="/login">注册</router-link></el-menu-item>
        <el-menu-item class="login" index='-1'><router-link to="/login">登录</router-link></el-menu-item>
      </el-menu>
 
  </div>
</template>


<script>
export default {
  name: 'QklHeader',
  methods:{
    handleSelect(key,keyPath){
      console.log({
        key,
        keyPath
      })
    }
  }
}
</script>

<style>
.el-menu-item:last-child{
  float: right;
  color: white;
}
.el-menu-item:nth-last-child(2){
  float: right;
  color: white;
}
</style>
