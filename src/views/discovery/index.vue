<template>
<!--  <div class="test">-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--    <p>sdfdsfsdfdsfdsfds</p>-->
<!--  </div>-->
  <!--    <van-nav-bar slot="header" title="发现" />-->
  <div>
    <ed-status-bar></ed-status-bar>
    <div class="quickStart-wrap">
      <ul class="discovery-quickStart">
        <li class="icon-discovery-quickStart icon-01">
          <ed-icon class="discovery-icon" icon-name="icon-common-grade"></ed-icon>
          <span class="icon-name">我的班级</span>
        </li>
        <li class="icon-discovery-quickStart icon-02">
          <ed-icon class="discovery-icon" icon-name="icon-common-plan"></ed-icon>
          <span class="icon-name">学习计划</span>
        </li>
      </ul>
    </div>

    <!-- 我的作业 -->
    <ed-card title="我的作业" style="padding: 32px;">
      <ul class="gallery-wrap">
        <li class="gallery-item">
          <ed-gallery title="这里是作业名称" desc="12-29 23:59:59 截止" :src="require('@/assets/img/img-example-calligraphy1.png')"></ed-gallery>
        </li>
        <li class="gallery-item">
          <ed-gallery title="这里是作业名称" desc="12-29 23:59:59 截止" :src="require('@/assets/img/img-example-calligraphy1.png')"></ed-gallery>
        </li>
      </ul>
    </ed-card>

    <!-- 高分佳作 -->
    <ed-card title="高分佳作" style="padding: 32px;">
      <ul class="gallery-wrap">
        <li class="gallery-item">
          <ed-gallery title="这里是作品名称名称" desc="1.5w人气 · 128赞" :src="require('@/assets/img/img-example-calligraphy1.png')"></ed-gallery>
        </li>
        <li class="gallery-item">
          <ed-gallery title="这里是作品名称名称" desc="1.5w人气 · 128赞" :src="require('@/assets/img/img-example-calligraphy1.png')"></ed-gallery>
        </li>
        <li class="gallery-item">
          <ed-gallery title="这里是作品名称名称" desc="1.5w人气 · 128赞" :src="require('@/assets/img/img-example-calligraphy1.png')"></ed-gallery>
        </li>
        <li class="gallery-item">
          <ed-gallery title="这里是作品名称名称" desc="1.5w人气 · 128赞" :src="require('@/assets/img/img-example-calligraphy1.png')"></ed-gallery>
        </li>
        <li class="gallery-item">
          <ed-gallery title="这里是作品名称名称" desc="1.5w人气 · 128赞" :src="require('@/assets/img/img-example-calligraphy1.png')"></ed-gallery>
        </li>
        <li class="gallery-item">
          <ed-gallery title="这里是作品名称名称" desc="1.5w人气 · 128赞" :src="require('@/assets/img/img-example-calligraphy1.png')"></ed-gallery>
        </li>
      </ul>
    </ed-card>
  </div>
</template>

<script>
import {NavBar, Button, Grid, GridItem, Image as VanImage} from "vant"

export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [VanImage.name]: VanImage,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">
.quickStart-wrap {
  display: flex;
  justify-content: center;
  margin-top: 24px;

  .discovery-quickStart {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 160px;
    //grid-row-gap: 30px;
    //grid-column-gap: 30px;
    .icon-discovery-quickStart {
      background-size: 100% 100%;
      background-position: center center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;

      .discovery-icon {
        margin-left: 64px;
      }

      .icon-name {
        font-size: 32px;
        color: #ffffff;
        margin-left: 24px;
      }

      &.icon-01 {
        background-image: url("~@/assets/img/bg-common-small-blue.png");
      }

      &.icon-02 {
        background-image: url("~@/assets/img/bg-common-small-yellow.png");
      }
    }
  }
}

.gallery-wrap {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  //grid-template-rows: 326px;
  grid-row-gap: 32px;
  grid-column-gap: 32px;

  .gallery-item {
    border-radius: 16px;
    overflow: hidden;
  }
}

.test > p {
  line-height: 5;
}
</style>
