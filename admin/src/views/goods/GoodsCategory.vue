<template>
  <div>
    <base-layout>
      <el-button type="primary" @click="cateDialog = true">添加分类</el-button>
      <el-table :data="cateList" border>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="描述" prop="description"></el-table-column>
        <el-table-column label="操作" width="100px">
          <template #default="scope">
            <el-button type="danger" size="mini" @click="delCate(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </base-layout>
    <el-dialog title="添加商品分类" :visible="cateDialog" @close="closeDialog">
      <el-form :model="cateForm" ref="goodsCateRef" :rules="goodsCateRule" label-width="100px">
        <el-form-item label="商品种类" prop="name">
          <el-input v-model="cateForm.name"></el-input>
        </el-form-item>
        <el-form-item label="种类描述" prop="description">
          <el-input v-model="cateForm.description"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="saveCate">确定</el-button>
        <el-button @click="cateDialog = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cateForm: {
        name: '',
        description: ''
      },
      cateList: [],
      cateDialog: false,
      goodsCateRule: {
        name: [
          { required: true, message: '请输入商品种类名称', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    async getCateList() {
      const { data: res } = await this.$http.get('goods/category')
      this.cateList = res.data
    },
    closeDialog() {
      this.cateDialog = false
      this.$refs.goodsCateRef.resetFields()
    },
    saveCate() {
      this.$refs.goodsCateRef.validate(async valid => {
        if (!valid) return false
        const { data: res } = await this.$http.post(
          'goods/category',
          this.cateForm
        )
        this.cateDialog = false
        this.$message.success(res.meta.message)
        this.getCateList()
      })
    },
    delCate(row) {
      this.$confirm(`确定删除商品分类 ${row.name} 吗`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const { data: res } = await this.$http.delete(
            `goods/category/${row._id}`
          )
          this.$message.success(res.meta.message)
          this.getCateList()
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
.el-table {
  margin-top: 15px;
}
</style>