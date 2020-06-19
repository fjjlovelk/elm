<template>
  <div>
    <van-sticky>
      <van-nav-bar left-arrow @click-left="$router.push('/home')" />
    </van-sticky>
    <van-tabs sticky offset-top="46" @change="tabClick">
      <van-tab v-for="item in subCateList" :name="item._id" :title="item.name" :key="item._id">
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
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  props: {
    shopCateId: { type: String, required: true }
  },
  data() {
    return {
      subCateList: [],
      shopList: [],
      loading: false,
      finished: false,
      queryForm: {
        subCateId: '',
        query: '',
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.getSubCate()
  },
  methods: {
    async getSubCate() {
      const { data: res } = await this.$http.get('shops/subCategory', {
        params: { id: this.shopCateId }
      })
      if (res.meta.status === 200) {
        this.subCateList = res.data
        this.queryForm.subCateId = res.data[0]._id
      }
    },
    // 获取商家列表
    async getShop() {
      const { data: res } = await this.$http.get('shops', {
        params: this.queryForm
      })
      if (res.meta.status === 200) {
        this.queryForm.pageNum++
        this.shopList.push(...res.data.data)
        this.loading = false
        if (this.shopList.length >= res.data.total) {
          this.finished = true
        }
      }
    },
    // 点击标签切换二级分类
    tabClick(id) {
      this.shopList = []
      this.queryForm.pageNum = 1
      this.queryForm.subCateId = id
      this.getShop()
    },
    // 商家卡片加载
    onLoad() {
      this.getShop()
    },
    // 点击卡片进入商家
    selectShop(id) {
      this.$router.push(`/shop/${id}`)
    }
  }
}
</script>

<style scoped>
.van-search__content {
  margin-left: 10px;
}
.van-list {
  padding: 12px 12px 0;
}
.van-card {
  border-radius: 8px;
  overflow: hidden;
}
</style>