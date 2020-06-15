<template>
  <div class="shop">
    <div class="back-btn">
      <van-icon name="arrow-left" size="20px" color="#fff" @click="$router.go(-1)" />
    </div>
    <my-card
      :title="shopDetail.name"
      :slogan="shopDetail.slogan"
      :desc="shopDetail.description"
      :imgURL="shopDetail.shop_img"
    ></my-card>
    <van-tabs v-model="active" animated sticky>
      <van-tab title="点餐">
        <my-order :id="id"></my-order>
      </van-tab>
      <van-tab title="评价">2</van-tab>
      <van-tab title="商家">3</van-tab>
    </van-tabs>
    <my-submit-bar :id="id"></my-submit-bar>
  </div>
</template>

<script>
import MyCard from '../../components/MyCard'
import MyOrder from '../../components/MyOrder'
import MySubmitBar from '../../components/MySubmitBar'
export default {
  components: {
    MyCard,
    MyOrder,
    MySubmitBar
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      shopDetail: {},
      goodsCateList: [],
      goodsList: [],
      active: '1',
      price: 0
    }
  },
  created() {
    this.getShopDetail()
  },
  methods: {
    async getShopDetail() {
      const { data: res } = await this.$http.get(`shops/${this.id}`)
      if (res.meta.status === 200) {
        this.shopDetail = res.data
        this.$store.commit('saveShop_detail', res.data)
      }
    }
  }
}
</script>

<style scoped>
.back-btn {
  height: 50px;
  padding: 15px 0 0 10px;
}
.my-card,
.back-btn {
  background-color: #2e2f3b;
}
.van-tabs,
.van-tabs /deep/ .van-tabs__content--animated,
.van-tabs /deep/ .van-tab__pane,
.van-tabs /deep/ .van-tab__pane-wrapper {
  height: 100%;
}
.van-tabs /deep/ .van-hairline--top-bottom::after,
.van-tabs /deep/ .van-hairline-unset--top-bottom::after {
  border-width: 0 0 1px;
}
</style>
