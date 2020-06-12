<template>
  <div class="my-order">
    <div class="left-nav">
      <div
        class="nav-item"
        :class="goodsCateId===item._id?'nav-item-active':''"
        v-for="item in goodsCateList"
        :key="item._id"
        @click="selectGoodsCate(item._id)"
      >{{item.name}}</div>
    </div>
    <div class="container">
      <div v-for="item in goodsList" :key="item._id" class="goods-item">
        <img :src="item.imgUrl" />
        <div class="goods-item-tip">
          <h4 class="goods-item-name">{{item.name}}</h4>
          <div class="goods-item-detail">{{item.detail}}</div>
          <div class="goods-item-price-btn">
            <span class="goods-item-price">￥{{item.price}}</span>
            <div class="goods-item-btn">
              <i class="iconfont icon-jian"></i>
              <span class="goods-item-num">1</span>
              <i class="iconfont icon-tianjia"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true }
  },
  data() {
    return {
      goodsCateList: [],
      goodsCateId: '',
      goodsList: []
    }
  },
  created() {
    this.getGoodsCate()
  },
  methods: {
    async getGoodsCate() {
      const { data: res } = await this.$http.get(`goods/category/${this.id}`)
      if (res.meta.status === 200) {
        this.goodsCateList = res.data
        this.goodsCateId = this.goodsCateList[0]._id
        this.getGoods(this.goodsCateId)
      }
    },
    async getGoods(id) {
      const { data: res } = await this.$http.get(`goods/${id}`)
      if (res.meta.status === 200) {
        this.goodsList = res.data
      }
    },
    async selectGoodsCate(id) {
      this.goodsCateId = id
      this.getGoods(id)
    }
  }
}
</script>

<style scoped>
.my-order {
  display: flex;
  height: 100%;
}
.left-nav {
  width: 80px;
  height: max-content;
  background-color: #f5f5f5;
  margin-bottom: 70px;
}
.nav-item {
  width: 100%;
  min-height: 50px;
  display: inline-block;
  padding: 9px 10px 22px;
  word-break: break-all;
  font-size: 13px;
  color: #666;
}
.nav-item-active {
  background-color: #fff;
}
.container {
  width: calc(100% - 80px);
}
.goods-item {
  display: flex;
  padding: 0 0 22px 5px;
}
.goods-item img {
  width: 75px;
  height: 75px;
}
.goods-item-tip {
  width: calc(100% - 75px);
  position: relative;
}
.goods-item-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-item-detail {
  font-size: 12px;
  color: #666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 2px 0 5px 2px;
}
.goods-item-price-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
}
.goods-item-price {
  font-size: 18px;
  color: #fb4e44;
}
.goods-item-btn .iconfont {
  font-size: 20px;
  color: #409EFF;
}
.goods-item-num {
  padding: 0 10px;
}
</style>