<template>
  <div class="my-submit-bar">
    <div v-show="showSheet && money.count !== 0" class="action-sheet">
      <div class="sheet-title">购物车</div>
      <div class="sheet-body">
        <div v-for="item in goodsData.goods" :key="item._id" class="sheet-item">
          <span class="sheet-item-name">{{item.name}}</span>
          <span>￥{{item.sum}}</span>
          <span>x{{item.selectedNum}}</span>
        </div>
        <div class="sheet-item">
          <span class="sheet-item-name">打包费</span>
          <span>￥{{money.packing_fee}}</span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="submit-bar">
      <div class="submit-shop_car" @click="showSheet = !showSheet">
        <div class="submit-shop_car-tag" v-show="money.count !== 0">{{money.count}}</div>
        <i class="iconfont icon-shop_car"></i>
      </div>
      <div class="submit-total">
        <div>
          <span>￥</span>
          <span class="submit-total-price">{{money.total}}</span>
        </div>
        <div>
          <span class="submit-total-fee">另需配送费￥{{shopDetail.delivery_fee}}</span>
        </div>
      </div>
      <div class="submit-btn">
        <div v-if="money.starting_price >= 0">差￥{{ money.starting_price }}起送</div>
        <div class="submit-btn-2" v-else @click="toSettle">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { add } from '../utils/operation'
export default {
  props: {
    shopId: { type: String, required: true }
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
      shopDetail: state => state.shopDetail,
      cartData: state => state.cartData
    }),
    goodsData() {
      if (this.cartData[this.shopId]) {
        return this.cartData[this.shopId]
      } else {
        return {
          count: 0,
          price: 0,
          packing_fee: 0,
          total: 0,
          starting_price: this.shopDetail.starting_price
        }
      }
    },
    money() {
      return {
        count: this.goodsData.count,
        price: this.goodsData.price,
        packing_fee: this.goodsData.packing_fee,
        total: add(this.goodsData.price, this.goodsData.packing_fee),
        starting_price: add(
          this.shopDetail.starting_price,
          -this.goodsData.price,
          -this.goodsData.packing_fee
        )
      }
    }
  },
  data() {
    return {
      showSheet: false
    }
  },
  methods: {
    toSettle() {
      if (this.isLogin) {
        this.$router.push(`/preview/${this.shopId}`)
      } else {
        this.$dialog
          .confirm({
            title: '提示',
            message: '您还没有登录',
            confirmButtonText: '去登录'
          })
          .then(() => {
            this.$router.push('/login')
          })
          .catch(() => {})
      }
    }
  }
}
</script>

<style scoped>
.my-submit-bar {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #3b3b3c;
  z-index: 1;
}
.action-sheet {
  position: absolute;
  width: 100%;
  bottom: 50px;
  background-color: #fff;
  z-index: 1;
}
.sheet-body {
  max-height: 250px;
  overflow: auto;
  padding: 10px 15px 15px;
}
.sheet-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid #e4e4e4;
}
.sheet-item-name {
  width: 200px;
  word-break: break-all;
}
.sheet-title {
  padding: 4px 15px;
  height: 30px;
  line-height: 25px;
  font-size: 12px;
  background-color: #fff1d0;
}
.submit-bar {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}
.submit-shop_car {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  background-color: #409eff;
  position: relative;
  top: -10px;
  margin: 0 10px;
  text-align: center;
}
.submit-shop_car-tag {
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: 40px;
  color: #fff;
  font-size: 12px;
  background-color: #fb4e44;
}
.submit-shop_car .iconfont {
  color: #fff;
  font-size: 30px;
}
.submit-total {
  flex: 1;
  color: #fff;
}
.submit-total-price {
  font-size: 24px;
}
.submit-total-fee {
  font-size: 12px;
  color: #999;
}
.submit-btn {
  width: 100px;
  line-height: 50px;
  text-align: center;
  color: #999;
}
.submit-btn-2 {
  font-weight: bold;
  color: #fff;
  background-color: #67c23a;
}
</style>