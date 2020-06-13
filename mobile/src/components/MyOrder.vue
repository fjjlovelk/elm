<template>
  <div class="my-order">
    <div class="left-nav">
      <a
        class="nav-item"
        :class="goodsCateId===item._id?'nav-item-active':''"
        v-for="item in goodsCateList"
        :key="item._id"
        @click="selectGoodsCate(item)"
      >{{item.name}}</a>
    </div>
    <div class="container">
      <div class="goods-body">
        <div
          v-for="item in goodsList"
          :key="item._id"
          :id="'anchor-' + item.point"
          class="goods-item"
        >
          <img :src="item.imgUrl" />
          <div class="goods-item-tip">
            <h4 class="goods-item-name">{{item.name}}</h4>
            <div class="goods-item-detail">{{item.detail}}</div>
            <div class="goods-item-price-btn">
              <span class="goods-item-price">￥{{item.price}}</span>
              <div class="goods-item-btn">
                <i v-if="item.selectedNum !== 0" class="iconfont icon-jian" @click="delGoods(item)"></i>
                <span v-if="item.selectedNum !== 0" class="goods-item-num">{{item.selectedNum}}</span>
                <i class="iconfont icon-tianjia" @click="addGoods(item)"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    id: { type: String, required: true }
  },
  data() {
    return {
      goodsCateList: [],
      goodsList: [],
      goodsCateId: '',
      // 添加进购物车的商品
      goods: []
    }
  },
  computed: {
    ...mapState({
      cart_data: state => state.cart_data
    })
  },
  created() {
    this.getGoods()
  },
  methods: {
    async getGoods() {
      const { data: res } = await this.$http.get(`goods/category/${this.id}`)
      if (res.meta.status === 200) {
        this.goodsCateList = res.data
        if (this.goodsCateList.length !== 0) {
          this.goodsCateId = this.goodsCateList[0]._id
        }
        this.goodsCateList.map(item => {
          item.children.map((i, index) => {
            if (index === 0) {
              this.$set(i, 'point', i.category)
            }
            this.$set(i, 'selectedNum', 0)
            if (this.cart_data.hasOwnProperty(this.id)) {
              this.goods = this.cart_data[this.id]
              this.goods.map(goods => {
                if (goods._id === i._id) {
                  i.selectedNum = goods.selectedNum
                }
              })
            }
          })
          this.goodsList.push(...item.children)
        })
      }
    },
    selectGoodsCate(item) {
      this.goodsCateId = item._id
      this.$el.querySelector('#anchor-' + item._id).scrollIntoView()
    },
    addGoods(item) {
      const index = this.goods.indexOf(item)
      item.selectedNum++
      if (index === -1) {
        this.goods.push(item)
      } else {
        this.goods[index].selectedNum = item.selectedNum
      }
      const goodsData = {
        [this.id]: this.goods
      }
      this.$store.commit('saveCart_data', goodsData)
    },
    delGoods(item) {
      const index = this.goods.findIndex(i => {
        return i._id === item._id
      })
      item.selectedNum--
      if (item.selectedNum === 0) {
        this.goods.splice(index, 1)
      } else {
        this.goods[index].selectedNum = item.selectedNum
      }
      const goodsData = {
        [this.id]: this.goods
      }
      this.$store.commit('saveCart_data', goodsData)
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
  background-color: #f5f5f5;
  overflow: auto;
  margin-bottom: 50px;
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
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
}
.goods-item {
  display: flex;
  padding: 0 10px 22px 5px;
}
.goods-item img {
  width: 75px;
  height: 75px;
}
.goods-item-tip {
  min-width: 0;
  width: 100%;
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
  color: #409eff;
}
.goods-item-num {
  padding: 0 10px;
}
</style>