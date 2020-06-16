<template>
  <div class="address-list">
    <van-sticky>
      <van-nav-bar title="地址列表" left-arrow @click-left="$router.go(-1)" />
    </van-sticky>
    <div v-if="empty" class="list-empty">
      <img src="../../assets/empty_address.png" />
      <p>还没有添加收货地址</p>
    </div>
    <div v-else class="list-body">
      <van-cell
        v-for="item in addressList"
        :title="item.address + ' ' + item.address_detail"
        :key="item._id"
        @click="select(item)"
        center
      >
        <template #label>
          <span>{{item.name}}</span>
          <span v-if="item.sex">先生</span>
          <span v-else>女士</span>
          <span class="mobile">{{item.mobile}}</span>
        </template>
        <template #right-icon>
          <van-icon name="edit" size="20" @click="$router.push(`/addressEdit/${item._id}`)" />
        </template>
      </van-cell>
    </div>
    <div class="list-btn">
      <van-button type="danger" round block @click="$router.push('/addressEdit')">新增地址</van-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    shopId: { type: String }
  },
  data() {
    return {
      addressList: [],
      empty: false
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  created() {
    this.getAddressList()
  },
  methods: {
    async getAddressList() {
      const { data: res } = await this.$http.get(
        `/address/list/${this.userInfo._id}`
      )
      if (res.meta.status === 200) {
        this.addressList = res.data
        if (res.data.length === 0) {
          this.empty = true
        }
      }
    },
    select(item) {
      if(this.shopId) {
        this.$store.commit('saveDeliveryPoi', item)
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style scoped>
.address-list {
  min-height: 100%;
  position: relative;
  background-color: #f4f4f4;
  padding-bottom: 50px;
}
.list-empty {
  margin-top: 15vh;
  text-align: center;
}
.list-empty img {
  width: 111px;
}
.list-body {
  padding: 12px;
}
.van-cell {
  border-radius: 8px;
  margin-bottom: 12px;
}
.mobile {
  margin-left: 10px;
}
.list-btn {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 0 12px;
}
</style>