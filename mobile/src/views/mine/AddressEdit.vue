<template>
  <div class="address-add">
    <van-sticky>
      <van-nav-bar title="新增地址" left-arrow @click-left="$router.go(-1)" />
    </van-sticky>
    <div class="address-body">
      <van-cell-group>
        <van-field v-model="form.name" label="联系人" colon />
        <van-cell>
          <template>
            <van-radio-group v-model="form.sex" direction="horizontal">
              <van-radio :name="true">先生</van-radio>
              <van-radio :name="false">女士</van-radio>
            </van-radio-group>
          </template>
        </van-cell>
        <van-field v-model="form.mobile" label="手机号" colon />
        <van-field v-model="form.address" label="收货地址" colon />
        <van-field v-model="form.address_detail" label="门牌号" colon />
      </van-cell-group>
      <div class="address-btn">
        <van-button @click="save" type="danger" round block>保存</van-button>
        <van-button v-if="addressId" @click="del" type="default" round block>删除</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    addressId: { type: String }
  },
  data() {
    return {
      form: {
        user: '',
        name: '',
        sex: true,
        mobile: '',
        address: '',
        address_detail: ''
      }
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  created() {
    this.addressId && this.getAddressData()
  },
  methods: {
    async getAddressData() {
      const { data: res } = await this.$http.get(`address/${this.addressId}`)
      if (res.meta.status === 200) {
        this.form = res.data
      }
    },
    async save() {
      if (this.addressId) {
        const { data: res } = await this.$http.put(
          `address/${this.addressId}`,
          this.form
        )
        if (res.meta.status === 200) {
          this.$toast.success(res.meta.message)
        }
      } else {
        this.form.user = this.userInfo._id
        const { data: res } = await this.$http.post('address', this.form)
        if (res.meta.status === 201) {
          this.$toast.success(res.meta.message)
        }
      }
      this.$router.go(-1)
    },
    del() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '确定要删除该地址吗'
        })
        .then(async () => {
          const { data: res } = await this.$http.delete(
            `address/${this.addressId}`
          )
          if (res.meta.status === 200) {
            this.$toast.success(res.meta.message)
            this.$router.go(-1)
          }
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
.address-add {
  min-height: 100%;
  background-color: #f4f4f4;
}
.address-body {
  padding: 12px;
}
.van-cell-group {
  border-radius: 8px;
  overflow: hidden;
}
.van-radio-group--horizontal {
  justify-content: center;
}
.address-btn {
  padding: 32px 0;
}
.van-button {
  margin-bottom: 12px;
}
</style>