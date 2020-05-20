<template>
  <div class="login">
    <div class="login-box">
      <img src="../assets/logo.png" />
      <el-form :model="loginForm" ref="loginRef" :rules="loginRule">
        <el-form-item prop="username">
          <el-input v-model.trim="loginForm.username" placeholder="用户名">
            <i slot="prefix" class="iconfont iconuser1"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model.trim="loginForm.password" type="password" placeholder="密码">
            <i slot="prefix" class="iconfont iconwodemima"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
        <div class="tip">
          <div>温馨提示：</div>
          <div>未登录过的新用户，自动注册</div>
          <div>注册过的用户可凭账号密码登录</div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRule: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 14, message: '用户名在2~14个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, message: '密码不得少于5个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginRef.validate(async valid => {
        if (!valid) return false
        const { data: res } = await this.$http.post('admin/login', this.loginForm)
        if (res.meta.status === 200) {
          this.$message.success(res.meta.message)
          sessionStorage.setItem('token', res.data)
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style scoped>
.login {
  background-color: #2b4b6b;
}
.login-box {
  width: 450px;
  height: 350px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login-box > img {
  width: 130px;
  border-radius: 50%;
  border: 10px solid #fff;
  background-color: #eee;
  box-shadow: 0 0 10px #eee;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-box > .el-form {
  width: 90%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}
.login-box > .el-form .el-button {
  width: 100%;
  font-size: 16px;
}
.login-box > .el-form .tip {
  font-size: 12px;
  color: red;
  text-align: center;
  padding-bottom: 10px;
}
</style>