<template>
  <div>
    <base-layout>
      <el-table :data="adminList" border max-height="840px">
        <el-table-column type="index" :index="indexMethod"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="注册日期">
          <template v-slot="scope">{{$moment(scope.row.createdAt).format('YYYY-MM-DD HH:mm')}}</template>
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
      adminList: [],
      total: null,
      pageSizes: [5, 10, 15, 20],
      queryForm: {
        pageNum: 1,
        pageSize: 20
      }
    }
  },
  created() {
    this.getAdminList()
  },
  methods: {
    async getAdminList() {
      const { data: res } = await this.$http.get('admins', {
        params: this.queryForm
      })
      this.adminList = res.data.data
      this.total = res.data.total
    },
    indexMethod(index) {
      return (this.queryForm.pageNum - 1) * this.queryForm.pageSize + index + 1
    },
    changeCurrentPage(newPage) {
      this.queryForm.pageNum = newPage
      this.getAdminList()
    },
    changePageSize(newPageSize){
      this.queryForm.pageSize = newPageSize
      this.getAdminList()
    }
  }
}
</script>

<style>
</style>