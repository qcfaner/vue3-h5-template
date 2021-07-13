<template>
  <div class="app-statusBar" :style="{ height: `${ statusBarHeight }` }"></div>
<!--  <div class="app-statusBar-placeholder" :style="{ height: `${ statusBarHeight }` }"></div>-->
</template>、

<script>
import {computed, reactive, toRefs} from "vue";
import {useStore} from "vuex";
import {pxtovw} from "@/utils/pxtovw";

export default {
  setup(){
    const store = useStore();
    const state = reactive({
      deviceInfo: computed(() => store.state.appStore.deviceInfo),
      statusBarHeight: computed(() => pxtovw(state.deviceInfo.statusBarHeight))
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.app-statusBar {
  //background: #CCCCCC;
  //border: 1px solid red;
  width: 100vw;
  //position: fixed;
  //z-index: 999;
  //background: inherit;
}
</style>