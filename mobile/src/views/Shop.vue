<template>
  <div>
    <van-nav-bar left-arrow @click-left="$router.go(-1)" />
    <van-card :title="shopDetail.name" :desc="shopDetail.slogan" :thumb="shopDetail.shop_img" />
    <van-tabs v-model="active" animated>
      <van-tab title="点餐">
        <my-order :id="id"></my-order>
      </van-tab>
      <van-tab title="评价">2</van-tab>
      <van-tab title="商家">3</van-tab>
    </van-tabs>

    <van-submit-bar :price="price" button-text="去结算">
      <div class="shop-car">
        <van-icon name="cart-circle" size="60px" color="#fff" />
      </div>
    </van-submit-bar>
  </div>
</template>

<script>
import MyOrder from '../components/MyOrder'
export default {
  components: {
    MyOrder
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
      }
    }
  }
}
</script>

<style scoped>
.van-card:not(:first-child) {
  margin-top: 0;
  margin-bottom: 10px;
}
.van-card__title {
  font-size: 16px;
  font-weight: bold;
}
.van-tabs /deep/ .van-hairline--top-bottom::after,
.van-tabs /deep/ .van-hairline-unset--top-bottom::after {
  border-width: 0 0 1px;
}
.van-submit-bar {
  background-color: #020825d4;
}
.van-submit-bar__text,
.van-submit-bar__price {
  color: #fff;
}
.van-submit-bar__button--danger {
  background: #409eff;
}
.shop-car {
  margin-bottom: 20px;
  border-radius: 50%;
  background-color: #409eff;
}
</style>