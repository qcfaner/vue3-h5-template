<template>
  <ed-page-wrap>
    <van-nav-bar left-arrow title="创建计划" @click-left="goBack"/>
    <div class="page-content">
      <van-cell-group style="margin-top: 20px;">
        <van-cell title="计划名称">
          <template #extra>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group style="margin-top: 20px;">
        <van-cell title="开始时间">
          <template #extra>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group style="margin-top: 20px;">
        <van-cell title="重复">
          <template #extra>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group style="margin-top: 20px;">
        <van-cell title="提醒">
          <template #extra>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
      </van-cell-group>


    </div>
  </ed-page-wrap>
</template>

<script>
import {NavBar, CellGroup, Cell, Checkbox} from "vant"

export default {
  components: {
    [NavBar.name]: NavBar,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Checkbox.name]: Checkbox,
  },
  data() {
    return {
      checked: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submit() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">

</style>