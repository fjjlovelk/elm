<template>
  <div>
    <base-layout>
      <el-form :model="shopForm" ref="shopRef" :rules="shopRule" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="店铺名称" prop="name">
              <el-input v-model="shopForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系电话" prop="telphone">
              <el-input v-model.number="shopForm.telphone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="详细地址" prop="address">
              <el-input v-model="shopForm.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="店铺简介">
              <el-input v-model="shopForm.description" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="店铺标语">
              <el-input v-model="shopForm.slogan" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="营业时间">
              <el-time-select
                placeholder="起始时间"
                v-model="shopForm.open_time"
                :picker-options="{ start: '00:00', step: '00:30', end: '24:00' }"
              ></el-time-select>
              <el-time-select
                placeholder="结束时间"
                v-model="shopForm.close_time"
                :picker-options="{ start: '00:00', step: '00:30', end: '24:00', minTime: shopForm.open_time }"
              ></el-time-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="店铺分类">
              <el-cascader
                v-model="shopForm.category"
                :options="categoryList"
                :props="{ expandTrigger: 'hover', value: '_id', label: 'name' }"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="配送费">
              <el-input-number v-model="shopForm.delivery_fee" :min="0"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="起送价">
              <el-input-number v-model="shopForm.starting_price" :min="0"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="店铺特点">
              <el-switch v-model="shopForm.feature.is_brand" active-text="品牌保证"></el-switch>
              <el-switch v-model="shopForm.feature.is_delivery" active-text="蜂鸟专送"></el-switch>
              <el-switch v-model="shopForm.feature.is_new" active-text="新开店铺"></el-switch>
              <el-switch v-model="shopForm.feature.is_ensure" active-text="外卖保"></el-switch>
              <el-switch v-model="shopForm.feature.is_ontime" active-text="准时达"></el-switch>
              <el-switch v-model="shopForm.feature.is_bill" active-text="开发票"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="上传店铺头像">
              <el-upload
                class="avatar-uploader"
                :show-file-list="false"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-success="handleShopImg"
              >
                <img v-if="shopForm.shop_img" :src="shopForm.shop_img" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="上传营业执照">
              <el-upload
                class="avatar-uploader"
                :show-file-list="false"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-success="handleShopImg"
              >
                <img v-if="shopForm.license_img" :src="shopForm.license_img" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="上传餐饮服务许可证">
              <el-upload
                class="avatar-uploader"
                :show-file-list="false"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-success="handleShopImg"
              >
                <img v-if="shopForm.service_img" :src="shopForm.service_img" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </base-layout>
  </div>
</template>

<script>
export default {
  data() {
    var checkTelphone = (rule, val, cb) => {
      const reg = /^1[3456789]\d{9}$/
      if (reg.test(val)) return cb()
      cb(new Error('请输入正确的手机号'))
    }
    return {
      shopForm: {
        name: '',
        telphone: '',
        address: '',
        description: '',
        slogan: '', // 标语
        open_time: '',
        close_time: '',
        category: null,
        delivery_fee: 0, // 配送费
        starting_price: 0, // 起送价
        feature: {
          is_brand: false,
          is_delivery: false,
          is_new: false,
          is_ensure: false,
          is_ontime: false,
          is_bill: false
        },
        shop_img: '', // 店铺图片
        license_img: '', // 营业执照
        service_img: '' // 餐饮服务许可证
      },
      categoryList: [],
      shopRule: {
        name: [{ required: true, message: '请填写商家名称', trigger: 'blur' }],
        telphone: [
          { required: true, message: '请填写联系电话', trigger: 'blur' },
          { validator: checkTelphone, trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请填写详细地址', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getCategoryList()
  },
  methods: {
    // 获取分类列表
    async getCategoryList() {
      const { data: res } = await this.$http.get('admin/shops/category')
      this.categoryList = res.data
    },
    handleShopImg() {},
    submit() {
      this.$refs.shopRef.validate(async valid => {
        if (!valid) return false
        if (this.shopForm.category) {
          this.shopForm.category = this.shopForm.category[1]
        }
        const { data: res } = await this.$http.post(
          'admin/shops',
          this.shopForm
        )
        this.$message.success(res.meta.message)
        this.$router.push('/shopList')
      })
    }
  }
}
</script>

<style scoped>
.el-form {
  width: 80%;
  margin: 0 auto;
}
.el-date-editor + .el-date-editor {
  margin-left: 10px;
}
.el-switch + .el-switch {
  margin-left: 30px;
}
</style>