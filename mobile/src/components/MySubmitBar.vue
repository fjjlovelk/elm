<template>
  <div class="my-submit-bar">
    <div class="submit-shop_car">
      <div class="submit-shop_car-tag">1</div>
      <i class="iconfont icon-shop_car"></i>
    </div>
    <div class="submit-total">
      <div>
        <span>￥</span>
        <span class="submit-total-price">168.9</span>
      </div>
      <div>
        <span class="submit-total-fee">另需配送费￥9</span>
      </div>
    </div>
    <div class="submit-btn">去结算</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.my-submit-bar {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #3b3b3c;
  display: flex;
  justify-content: space-between;
}
.submit-shop_car {
  width: 50px;
  line-height: 50px;
  border-radius: 50%;
  background-color: #409eff;
  position: relative;
  top: -10px;
  margin: 0 10px;
  text-align: center;
}
.submit-shop_car-tag {
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: 40px;
  color: #fff;
  font-size: 12px;
  background-color: #fb4e44;
}
.submit-shop_car .iconfont {
  color: #fff;
  font-size: 30px;
}
.submit-total {
  flex: 1;
  color: #fff;
}
.submit-total-price {
  font-size: 24px;
}
.submit-total-fee {
  font-size: 12px;
  color: #999;
}
.submit-btn {
  width: 100px;
  line-height: 50px;
  color: #fff;
  font-weight: bold;
  background-color: #67c23a;
  text-align: center;
}
</style>