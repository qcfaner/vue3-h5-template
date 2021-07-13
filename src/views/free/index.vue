<template>
  <ed-page-wrap>
    <!--    <van-nav-bar left-arrow title="随心写" @click-left="goBack"></van-nav-bar>-->
    <div class="page-content">
      <div style="padding: 32px;">
        <div class="c-top">
          <div class="left">
            <p class="t-title">今日练习</p>
            <p class="t-time">5.2<i class="sub-unit">小时</i></p>
          </div>
          <div class="right">
            <div class="btn-create-plan" @click="addPlan">创建计划</div>
          </div>
        </div>

        <div class="c-free-count">
          <div class="item">
            <p class="item-title left">累计练习(天)</p>
            <span class="day-count">286</span>
          </div>
          <div class="item">
            <p class="item-title right">连续练习(天)</p>
            <span class="day-count">5</span>
          </div>
        </div>

        <div class="c-quick-start">
          <div class="start-item">
            <ed-icon icon-name="icon-my-order"></ed-icon>
            <span>随机练</span>
          </div>
          <div class="start-item">
            <ed-icon icon-name="icon-my-order"></ed-icon>
            <span>整篇练</span>
          </div>
          <div class="start-item">
            <ed-icon icon-name="icon-my-order"></ed-icon>
            <span>练习计划</span>
          </div>
        </div>
      </div>
      <ed-card title="最近作品" style="padding: 32px;">
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
  </ed-page-wrap>
</template>

<script>
import {Button, Image as VanImage, NavBar} from "vant";

export default {
  components: {
    [NavBar.name]: NavBar,
    [VanImage.name]: VanImage,
    [Button.name]: Button,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    addPlan() {
      this.$router.push("/free/addPlan")
    }
  }
}
</script>

<style scoped lang="scss">
.page-content {
  background: linear-gradient(to bottom, #FFFFFF 20%, #F7F9FA);

  .c-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      .t-title {
        font-size: 26px;
      }

      .t-time {
        margin-top: 24px;
        font-size: 48px;

        .sub-unit {
          font-size: 26px;
          color: #84898C;
          font-style: normal;
          margin-left: 12px;
        }
      }
    }

    .right {
      .btn-create-plan {
        font-size: 28px;
        padding: 8px 16px;
        border: 1px solid #26A5FF;
        color: #26A5FF;
        border-radius: 34px;
      }
    }
  }

  .c-free-count {
    margin-top: 32px;
    display: grid;
    grid-template-rows: 152px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;

    .item {
      padding: 24px;
      background-color: #F7F9FA;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .item-title {
        font-size: 24px;
        display: flex;
        align-items: center;

        &:before {
          content: "";
          display: inline-block;
          width: 8px;
          height: 24px;
          border-radius: 4px;
          margin-right: 12px;
        }

        &.left {
          &:before {
            background: #26A5FF;
          }
        }

        &.right {
          &:before {
            background: #00C090;
          }
        }
      }

      .day-count {
        font-size: 48px;
        margin-top: 14px;
      }
    }
  }

  .c-quick-start {
    margin-top: 32px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    height: 176px;
    background-color: #FFFFFF;

    .start-item {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 24px;
        margin-top: 16px;
      }
    }
  }
}

.gallery-wrap {
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
</style>