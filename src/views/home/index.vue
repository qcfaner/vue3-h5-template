<template>
  <div>
    <div class="top-header-wrap">
      <ed-status-bar></ed-status-bar>
      <div class="top-header">
        <div class="h-bottom">
          <h3 class="home-title">深 i 写</h3>
          <div class="h-gallery"></div>
        </div>
      </div>
    </div>

    <div class="home-content">

      <div class="search-box">
        <div class="input-box" @click="open('/homeSearch')">
          <ed-icon icon-name="icon-common-search" style="width: 33px; height: 33px;"></ed-icon>
          <span class="placeholder">搜索用户或标签</span>
        </div>
      </div>

      <div class="quickStart-wrap">
        <ul class="home-quickStart">
          <li class="icon-home-quickStart icon-01" @click="open('/course')"></li>
          <li class="icon-home-quickStart icon-02" @click="open('/free')"></li>
          <li class="icon-home-quickStart icon-03"></li>
          <li class="icon-home-quickStart icon-04"></li>
        </ul>
      </div>

      <ed-card title="书法秀" style="padding: 32px;">
        <ul class="gallery-wrap">
          <li class="gallery-item">
            <ed-gallery title="这里是作品名称名称" desc="1.5w人气 · 128赞" :src="require('@/assets/img/img-example-calligraphy1.png')"></ed-gallery>
          </li>
          <li class="gallery-item">
            <ed-gallery title="这里是作品名称名称" desc="1.5w人气 · 128赞" :src="require('@/assets/img/img-example-calligraphy1.png')"></ed-gallery>
          </li>
        </ul>
      </ed-card>

      <ed-card title="艺术签名" class="signature-card" style="padding: 32px;">
        <ul class="gallery-wrap">
          <li class="gallery-item">
            <ed-gallery title="这里是作品名称名称" :src="require('@/assets/img/img-example-calligraphy2.png')"></ed-gallery>
          </li>
          <li class="gallery-item">
            <ed-gallery title="这里是作品名称名称" :src="require('@/assets/img/img-example-calligraphy2.png')"></ed-gallery>
          </li>
          <li class="gallery-item">
            <ed-gallery title="这里是作品名称名称" :src="require('@/assets/img/img-example-calligraphy2.png')"></ed-gallery>
          </li>
        </ul>
      </ed-card>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import {reactive, toRefs} from "vue";
import {Tabbar, TabbarItem} from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const router = useRouter();

    const state = reactive({
      active: 0
    })

    const open = (url) => {
      url && router.push(url);
    }

    return {
      ...toRefs(state),
      open
    }
  }
}
</script>

<style scoped lang="scss">
.top-header-wrap {
  background-image: url("~@/assets/img/bg-home-header.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .top-header {
    width: 100vw;
    //height: 568px;


    .h-bottom {
      position: relative;
      height: 480px;

      .home-title {
        position: absolute;
        top: 20px;
        font-size: 34px;
        color: #ffffff;
        z-index: 99;
        width: 100%;
        font-weight: normal;
        text-align: center;
      }

      .h-gallery {
        width: 686px;
        height: 300px;
        border-radius: 16px;
        bottom: 80px;
        left: 50%;
        margin-left: -343px;
        background-image: url("~@/assets/img/img-home-banner.png");
        background-color: #ffffff;
        background-size: contain;
        background-repeat: no-repeat;
        //margin-right: calc(50% - 142px);
        position: absolute;
        //bottom: 0.48rem;
      }
    }
  }
}

.home-content {
  background: linear-gradient(to bottom, #ffffff, #ffffff, #F7F9FA, #F7F9FA, #F7F9FA);
  border-radius: 32px 32px 0px 0px;
  margin-top: -32px;
  position: relative;
  z-index: 999;
  padding-top: 32px;

  .search-box {
    display: flex;
    justify-content: center;
    align-items: center;

    .input-box {
      width: 686px;
      height: 80px;
      border-radius: 40px;
      background-color: #F2F4F5;
      display: flex;
      justify-content: center;
      align-items: center;

      .placeholder {
        font-size: 30px;
        color: #C0C7CC;
        margin-left: 26px;
      }
    }
  }
}

.quickStart-wrap {
  display: flex;
  justify-content: center;
  padding-top: 32px;

  .home-quickStart {
    width: 100%;
    display: grid;
    padding: 0 30px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 160px 160px;
    grid-row-gap: 30px;
    grid-column-gap: 30px;

    .icon-home-quickStart {
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;

      &.icon-01 {
        background-image: url("~@/assets/img/icon-home-quickStart-01.png");
      }

      &.icon-02 {
        background-image: url("~@/assets/img/icon-home-quickStart-02.png");
      }

      &.icon-03 {
        background-image: url("~@/assets/img/icon-home-quickStart-03.png");
      }

      &.icon-04 {
        background-image: url("~@/assets/img/icon-home-quickStart-04.png");
      }
    }
  }
}

.signature-card {
  background-image: url("~@/assets/img/bg-home-signature-card.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
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
