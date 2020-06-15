<template>
  <div class="preview">
    <van-nav-bar title="提交订单" left-arrow @click-left="$router.go(-1)" />
    <div class="card">
      <van-cell title="选择收货地址" is-link />
    </div>
    <div class="card">1</div>
    <div class="card">2</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    id: { type: String, required: true }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      shop_detail: state => state.shop_detail,
      cart_data: state => state.cart_data
    })
  }
}
</script>

<style scoped>
.preview {
  background-color: #f4f4f4;
}
.card {
  margin: 10px;
  padding: 10px;
  background-color: #fff;
}
</style>