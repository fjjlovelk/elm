<template>
  <div>
    <div class="top">
      <div>
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
  </div>
</template>

<script>
export default {}
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