<template>
  <div class="order">
    <div v-if="isLogin">
      <van-empty v-if="empty" description="暂时还没有订单" />
      <van-list v-else v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div v-for="item in orderList" :key="item._id" class="list-item">
          <van-cell
            :icon="item.shop.shop_img"
            :title="item.shop.name"
            size="large"
            is-link
            :to="`/shop/${item.shop._id}`"
          />
          <div class="item-body" @click="toOrderDetail(item._id)">
            <p v-for="goodsItem in item.goodsList" :key="goodsItem._id" class="item-body-p">
              <span>{{goodsItem.goods.name}}</span>
              <span class="color-text">x{{goodsItem.count}}</span>
            </p>
            <p class="item-body-p">
              <span class="color-text">{{item.createdAt | formatDate}}</span>
              <span>实付 ￥{{item.total}}</span>
            </p>
          </div>
          <div class="item-footer">
            <span v-if="item.is_pay" class="color-text">订单已完成</span>
            <span v-else class="color-text">订单已取消</span>
            <span class="item-footer-btn" @click="delOrder(item._id)">删除</span>
          </div>
        </div>
      </van-list>
    </div>
    <div v-else class="tips">
      <div class="iconfont icon-meiyoudingdan"></div>
      <div>登录后查看外卖订单</div>
      <van-button type="primary" size="small" @click="$router.push('/login')">立即登录</van-button>
    </div>
  </div>
</template>

<script>
import { getOrderList, delOrder } from '@/api/http'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      orderList: [],
      empty: false,
      loading: false,
      finished: false,
      queryForm: {
        userId: null,
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
      userInfo: state => state.userInfo
    })
  },
  watch: {
    orderList(val) {
      if (val.length === 0) {
        this.empty = true
      }
    }
  },
  methods: {
    async getOrderList() {
      this.queryForm.userId = this.userInfo._id
      const { data: res } = await getOrderList(this.queryForm)
      if (res.meta.status === 200) {
        this.queryForm.pageNum++
        this.orderList.push(...res.data.data)
        this.loading = false
        if (this.orderList.length >= res.data.total) {
          this.finished = true
        }
      }
    },
    onLoad() {
      this.getOrderList()
    },
    delOrder(id) {
      this.$dialog
        .confirm({
          message: '确认删除该订单？'
        })
        .then(async () => {
          const { data: res } = await delOrder(id)
          if (res.meta.status === 200) {
            this.$toast.success(res.meta.message)
            const index = this.orderList.findIndex(item => {
              return item._id === id
            })
            this.orderList.splice(index, 1)
          }
        })
        .catch(() => {})
    },
    toOrderDetail(id) {
      this.$router.push(`/orderDetail/${id}`)
    }
  }
}
</script>

<style scoped>
.order {
  min-height: 100%;
  background-color: #f4f4f4;
  padding: 12px 12px 50px;
  position: relative;
}
.tips {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.iconfont {
  font-size: 80px;
  color: #409eff;
}
.van-button {
  margin-top: 10px;
}
.list-item {
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
  background-color: #fff;
}
.list-item .van-icon__image {
  width: 24px;
  height: 24px;
}
.item-body {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #ebedf0;
}
.item-body-p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.item-body-p > span:first-child {
  max-width: 250px;
  word-break: break-all;
}
.item-footer {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-footer-btn {
  padding: 3px 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
}
.color-text {
  color: #999;
}
</style>