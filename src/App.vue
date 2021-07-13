<template>
  <AppLayout></AppLayout>
</template>

<script>
import AppLayout from "@/layout/appLayout"
import {useStore} from "vuex";
export default {
  components: { AppLayout },
  setup(){
    const store = useStore();
    store.dispatch('appStore/getDeviceInfo')
  }
}
</script>

<style>
</style>
