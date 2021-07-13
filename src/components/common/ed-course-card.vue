<template>
  <div class="ed-course-card">
    <header class="card-header">
      <div class="h-wrap">
        <div class="h-title">{{ title }}</div>
        <ed-icon icon-name="icon-common-more" style="width: 27px; height: 27px;" @click="viewCourse"></ed-icon>
      </div>
    </header>
    <p class="card-description">
      床前明月光，疑是地上霜。
    </p>
    <div class="card-content">
      <slot/>
    </div>
    <div class="card-btns">
      <div class="btn info">开始上课</div>
      <div class="btn" @click="chooseGrade">添加班级</div>
<!--      <van-button round type="primary" size="small">开始上课</van-button>-->
<!--      <van-button round>添加班级</van-button>-->
    </div>
  </div>
</template>

<script>
import { Button } from "vant";

export default {
  components: {
    [Button.name]: Button
  },
  props: {
    title: {
      type: String,
      default: "默认标题"
    }
  },
  data(){
    return {
      themeVars: {
          "buttonDefaultHeight": "44px"
      }
    }
  },
  methods: {
    chooseGrade(){
      this.$emit("chooseGrade")
    },
    viewCourse(){
      this.$emit("viewCourse")
    }
  }
}
</script>

<style scoped lang="scss">
.ed-course-card {
  border-radius: 16px;
  background-color: #ffffff;
  margin-bottom: 32px;
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    font-size: 32px;
    font-weight: bold;
    &::before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 40px;
      background-color: #26A5FF;
      border-radius: 0 8px 8px 0;
    }
    .h-wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 32px 0 24px;
      .h-title {

      }
    }
  }
  .card-description {
    font-size: 26px;
    color: #84898C;
    padding: 0 32px;
  }
  .card-content {
    padding: 32px 32px 0 32px;
  }
  .card-btns {
    display: flex;
    padding: 32px;
    .btn {
      width: 184px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 44px;
      border: 1px solid #26A5FF;
      color: #26A5FF;
      font-size: 30px;
      margin-right: 24px;
      &.info {
        background-color: #26A5FF;
        color: #ffffff;
      }
    }
  }
}
</style>