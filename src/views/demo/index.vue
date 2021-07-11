<template>
  <div>
    <p>示例页面示例页面示例页面示例页面示例页面示例页面</p>
    <p>示例页面示例页面示例页面示例页面示例页面示例页面</p>
    <p>示例页面示例页面示例页面示例页面示例页面示例页面</p>
    <p>示例页面示例页面示例页面示例页面示例页面示例页面</p>
    <p>示例页面示例页面示例页面示例页面示例页面示例页面</p>
    <p>示例页面示例页面示例页面示例页面示例页面示例页面</p>
    <p>示例页面示例页面示例页面示例页面示例页面示例页面</p>
    <p>示例页面示例页面示例页面示例页面示例页面示例页面</p>
    <p>示例页面示例页面示例页面示例页面示例页面示例页面</p>
    <p>示例页面示例页面示例页面示例页面示例页面示例页面</p>
    <p>示例页面示例页面示例页面示例页面示例页面示例页面</p>
    <button @click="goDemo">进入下一个页面</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup(){
    const router = useRouter();
    const goDemo = () => {
      router.push('/404')
    }

    return {
      goDemo
    }
  }
}
</script>