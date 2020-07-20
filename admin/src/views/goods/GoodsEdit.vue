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
        <el-form-item label="添加商品分类">
          <el-input v-model.trim="goodsCateForm.name">
            <el-button slot="prepend" @click="addGoodsCate">确定</el-button>
          </el-input>
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
          <el-button
            type="text"
            @click="delGoodsCate"
            style="margin-left: 10px; color: red"
          >点此删除选中分类</el-button>
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
import {
  getShopDetail,
  getGoodsDetail,
  postGoods,
  putGoods,
  getGoodsCate,
  postGoodsCate,
  delGoodsCate
} from '@/api/http'
import { mapState } from 'vuex'
export default {
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
      goodsCateForm: {
        name: '',
        shop: ''
      },
      goodsCateList: [],
      goodsRule: {
        name: [{ required: true, message: '请填写商品名称', trigger: 'blur' }]
      },
      shopName: '',
      flag: false,
      goodsId: null,
      shopId: null
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
      vm.shopId = vm.$route.query.shopId
      if (from.path === '/goodsList') {
        vm.flag = true
        vm.goodsId = vm.$route.query.goodsId
        vm.getGoodsDetail()
      } else {
        vm.flag = false
        vm.getShop()
      }
      vm.getGoodsCate()
    })
  },
  methods: {
    async getGoodsDetail() {
      const { data: res } = await getGoodsDetail(this.goodsId)
      this.goodsForm = res.data
      this.shopName = res.data.shop.name
      this.goodsForm.category = res.data.category._id
    },
    async getGoodsCate() {
      const { data: res } = await getGoodsCate(this.shopId)
      this.goodsCateList = res.data
    },
    async getShop() {
      const { data: res } = await getShopDetail(this.shopId)
      this.shopName = res.data.name
    },
    // 添加商品分类
    async addGoodsCate() {
      if (this.goodsCateForm.name === '') return
      this.goodsCateForm.shop = this.shopId
      const { data: res } = await postGoodsCate(this.goodsCateForm)
      if (res.meta.status === 201) {
        this.$message.success(res.meta.message)
        this.goodsCateForm.name = ''
        this.getGoodsCate()
      }
    },
    // 删除商品分类
    delGoodsCate() {
      if (this.goodsForm.category === '') return
      this.$confirm('确定删除该商品分类吗', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const { data: res } = await delGoodsCate(this.goodsForm.category)
          if (res.meta.status === 200) {
            this.$message.success(res.meta.message)
            this.goodsForm.category = ''
            this.getGoodsCate()
          }
        })
        .catch(() => {})
    },
    save() {
      this.$refs.goodsRef.validate(async valid => {
        if (!valid) return false
        if (this.flag) {
          const { data: res } = await putGoods(this.goodsId, this.goodsForm)
          this.$message.success(res.meta.message)
        } else {
          this.goodsForm.shop = this.shopId
          const { data: res } = await postGoods(this.goodsForm)
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