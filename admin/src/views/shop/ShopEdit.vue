<template>
  <div>
    <base-layout>
      <el-form :model="shopForm" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="店铺名称">
              <el-input v-model="shopForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系电话">
              <el-input v-model="shopForm.telphone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="详细地址">
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
              <el-select v-model="shopForm.category">
                <el-option v-for="item in 5" :key="item" :value="item"></el-option>
              </el-select>
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
          <el-button type="primary">立即创建</el-button>
        </el-form-item>
      </el-form>
    </base-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopForm: {
        name: '',
        address: '',
        telphone: '',
        description: '',
        slogan: '', // 标语
        category: '',
        feature: {
          is_brand: false,
          is_delivery: false,
          is_new: false,
          is_ensure: false,
          is_ontime: false,
          is_bill: false
        },
        delivery_fee: '', // 配送费
        starting_price: '', // 起送价
        open_time: '',
        close_time: '',
        shop_img: '', // 店铺图片
        license_img: '', // 营业执照
        service_img: '' // 餐饮服务许可证
      }
    }
  },
  methods: {
    handleShopImg() {

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