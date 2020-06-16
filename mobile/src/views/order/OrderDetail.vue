<template>
  <div>
    ddd
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      orderDetail: state => state.orderDetail
    })
  },
  created() {
    console.log(this.orderDetail)
  }
}
</script>

<style scoped>

</style>