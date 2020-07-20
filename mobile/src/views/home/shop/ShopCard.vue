<template>
  <div class="my-card">
    <img :src="imgURL">
    <div class="my-card-right">
      <h4>{{title}}</h4>
      <p>公告：{{slogan}}</p>
      <p>{{desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgURL: { type: String },
    title: { type: String },
    slogan: { type: String },
    desc: { type: String }
  }
}
</script>

<style scoped>
.my-card {
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 20px;
  padding: 8px 10px;
}
.my-card > img {
  width: 85px;
  height: 64px;
  margin-right: 8px;
}
.my-card-right {
  flex: 1;
  width: 1px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.my-card-right p {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>