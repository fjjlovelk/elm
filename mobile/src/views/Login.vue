<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="$router.push('/mine')" />
    <van-form @submit="login">
      <van-field
        v-model="form.username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ pattern: pattern1, message: '用户名在2~6个字符' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[{ pattern: pattern2, message: '密码不得少于5个字符' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      pattern1: /[\u4e00-\u9fa5_a-zA-Z0-9]{2,6}/,
      pattern2: /\w{5,}/
    }
  },
  methods: {
    login() {
      console.log(this.form)
    }
  }
}
</script>

<style scoped>
</style>