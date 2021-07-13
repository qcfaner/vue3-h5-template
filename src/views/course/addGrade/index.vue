<template>
  <ed-page-wrap>
<!--    <van-nav-bar left-arrow slot="header" title="选择班级" right-text="完成" @click-left="goBack" @click-right="submit"/>-->
    <div class="page-content">
      <van-cell-group style="margin-top: 20px;">
        <van-cell title="不限">
          <template #extra>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group style="margin-top: 20px;">
        <van-cell title="班级A">
          <template #extra>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
        <van-cell title="班级B">
          <template #extra>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
        <van-cell title="班级C">
          <template #extra>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
        <van-cell title="班级D">
          <template #extra>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
        <van-cell title="班级E">
          <template #extra>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
        <van-cell title="班级F">
          <template #extra>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </ed-page-wrap>
</template>

<script>
import { NavBar, CellGroup, Cell, Checkbox } from "vant"
export default {
  components: {
    [NavBar.name]: NavBar,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Checkbox.name]: Checkbox,
  },
  data(){
    return {
      checked: false
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    submit(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">

</style>