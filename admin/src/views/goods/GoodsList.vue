<template>
  <div>
    <base-layout>
      <el-row>
        <el-col :span="8">
          <el-input v-model="queryForm.query" placeholder="输入商品名称进行搜索">
            <el-button slot="append" icon="el-icon-search" @click="searchGoods"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table :data="goodsList" max-height="840px" border>
        <el-table-column type="expand">
          <template #default="scope">
            <el-form label-width="100px" label-position="left">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="商品名称">{{scope.row.name}}</el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="所属商家">{{scope.row.shop.name}}</el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="商品ID">{{scope.row._id}}</el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="商家ID">{{scope.row.shop._id}}</el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="商品介绍">{{scope.row.detail}}</el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="商家地址">{{scope.row.shop.address}}</el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="商品分类">{{scope.row.category.name}}</el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="商品名称" prop="name" min-width="30%"></el-table-column>
        <el-table-column label="商品介绍" prop="detail" min-width="70%"></el-table-column>
        <el-table-column label="操作" width="300px">
          <template #default="scope">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="editGoods(scope.row._id)"
            >编辑</el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="delGoods(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :total="total"
        :current-page="queryForm.pageNum"
        :page-size="queryForm.pageSize"
        :page-sizes="pageSizes"
        @current-change="changeCurrentPage"
        @size-change="changePageSize"
        layout="sizes, prev, pager, next, jumper, ->, total"
      ></el-pagination>
    </base-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
      total: null,
      queryForm: {
        query: '',
        pageNum: 1,
        pageSize: 20
      },
      pageSizes: [5, 10, 15, 20]
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('goods', {
        params: this.queryForm
      })
      this.total = res.data.total
      this.goodsList = res.data.data
    },
    changeCurrentPage(newCurrentPage) {
      this.queryForm.pageNum = newCurrentPage
      this.getGoodsList()
    },
    changePageSize(newPageSize) {
      this.queryForm.pageSize = newPageSize
      this.getGoodsList()
    },
    searchGoods() {
      this.queryForm.pageNum = 1
      this.queryForm.pageSize = 20
      this.getGoodsList()
    },
    editGoods(goodsId) {
      this.$router.push(`/goodsEdit/${goodsId}`)
    },
    delGoods(row) {
      this.$confirm(`确定删除商品 ${row.name} 吗`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const { data: res } = await this.$http.delete(
            `goods/${row._id}`
          )
          this.$message.success(res.meta.message)
          this.getGoodsList()
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
.el-form /deep/ .el-form-item__label {
  color: #99a9bf;
}
.el-form-item {
  margin-bottom: 0;
}
</style>