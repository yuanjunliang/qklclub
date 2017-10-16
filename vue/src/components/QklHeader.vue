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

        <el-menu-item index='0'>登录</el-menu-item>
        <el-menu-item index='-1'><router-link to="/regist">注册</router-link></el-menu-item>
      </el-menu>
      <div>
        <qkl-login :dialogFormVisible=dialogFormVisible></qkl-login>
      </div>
  </div>
</template>


<script>
import QklLogin from '../components/QklLogin'
export default {
  name: 'QklHeader',
  data(){
    return{
       dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    }
  },
  methods:{
    handleSelect(key,keyPath){
      if(key==0){
       this.createLoginVue()
      }
      console.log({
        key,
        keyPath
      })
    },
    createLoginVue(){
      this.dialogFormVisible = true;
      console.log({
        dialogFormVisible:this.dialogFormVisible
      })
    }
  },
  components:{
    QklLogin
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
  font-size: 20px;
}
</style>
