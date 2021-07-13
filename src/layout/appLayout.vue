<template>
  <div>
    <router-view class="page-container" v-slot="{ Component }">
      <transition :name="direction">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, reactive, toRefs} from "vue";

export default {
  props: {
    fullScreen: {
      type: Boolean,
      default: false
    }
  },
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
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background: #fff;
  color: #424242;
  position: absolute;
  width: 100%;
  height: 100%;
}

//.fade-enter-active,
//.fade-leave-active {
//  transition: all 0.25s ease;
//}
//
//.fade-enter,
//.fade-leave-active {
//  opacity: 0;
//}

//.page {
//  transition: all 0.25s linear;
//}

// 进入新页面
.page-go-enter-active { position: fixed; z-index: 99; transition: all .25s ease-in-out; }
.page-go-enter-from { transform: translate3d(100vw, 0, 0);}
.page-go-enter-to { transform: translate3d(0, 0, 0);}

.page-go-leave-active { position: fixed; transform: translate3d(0, 0, 0); transition: all .25s ease-in-out;}
//.page-go-leave-from {}
//.page-go-leave-to {transform: translate3d(0, 0, 0)}



// 返回上一个页面
.page-back-enter-active {position: fixed; transform: translate3d(0, 0, 0); transition: all .25s ease-in-out; }


.page-back-leave-active { position: fixed; z-index: 99; transition: all .25s ease-in-out;}
.page-back-leave-from { transform: translate3d(0, 0, 0);}
.page-back-leave-to {  transform: translate3d(100vw, 0, 0);}




.slide-top-enter-from { transform: translate3d(0, 100vh, 0);}
.slide-top-enter-to { transform: translate3d(0, 0, 0);}

//.slide-top-leave-from {transform: translateY(0);}
//.slide-top-leave-to { transform: translateY(30vh);}
//.slide-top-leave-to {transform: translateY(30vh);}
.slide-top-enter-active,
.slide-top-leave-active {
  position: fixed;
  transition: all .25s ease-out;
}

.slide-bottom-enter-active {
  position: fixed;
  transition: all .25s ease-out;
  transform: translate3d(0, 0, 0);
}

.slide-bottom-leave-active {
  position: fixed;
  z-index: 99;
  transition: all .25s ease-out;
}

.slide-bottom-leave-from {
  transform: translate3d(0, 0, 0);
}

.slide-bottom-leave-to {
  transform: translate3d(0, 100vh, 0);
}

//.slide-top-leave-active {
//  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
//}
//
//
//.slide-right-enter-from,
//.slide-right-leave-to {
//  opacity: 0;
//}
</style>