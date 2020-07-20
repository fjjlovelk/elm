<template>
  <div>
    <base-layout>
      <el-button type="primary" @click="cateDialog = true">添加一级分类</el-button>
      <el-button type="primary" @click="subCateDialog = true">添加二级分类</el-button>
      <el-table
        :data="categoryList"
        row-key="_id"
        :tree-props="{children: 'children'}"
        border
        highlight-current-row
        max-height="840px"
      >
        <el-table-column label="分类名称" prop="name"></el-table-column>
        <el-table-column label="分类级别">
          <template #default="scope">
            <el-tag v-if="scope.row.level === 1">一级</el-tag>
            <el-tag v-else type="warning">二级</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px">
          <template #default="scope">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="editCategory(scope.row)"
            >编辑</el-button>
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

    <el-dialog
      :title="cateId?'修改一级分类':'添加一级分类'"
      :visible="cateDialog"
      @close="closeCateDialog"
      @closed="dialogClosed"
    >
      <el-form :model="cateForm" label-width="100px" ref="cateRef" :rules="cateRule">
        <el-form-item label="图标" prop="icon">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :action="uploadURL"
            :headers="headers"
            :on-success="res => {
              this.cateForm.icon = res.url
            }"
          >
            <img v-if="cateForm.icon" :src="cateForm.icon" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="分类名称" prop="name">
          <el-input v-model.trim="cateForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="saveCate">确定</el-button>
        <el-button @click="cateDialog = false">取消</el-button>
      </div>
    </el-dialog>

    <el-dialog
      :title="cateId?'修改二级分类':'添加二级分类'"
      :visible="subCateDialog"
      @close="closeSubCateDialog"
      @closed="dialogClosed"
    >
      <el-form :model="subCateForm" label-width="100px" ref="subCateRef" :rules="subCateRule">
        <el-form-item label="父级分类" prop="parent">
          <el-select v-model="subCateForm.parent">
            <el-option
              v-for="item in categoryList"
              :key="item._id"
              :value="item._id"
              :label="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称" prop="name">
          <el-input v-model.trim="subCateForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="saveSubCate">确定</el-button>
        <el-button @click="subCateDialog = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getCategoryList,
  postCategory,
  putCategory,
  delCategory,
  postSubCate,
  putSubCate,
  delSubCate
} from '@/api/http'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      cateDialog: false,
      subCateDialog: false,
      categoryList: [],
      cateForm: {
        icon: '',
        name: ''
      },
      cateRule: {
        icon: [{ required: true }],
        name: [{ required: true, message: '请输入分类名称', trigger: 'blur' }]
      },
      subCateForm: {
        name: '',
        parent: null
      },
      subCateRule: {
        name: [{ required: true, message: '请输入分类名称', trigger: 'blur' }],
        parent: [
          { required: true, message: '请选择父级分类', trigger: 'change' }
        ]
      },
      cateId: null
    }
  },
  computed: {
    ...mapState({
      uploadURL: state => state.uploadURL,
      headers: state => state.headers
    })
  },
  created() {
    this.getCategoryList()
  },
  methods: {
    // 关闭一级分类弹框
    closeCateDialog() {
      this.cateDialog = false
      this.$refs.cateRef.resetFields()
      Object.assign(this.cateForm, this.$options.data().cateForm)
    },
    // 关闭二级分类弹框
    closeSubCateDialog() {
      this.subCateDialog = false
      this.$refs.subCateRef.resetFields()
      Object.assign(this.subCateForm, this.$options.data().subCateForm)
    },
    dialogClosed() {
      this.cateId = null
    },
    // 获取分类列表
    async getCategoryList() {
      const { data: res } = await getCategoryList()
      this.categoryList = res.data
    },
    // 确定添加/修改一级分类
    saveCate() {
      this.$refs.cateRef.validate(async valid => {
        if (!valid) return false
        if (this.cateId) {
          const { data: res } = await putCategory(this.cateId, this.cateForm)
          this.$message.success(res.meta.message)
        } else {
          const { data: res } = await postCategory(this.cateForm)
          this.$message.success(res.meta.message)
        }
        this.getCategoryList()
        this.cateDialog = false
      })
    },
    // 确定添加/修改二级分类
    saveSubCate() {
      this.$refs.subCateRef.validate(async valid => {
        if (!valid) return false
        if (this.cateId) {
          const { data: res } = await putSubCate(this.cateId, this.subCateForm)
          this.$message.success(res.meta.message)
        } else {
          const { data: res } = await postSubCate(this.subCateForm)
          this.$message.success(res.meta.message)
        }
        this.getCategoryList()
        this.subCateDialog = false
      })
    },
    // 编辑按钮
    editCategory(row) {
      this.cateId = row._id
      if (row.level === 1) {
        Object.assign(this.cateForm, row)
        this.cateDialog = true
      } else {
        Object.assign(this.subCateForm, row)
        this.subCateDialog = true
      }
    },
    // 确定删除一级分类、二级分类
    delCategory(row) {
      this.$confirm(`确定删除分类 ${row.name} 吗`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          if (row.level === 1) {
            const { data: res } = await delCategory(row._id)
          } else {
            const { data: res } = await delSubCate(row._id)
          }
          this.$message.success(res.meta.message)
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
</style>