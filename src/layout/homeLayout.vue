<template>
  <div class="page-container home">
    <div class="page-content">
      <router-view class="page-view-box" v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <div class="home-tabbar-placeholder"></div>
    </div>
    <van-tabbar class="home-tabbar" v-model="active" inactive-color="#84898C" active-color="#26A5FF" safe-area-inset-bottom>
      <van-tabbar-item to="/home" replace>
        <template #icon>
          <ed-icon :icon-name="active === 0?'icon-home-current':'icon-home'" style="width: 36px; height: 36px;"></ed-icon>
          <span class="tabbar-text">首页</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/discovery" replace>
        <template #icon>
          <ed-icon :icon-name="active === 1?'icon-discovery-current':'icon-discovery'" style="width: 36px; height: 36px;"></ed-icon>
          <span class="tabbar-text">发现</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/mine" replace>
        <template #icon>
          <ed-icon :icon-name="active === 2?'icon-mine-current':'icon-mine'" style="width: 36px; height: 36px;"></ed-icon>
          <span class="tabbar-text">我的</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
import {Tabbar, TabbarItem} from "vant";
import {reactive, toRefs} from "vue";

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  setup() {
    const state = reactive({
      active: 0
    })

    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped lang="scss">
.page-container {
  &.home {
    display: flex;
    flex-direction: column;
    .page-content {
      flex: 1;
      .page-view-box {
        overflow-y:scroll;
        -webkit-overflow-scrolling:touch;
      }
      .home-tabbar-placeholder {
        width: 100%;
        height: var(--van-tabbar-height);
      }
    }
    .home-tabbar {
      z-index: 999;
      height: var(--van-tabbar-height);
    }
  }
}
.my-van-tabbar {
}
/deep/ .van-tabbar-item__icon {
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tabbar-text {
  font-size: 20px;
  margin-top: 12px;
}
</style>