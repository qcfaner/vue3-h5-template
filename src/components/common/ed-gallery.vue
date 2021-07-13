<template>
  <div class="ed-gallery">
    <van-image class="g-image" fit="cover" :src="src">
      <template v-slot:error>加载失败</template>
    </van-image>
    <div class="g-bottom">
      <h3 class="gallery-title">{{ title }}</h3>
      <p class="gallery-desc" v-if="desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
import { Image as VanImage } from "vant"
export default {
  components: {
    [VanImage.name]: VanImage
  },
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: "默认标题"
    },
    desc: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped lang="scss">
.ed-gallery {
  background: #FFFFFF;
  border-radius: 16px;
  .g-image {
    width:328px;
    height: 328px;
  }
  .g-bottom {
    padding: 16px 22px;
    .gallery-title {
      font-size: 28px;
      color: #18191A;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .gallery-desc {
      margin-top: 8px;
      font-size: 24px;
      color: #84898C;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
}
</style>