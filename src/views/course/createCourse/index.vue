<template>
  <ed-page-wrap>
    <template #header>
      <van-nav-bar left-arrow title="创建课件" @click-left="goBack"></van-nav-bar>
    </template>
    <div class="page-content">
      <div class="upload-box">
        <p class="u-title">课件封面</p>
        <van-uploader :after-read="afterRead"/>
      </div>
      <van-form @submit="onSubmit">
        <van-field v-model="form.username" label="标题"/>
        <van-field v-model="form.username" label="描述"/>
        <van-field v-model="form.username" label="文字"/>
        <van-field v-model="form.username" label="内容"/>
        <van-field v-model="form.username" label="班级"/>
        <div style="margin: 30px;">
          <van-button round block type="info" native-type="submit">生成课件</van-button>
        </div>
      </van-form>
    </div>
  </ed-page-wrap>
</template>

<script>
import {NavBar, Form, Field, Button, Uploader} from "vant";

export default {
  components: {
    [NavBar.name]: NavBar,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Uploader.name]: Uploader,
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    afterRead() {
    },
    onSubmit() {
    }
  }
}
</script>

<style scoped lang="scss">
.upload-box {
  height: 230px;
  margin: 20px 0;
  background-color: #FFFFFF;
  padding: 30px;
  box-sizing: border-box;

  .u-title {
    font-size: 34px;
    margin-bottom: 24px;
  }
}
</style>