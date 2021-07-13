<!-- 卡片 -->
<template>
  <div class="ed-card-container" :style="{'background-image': `bgUrl?url(${ bgUrl }):'none'}`}">
    {{ bgUrl }}
    <div class="c-content">
      <h3 class="title">
        <span>{{ title }}</span>
        <span class="sub-more" @click="more">更多</span>
      </h3>
      <div class="c-main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "默认标题"
    },
    bgUrl: {
      type: String,
      default: ""
    }
  },
  methods: {
    more(){
      this.$emit("click-right")
    }
  }
}
</script>

<style scoped lang="scss">
.ed-card-container {
  margin-top: 32px;
  .c-content {
    .title {
      font-size: 36px;
      display: flex;
      justify-content: space-between;
      .sub-more {
        font-size: 28px;
        color: #84898C;
        font-weight: normal;
        display: inline-block;
        border: 1px solid #CCD3D9;
        border-radius: 25px;
        padding: 4px 12px;
      }
    }
    .c-main {
      margin-top: 32px;
    }
  }
}
</style>