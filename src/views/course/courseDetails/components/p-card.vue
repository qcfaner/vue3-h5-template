<template>
  <div class="page-card">
    <h3 class="c-title">{{ title }}</h3>
    <div class="c-wrap">
      <slot v-if="$slots.default"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "默认标题"
    }
  }
}
</script>

<style scoped lang="scss">
.page-card {
  margin-top: 30px;
  .c-title {
    color: #84898C;
    font-size: 34px;
    font-weight: 500;
    display: flex;
    align-items: center;
    &:before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 34px;
      background-color: #26A5FF;
      border-radius: 4px;
      margin-right: 16px;
    }
  }
  .c-wrap {
    margin-top: 24px;
    background-color: #fff;
    border-radius: 16px;
  }
}
</style>