<template>
  <div>
    <el-button type="primary" @click="getUserList">获取</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: []
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    async getUserList() {
      try {
        const { data: res } = await this.$http.get('/users')
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>