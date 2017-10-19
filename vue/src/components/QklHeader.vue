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
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>  
  </div>
</template>


<script>
import QklLogin from '../components/QklLogin'
export default {
  name: 'QklHeader',
  data(){
    return{
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
        thsi.dialogFormVisible = true
      }
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
  font-size: 20px;
}
</style>
