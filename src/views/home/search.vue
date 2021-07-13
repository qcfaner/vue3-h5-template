<template>
  <ed-page-wrap>
    <div class="search-box">
      <van-search
          ref="homeSearch"
          autofocus
          class="s-input"
          v-model="value"
          show-action
          placeholder="搜索用户或标签"
          @search="onSearch"
          @cancel="onCancel"
      />
    </div>
  </ed-page-wrap>
</template>

<script>
import { ref, onMounted } from "vue";

import {Search} from "vant";
import {useRouter} from "vue-router";

export default {
  components: {
    [Search.name]: Search
  },
  setup() {
    const homeSearch = ref(null);
    const router = useRouter();

    onMounted(()=>{
      homeSearch.value.focus();
    })

    const onSearch = () => {
    }
    const onCancel = () => {
      router.go(-1);
    }

    return {
      homeSearch,
      onSearch,
      onCancel
    }
  },
  beforeRouteEnter(to){
    Object.assign(to.meta, {transition: 'slide-top'})
  },
  beforeRouteLeave(to) {
    Object.assign(to.meta, {transition: 'slide-bottom'})
  },
}
</script>

<style scoped lang="scss">
.search-box {
  display: flex;
  justify-content: center;

  .s-input {
    width: 100%;
    height: 72px;
    background: #F2F4F5;
    border-radius: 38px;
    margin: 6px 32px;
  }

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
</style>