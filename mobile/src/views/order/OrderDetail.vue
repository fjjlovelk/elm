<template>
  <div class="order-detail">
    <van-sticky>
      <van-nav-bar title="订单详情" left-arrow @click-left="$router.go(-1)" />
    </van-sticky>
    <div class="container">
      <van-cell-group>
        <van-cell :title="shop.name" is-link :to="`/shop/${shop._id}`" />
        <div>
          <van-cell v-for="item in goodsList" :title="item.goods.name" :key="item._id" center>
            <template>
              <div class="goods-value">
                <span>x{{item.count}}</span>
                <span>￥{{item.sum}}</span>
              </div>
            </template>
          </van-cell>
        </div>
        <van-cell title="打包费" :value="'￥' + orderData.packing_fee" />
        <van-cell title="配送费" :value="'￥' + shop.delivery_fee" />
        <van-cell title=" " :value="'总计：￥' + orderData.total" />
      </van-cell-group>
      <van-cell-group>
        <van-field
          label="联系人"
          v-if="address.sex"
          :value="address.name + '(先生)' + ' ' + address.mobile"
          readonly
        />
        <van-field
          label="联系人"
          v-else
          :value="address.name + '(女士)' + ' ' + address.mobile"
          readonly
        />
        <van-field
          label="配送地址"
          :value="address.address + '(' + address.address_detail + ')'"
          readonly
        />
        <van-field label="订单编号" :value="orderId" readonly />
        <van-field label="下单时间" :value="orderData.createdAt" readonly />
        <van-field label="餐具数量" :value="orderData.tableware_num" readonly />
        <van-field label="备注" :value="orderData.note" readonly />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderId: { type: String, required: true }
  },
  data() {
    return {
      orderData: {},
      address: {},
      shop: {},
      goodsList: []
    }
  },
  created() {
    this.getOrderData()
  },
  methods: {
    async getOrderData() {
      const { data: res } = await this.$http.get(`orders/${this.orderId}`)
      if (res.meta.status === 200) {
        console.log(res)
        this.orderData = res.data
        this.address = res.data.address
        this.shop = res.data.shop
        this.goodsList = res.data.goodsList
      }
    }
  }
}
</script>

<style scoped>
.order-detail {
  min-height: 100%;
}
.container {
  background-color: #f4f4f4;
  padding: 12px;
}
.van-cell-group {
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
}
.goods-value {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
}
</style>