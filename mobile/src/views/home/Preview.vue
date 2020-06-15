<template>
  <div class="preview">
    <van-sticky>
      <van-nav-bar title="提交订单" left-arrow @click-left="$router.go(-1)" />
    </van-sticky>
    <div class="card">
      <van-cell title="选择收货地址" is-link />
    </div>
    <div class="card">
      <van-cell :title="shopDetail.name" :icon="shopDetail.shop_img">
        <template>
          <span v-if="shopDetail.feature.is_delivery">蜂鸟专送</span>
          <span v-else>商家配送</span>
        </template>
      </van-cell>
      <div class="goods-cell">
        <van-cell
          v-for="item in goodsData.goods"
          :title="item.name"
          :icon="item.imgUrl"
          :value="'￥' + item.price"
          :label="'x' + item.selectedNum"
        />
      </div>
      <van-cell title="打包费" :value="'￥' + goodsData.packing_fee" />
      <van-cell title="配送费" :value="'￥' + shopDetail.delivery_fee" />
    </div>
    <div class="card">
      <van-cell title="餐具数量">
        <template>
          <van-stepper
            v-model="order.tableware_num"
            min="0"
            theme="round"
            button-size="22"
            disable-input
          />
        </template>
      </van-cell>
      <van-cell title="备注" is-link :value="order.note" @click="openNote" />
      <van-cell v-if="!shopDetail.feature.is_bill" title="发票">
        <van-switch v-model="order.is_bill" size="22" active-color="#409EFF" />
      </van-cell>
      <van-cell v-else title="发票" value="暂不支持开发票" />
    </div>
    <van-popup v-model="isNote" position="bottom">
      <div class="note">
        <div class="note-btn">
          <span @click="isNote = false">取消</span>
          <span @click="addNote">完成</span>
        </div>
        <van-field
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          maxlength="50"
          show-word-limit
          placeholder="请输入留言"
        />
      </div>
    </van-popup>
    <van-submit-bar :price="total * 100" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { add } from '../../utils/operation'
export default {
  props: {
    id: { type: String, required: true }
  },
  data() {
    return {
      order: {
        user: '',
        address: '',
        shop: '',
        goods: [],
        packing_fee: 0,
        total: 0,
        tableware_num: 0,
        note: '',
        is_bill: false,
        is_pay: false
      },
      isNote: false,
      message: ''
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      shopDetail: state => state.shopDetail,
      cartData: state => state.cartData
    }),
    goodsData() {
      return this.cartData[this.id]
    },
    total() {
      return add(this.goodsData.packing_fee, this.goodsData.price)
    }
  },
  methods: {
    openNote() {
      this.message = this.order.note
      this.isNote = true
    },
    addNote() {
      this.order.note = this.message
      this.isNote = false
    },
    onSubmit() {
      this.order.user = this.userInfo._id
      this.order.shop = this.id
      this.order.packing_fee = this.goodsData.packing_fee
      this.order.total = this.total
      this.goodsData.goods.map(item => {
        this.order.goods.push({
          id: item._id,
          count: item.selectedNum
        })
      })
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确认付款'
        })
        .then(() => {
          this.order.is_pay = true
          console.log(this.order)
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style scoped>
.preview {
  min-height: 100%;
  background-color: #f4f4f4;
  padding-bottom: 50px;
}
.card {
  margin: 10px;
  padding: 0 10px;
  background-color: #fff;
}
.goods-cell .van-icon__image {
  width: 55px;
  height: 55px;
}
.note {
  padding: 10px 10px 40px;
}
.note-btn {
  color: #333;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.note .van-cell {
  background-color: #FAFAFA;
  padding: 10px 10px;
}
</style>