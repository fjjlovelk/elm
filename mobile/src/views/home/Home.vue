<template>
  <div class="home">
    <van-sticky>
      <van-notice-bar color="#409EFF" background="#fff" left-icon="location">京都酒家</van-notice-bar>
      <van-search
        v-model="queryForm.query"
        shape="round"
        placeholder="请输入搜索关键词"
        input-align="center"
        @search="onSearch"
        @clear="onSearch"
      />
    </van-sticky>
    <van-grid :border="false">
      <van-grid-item
        v-for="item in shopCate"
        :to="`/shopCate/${item._id}`"
        :icon="item.icon"
        :text="item.name"
        :key="item._id"
      />
    </van-grid>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-card
        v-for="item in shopList"
        :key="item._id"
        :desc="item.description"
        :title="item.name"
        :thumb="item.shop_img"
        @click="selectShop(item._id)"
      >
        <template #tags>
          <span>起送 ￥{{item.starting_price}}</span>|
          <span>配送 ￥{{item.delivery_fee}}</span>
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script>
import { getShopCate, getShopList } from '@/api/http'
export default {
  data() {
    return {
      shopCate: [],
      shopList: [],
      loading: false,
      finished: false,
      queryForm: {
        query: '',
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.getShopCate()
  },
  methods: {
    // 获取商家一级分类
    async getShopCate() {
      const { data: res } = await getShopCate()
      if (res.meta.status === 200) {
        this.shopCate = res.data
      }
    },
    // 获取商家列表
    async getShopList() {
      const { data: res } = await getShopList(this.queryForm)
      if (res.meta.status === 200) {
        this.queryForm.pageNum++
        this.shopList.push(...res.data.data)
        this.loading = false
        if (this.shopList.length >= res.data.total) {
          this.finished = true
        }
      }
    },
    // 搜索商家
    onSearch() {
      this.shopList = []
      this.queryForm.pageNum = 1
      this.getShopList()
    },
    // 商家卡片加载
    onLoad() {
      this.getShopList()
    },
    // 点击卡片进入商家
    selectShop(id) {
      this.$router.push(`/shop/${id}`)
    }
  }
}
</script>

<style scoped>
.home {
  padding: 10px 10px 0;
}
.home /deep/ .van-sticky--fixed {
  left: 10px;
  right: 10px;
  background-color: #fff;
}
.van-notice-bar {
  width: 50%;
  padding: 0;
  font-size: 16px;
}
.van-search {
  padding: 0;
  margin: 10px 0;
}
.van-list {
  padding-bottom: 50px;
}
.van-card__thumb {
  width: 75px;
  height: 60px;
}
.van-card__title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>