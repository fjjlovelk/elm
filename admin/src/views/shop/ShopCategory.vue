<template>
  <div>
    <base-layout>
      <el-button type="primary" @click="addDialog = true">添加分类</el-button>
      <el-table :data="categoryList" border>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="分类名称" prop="name"></el-table-column>
        <el-table-column label="分类级别"></el-table-column>
        <el-table-column label="操作" width="200px">
          <template #default="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit">编辑</el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="delCategory(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </base-layout>
    <el-dialog title="添加分类" :visible="addDialog" @close="closeDialog">
      <el-form :model="addForm" label-width="100px" ref="addRef" :rules="addRule">
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类" prop="parent">
          <el-select v-model="addForm.parent" placeholder="如果不选择父级分类，则该分类为一级分类">
            <el-option
              v-for="item in categoryList"
              :key="item._id"
              :value="item._id"
              :label="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="saveCategory">确定</el-button>
        <el-button @click="closeDialog">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addDialog: false,
      categoryList: [],
      addForm: {
        name: '',
        parent: null
      },
      addRule: {
        name: [{ required: true, message: '请输入分类名称', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getCategoryList()
  },
  methods: {
    closeDialog() {
      this.addDialog = false
      this.$refs.addRef.resetFields()
    },

    async getCategoryList() {
      const { data: res } = await this.$http.get('admin/shops/category')
      this.categoryList = res.data
      console.log(res)
    },

    async saveCategory() {
      const { data: res } = await this.$http.post(
        'admin/shops/category',
        this.addForm
      )
      this.getCategoryList()
      this.closeDialog()
    },

    delCategory(row) {
      this.$confirm(`确定要删除分类 ${row.name} 吗`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.$http.delete(`admin/shops/category/${row._id}`)
          this.$message.success('删除分类成功')
          this.getCategoryList()
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
.el-select {
  width: 100%;
}
</style>