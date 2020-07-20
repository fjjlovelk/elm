<template>
  <div class="shop">
    <div class="back-btn">
      <van-icon name="arrow-left" size="20px" color="#fff" @click="$router.go(-1)" />
    </div>
    <shop-card
      :title="shopDetail.name"
      :slogan="shopDetail.slogan"
      :desc="shopDetail.description"
      :imgURL="shopDetail.shop_img"
    ></shop-card>
    <van-tabs v-model="active" animated sticky>
      <van-tab title="点餐">
        <shop-content :shopId="shopId"></shop-content>
      </van-tab>
      <van-tab title="评价">2</van-tab>
      <van-tab title="商家">
        <van-cell-group>
          <van-cell title="地址" icon="location-o" :value="shopDetail.address" />
          <van-cell title="电话" icon="phone-o" :value="shopDetail.telphone" />
          <van-cell title="营业时间" icon="clock-o" :value="shopDetail.open_time + '-' + shopDetail.close_time" />
          <van-cell title="公告" icon="bullhorn-o" :value="shopDetail.slogan" />
        </van-cell-group>
      </van-tab>
    </van-tabs>
    <shop-submit-bar :shopId="shopId"></shop-submit-bar>
  </div>
</template>

<script>
import ShopCard from './ShopCard'
import ShopContent from './ShopContent'
import ShopSubmitBar from './ShopSubmitBar'
export default {
  components: {
    ShopCard,
    ShopContent,
    ShopSubmitBar
  },
  props: {
    shopId: {
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
      const { data: res } = await this.$http.get(`shops/${this.shopId}`)
      if (res.meta.status === 200) {
        this.shopDetail = res.data
        this.$store.commit('saveShopDetail', res.data)
      }
    }
  }
}
</script>

<style scoped>
.shop {
  height: 100%;
}
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
