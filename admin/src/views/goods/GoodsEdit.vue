<template>
  <div>
    <base-layout>
      <el-form :model="goodsForm" ref="goodsRef" :rules="goodsRule" label-width="100px">
        <el-form-item label="当前店铺">
          <strong>{{shopName}}</strong>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="goodsForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品详情">
          <el-input v-model="goodsForm.detail"></el-input>
        </el-form-item>
        <el-form-item label="上传商品图片">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :action="uploadURL"
            :headers="headers"
            :on-success="res => {
              this.goodsForm.imgUrl = res.url
            }"
          >
            <img v-if="goodsForm.imgUrl" :src="goodsForm.imgUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select v-model="goodsForm.category">
            <el-option
              v-for="item in goodsCateList"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品特点">
          <el-select v-model="goodsForm.feature">
            <el-option value="新品"></el-option>
            <el-option value="招牌"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="包装费">
          <el-input-number v-model="goodsForm.packing_fee" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item label="价格">
          <el-input-number v-model="goodsForm.price" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button @click="$router.go(-1)">取消</el-button>
        </el-form-item>
      </el-form>
    </base-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    id: { type: String }
  },
  data() {
    return {
      goodsForm: {
        name: '',
        shop: '',
        detail: '',
        imgUrl: '',
        category: '',
        feature: '',
        packing_fee: 0,
        price: 0
      },
      goodsCateList: [],
      goodsRule: {
        name: [{ required: true, message: '请填写商品名称', trigger: 'blur' }]
      },
      shopName: '',
      flag: false
    }
  },
  computed: {
    ...mapState({
      uploadURL: state => state.uploadURL,
      headers: state => state.headers
    })
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (from.path === '/goodsList') {
        vm.flag = true
        vm.getGoodsDetail()
      } else {
        vm.flag = true
        vm.getShop()
      }
    })
  },
  created() {
    this.getGoodsCate()
  },
  methods: {
    async getGoodsDetail() {
      const { data: res } = await this.$http.get(`admin/goods/${this.id}`)
      this.goodsForm = res.data
      this.goodsForm.category = res.data.category._id
      this.shopName = res.data.shop.name
    },
    handleAvatarSuccess() {},
    async getGoodsCate() {
      const { data: res } = await this.$http.get('admin/goods/category')
      this.goodsCateList = res.data
    },
    async getShop() {
      const { data: res } = await this.$http.get(`admin/shops/${this.id}`)
      this.shopName = res.data.name
    },
    save() {
      this.$refs.goodsRef.validate(async valid => {
        if (!valid) return false
        if (this.flag) {
          const { data: res } = await this.$http.put(
            `admin/goods/${this.id}`,
            this.goodsForm
          )
          this.$message.success(res.meta.message)
        } else {
          this.goodsForm.shop = this.shopId
          const { data: res } = await this.$http.post(
            'admin/goods',
            this.goodsForm
          )
          this.$message.success(res.meta.message)
        }
        this.$router.push('/goodsList')
      })
    }
  }
}
</script>

<style scoped>
</style>