<template>
  <div class="my-submit-bar">
    <!-- <transition name="van-slide-up"> -->
    <div v-show="showSheet" class="action-sheet">1111</div>
    <!-- </transition> -->
    <div class="submit-shop_car" @click="showSheet = !showSheet">
      <div class="submit-shop_car-tag" v-show="money.count !== 0">{{money.count}}</div>
      <i class="iconfont icon-shop_car"></i>
    </div>
    <div class="submit-total">
      <div>
        <span>￥</span>
        <span class="submit-total-price">{{money.price + money.packing_fee}}</span>
      </div>
      <div>
        <span class="submit-total-fee">另需配送费￥{{fee}}</span>
      </div>
    </div>
    <div class="submit-btn">去结算</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    id: { type: String, required: true },
    fee: { type: Number, required: true, default: 0 }
  },
  computed: {
    ...mapState({
      cart_data: state => state.cart_data
    }),
    money() {
      if (this.cart_data[this.id]) {
        return {
          count: this.cart_data[this.id].count,
          price: this.cart_data[this.id].price,
          packing_fee: this.cart_data[this.id].packing_fee
        }
      } else {
        return {
          count: 0,
          price: 0,
          packing_fee: 0
        }
      }
    }
  },
  data() {
    return {
      showSheet: false
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
  display: flex;
  justify-content: space-between;
}
.action-sheet {
  position: absolute;
  width: 100%;
  bottom: 50px;
  background-color: #fff1d0;
  padding-bottom: 10px;
}
.submit-shop_car {
  width: 50px;
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
  color: #fff;
  font-weight: bold;
  background-color: #67c23a;
  text-align: center;
}
</style>