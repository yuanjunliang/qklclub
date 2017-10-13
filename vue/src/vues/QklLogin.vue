<template>
    <div class="sign">
        <div class="logo">
            <a href="/"><img src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""></a>
        </div>
        <div class="main">
            <div><h4>注册</h4></div>
            <div class="login-content">
                <el-form ref="form" label-width='100px' :model='form'>
                    <el-form-item label="用户名"><el-input v-model="form.username"></el-input></el-form-item>
                    <el-form-item label="密码"><el-input v-model="form.password" type='password' auto-complete='on'></el-input></el-form-item>
                </el-form>
            </div>
            <div><el-button type="primary" @click="registButtonClick">注册</el-button></div>
        </div>
    </div>
</template>

<script>
export default {
  name:'login',
  data(){
      return{
          form:{
              username:'',
              password:''
          }
      }
  },
  methods:{
      registButtonClick(){
        let params  ={
            username:this.form.username,
            password:this.form.password
        }

        JLFetch('/user/user_add','Get',params)
        .then(responseData=>{
            console.log({
                responseData
            })
        })
      }
  }
}
</script>


<style>
.sign {
    /* background-color: #f1f1f1; */
    position: relative;
    height: 100%;
    min-height: 750px;
}

h4 {
    font-size: 20px;
}

.logo {
    position: absolute;
    left: 100px;
    top: 56px;
}

.main {
    width: 400px;
    margin: 60px auto 0;
    position: absolute;
    left: 50%;
    margin-left: -200px;
}

.login-content label {
    font-size: 18px;
}

body {
    margin: 0px;
}
</style>
