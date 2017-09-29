<template>
  <div>
      <el-menu theme='dark' class="el-menu-demo" mode="horizontal">
          <el-menu-item>首页</el-menu-item>
          <el-submenu>
              <template slot="title">技术交流区</template>
              <el-menu-item>Node.js</el-menu-item>
              <el-menu-item>Java</el-menu-item>
              <el-menu-item>PHP</el-menu-item>
          </el-submenu>
          <el-menu-item>讨论</el-menu-item>
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
