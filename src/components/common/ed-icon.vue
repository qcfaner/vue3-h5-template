<template>
    <img v-if="iconName" class="ed-icon-class" :style="$attrs.style" :src="require(`@/assets/img/${iconName}.png`)" v-bind="$attrs"/>
    <svg v-else-if="svgName" class="ed-icon-class svg-icon" :style="$attrs.style" xmlns="http://www.w3.org/2000/svg" version="1.1" v-bind="$attrs">
      <use :xlink:href="`#icon-${ svgName }`"></use>
    </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: ""
    },
    svgName: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped lang="scss">
.ed-icon-class {
  width: 48px;
  height: 48px;
}
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 24px;
}
</style>