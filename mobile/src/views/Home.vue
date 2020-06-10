<template>
  <div>
    <van-notice-bar color="#409EFF" background="#fff" left-icon="location">京都酒家</van-notice-bar>
    <van-search
      v-model="queryForm.query"
      shape="round"
      placeholder="请输入搜索关键词"
      input-align="center"
    />
    <van-grid :border="false">
      <van-grid-item
        v-for="item in shopCate"
        @click="getShopSubCate(item._id)"
        :icon="item.icon"
        :text="item.name"
        :key="item._id"
      />
    </van-grid>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-card
        v-for="item in shopList"
        :key="item._id"
        :desc="item.slogan"
        :title="item.name"
        :thumb="item.shop_img"
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
    async getShopCate() {
      const { data: res } = await this.$http.get('shops/category')
      if (res.meta.status === 200) {
        this.shopCate = res.data
      }
    },
    async getShopSubCate(id) {
      const { data: res } = await this.$http.get('shops/subCategory', {
        params: { id }
      })
      console.log(res)
    },
    async onLoad() {
      const { data: res } = await this.$http.get('shops', {
        params: this.queryForm
      })
      if (res.meta.status === 200) {
        this.shopList = res.data.data
        this.loading = false
        if (this.shopList.length >= res.data.total) {
          this.finished = true
        }
      }
      console.log(res)
    }
  }
}
</script>

<style scoped>
.van-notice-bar {
  width: 50%;
  padding: 0;
  font-size: 16px;
}
.van-search {
  padding: 0;
  margin: 10px 0;
}
.van-card__thumb {
  width: 75px;
  height: 60px;
}
.van-card__title {
  font-size: 16px;
  font-weight: bold;
}
</style>