<template>
  <div>
    <div class="top" @click="touch">
      <div v-if="isLogin">
        <div class="login">{{username}}</div>
        <div class="tip">再忙，也要记得吃饭哟~</div>
      </div>
      <div v-else>
        <div class="login">
          <span @click="$router.push('/login')">立即登录</span>
          <van-icon name="arrow" size="18px" color="#ccc" />
        </div>
        <div class="tip">未注册过的用户自动注册</div>
      </div>
      <div class="avatar">
        <van-icon name="smile" size="100px" color="skyblue" />
      </div>
    </div>
    <div>
      <van-cell title="我的地址" icon="location-o" is-link />
      <van-cell title="我的收藏" icon="like-o" is-link />
      <van-cell title="规则中心" icon="description" is-link />
    </div>
    <van-action-sheet
      v-model="showLogout"
      :actions="[{ name: '退出登录' }]"
      cancel-text="取消"
      close-on-click-action
      @select="logout"
      @cancel="showLogout = false"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      showLogout: false
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
      username: state => state.username
    })
  },
  methods: {
    touch() {
      if (!this.isLogin) return
      this.showLogout = true
    },
    logout() {
      sessionStorage.removeItem('token')
      this.$store.commit('changeLoginState', { msg: false, clear: true })
      this.$store.commit('saveUsername',  { msg: '', clear: true })
    }
  }
}
</script>

<style scoped>
.top {
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login {
  font-size: 28px;
}
.tip {
  font-size: 14px;
  color: #ccc;
  margin-top: 5px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>