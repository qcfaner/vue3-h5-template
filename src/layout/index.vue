<template>
  <router-view class="page-container" v-slot="{ Component }">
    <transition :name="direction">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script>
import {computed, reactive, toRefs} from "vue";
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore();
    const state = reactive({
      direction: computed(() => store.state.appStore.routerTransName)
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.page-container {
  background: #fff;
  color: #424242;
  position: absolute;
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.page {
  transition: all 0.25s linear;
}

.page-go-enter-active {
  transform: translate3d(100%, 0, 0);
  transition: all 0.25s ease-in-out;
}

.page-go-enter-to {
  transform: translate3d(0, 0, 0);
  transition: all 0.25s ease-in-out;
}

.page-go-leave-active {
  transform: translate3d(0, 0, 0);
  transition: all 0.25s ease-in-out;
}

.page-go-leave-to {
  transform: translate3d(-100%, 0, 0);
  transition: all 0.25s ease-in-out;
}

.page-back-enter-active {
  transform: translate3d(-100%, 0, 0);
  transition: all 0.25s ease-in-out;
}

.page-back-enter-to {
  transform: translate3d(0, 0, 0);
  transition: all 0.25s ease-in-out;
}

.page-back-leave-active {
  transform: translate3d(0, 0, 0);
  transition: all 0.25s ease-in-out;
}

.page-back-leave-to {
  transform: translate3d(100%, 0, 0);
  transition: all 0.25s ease-in-out;
}
</style>