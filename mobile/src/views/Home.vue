<template>
  <div>
    <van-notice-bar color="#409EFF" background="#fff" left-icon="location">京都酒家</van-notice-bar>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" input-align="center" />
    <van-swipe class="my-swipe" :autoplay="-1" indicator-color="#409EFF">
      <van-swipe-item>
        <van-grid :border="false">
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.van-notice-bar {
  width: 50%;
  padding: 0;
  font-size: 16px;
}
.van-search {
  padding: 0;
  margin: 10px 0;
}
</style>