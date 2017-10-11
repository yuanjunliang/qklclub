<template>
  <div>
    <el-menu theme='dark' class="el-menu-demo" mode="horizontal">
        <el-menu-item index='1'>首页</el-menu-item>
        <el-submenu index='2'>
            <template slot="title">技术交流区</template>
            <el-menu-item index='2-1'>Node.js</el-menu-item>
            <el-menu-item index='2-2'>Java</el-menu-item>
            <el-menu-item index='2-3'>PHP</el-menu-item>
        </el-submenu>
        <el-menu-item index='3'>讨论</el-menu-item>
    </el-menu>
  </div>
</template>


<script>
export default {
  name: 'QklHeader'
}
</script>


<style>

</style>
