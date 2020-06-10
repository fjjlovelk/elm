<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="$router.push('/mine')" />
    <van-form @submit="login">
      <van-field
        v-model="form.username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ pattern: pattern1, message: '用户名在2~8个字符且只能包含汉字、英文、数字和_' }]"
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
import { mapState } from 'vuex'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      pattern1: /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,8}$/,
      pattern2: /\w{5,}/
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin
    })
  },
  methods: {
    async login() {
      const { data: res } = await this.$http.post('mobile/login', this.form)
      if (res.meta.status === 200) {
        sessionStorage.setItem('token', res.data)
        this.$toast.success(res.meta.message)
        this.$store.commit('changeLoginState', { msg: true })
        this.$store.commit('saveUsername', { msg: this.form.username })
        this.$router.push('/mine')
      }
    }
  }
}
</script>

<style scoped>
</style>