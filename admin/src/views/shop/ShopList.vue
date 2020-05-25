<template>
  <div>
    <base-layout>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input v-model="queryForm.query" placeholder="输入商家名称进行搜索">
            <el-button slot="append" icon="el-icon-search" @click="searchShop"></el-button>
          </el-input>
        </el-col>
        <el-col :span="10">
          <el-button type="primary" @click="$router.push('/shopEdit')">添加商家</el-button>
        </el-col>
      </el-row>
      <el-table :data="shopList" max-height="840px" border>
        <el-table-column type="expand">
          <template #default="scope">
            <el-form label-width="100px" label-position="left">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="店铺名称">{{scope.row.name}}</el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="店铺地址">{{scope.row.address}}</el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="店铺介绍">{{scope.row.description}}</el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="店铺ID">{{scope.row._id}}</el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="联系电话">{{scope.row.telphone}}</el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="评分">未知</el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="销售量">未知</el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    label="分类"
                  >{{scope.row.category.parent.name}}/{{scope.row.category.name}}</el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="店铺名称" prop="name"></el-table-column>
        <el-table-column label="店铺地址" prop="address"></el-table-column>
        <el-table-column label="店铺介绍" prop="description"></el-table-column>
        <el-table-column label="操作" width="300px">
          <template #default="scope">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="editShop(scope.row._id)"
            >编辑</el-button>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-plus"
              @click="$router.push(`/goodsEdit/${scope.row._id}`)"
            >添加商品</el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="delShop(scope.row)"
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
      shopList: [],
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
    this.getShopList()
  },
  methods: {
    async getShopList() {
      const { data: res } = await this.$http.get('admin/shops', {
        params: this.queryForm
      })
      this.total = res.data.total
      this.shopList = res.data.data
    },
    changeCurrentPage(newCurrentPage) {
      this.queryForm.pageNum = newCurrentPage
      this.getShopList()
    },
    changePageSize(newPageSize) {
      this.queryForm.pageSize = newPageSize
      this.getShopList()
    },
    searchShop() {
      this.queryForm.pageNum = 1
      this.queryForm.pageSize = 20
      this.getShopList()
    },
    editShop(id) {
      this.$router.push(`/shopEdit/${id}`)
    },
    delShop(row) {
      this.$confirm(`确定删除商家 ${row.name} 吗`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const { data: res } = await this.$http.delete(
            `admin/shops/${row._id}`
          )
          this.$message.success(res.meta.message)
          this.getShopList()
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