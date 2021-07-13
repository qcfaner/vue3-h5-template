<template>
  <ed-page-wrap>
<!--    <van-nav-bar left-arrow slot="header" title="班级A的作业" @click-left="goBack"/>-->
    <div class="page-content">
      <div class="course-info">
        <h3 class="course-title">静夜思古诗书法课</h3>
        <p class="info-item"><span class="c-sub-title">作业文字</span><span>床前明月光，疑是地上霜。</span></p>
        <p class="info-item"><span class="c-sub-title">发布时间</span><span>2020/07/01 10:30</span></p>
        <p class="info-item"><span class="c-sub-title">截止时间</span><span>2020/07/01 10:30</span></p>
      </div>

      <div class="student-list">
        <span class="student-label">全部学员(30)</span>
        <span class="student-value green">20人已提交作业</span>
      </div>

      <van-cell-group class="my-cell-group">
        <van-cell is-link>
          <template #title>
            <div class="student-info">
              <van-image class="stu-avatar" fit="cover" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
              <div class="stu-base">
                <p class="name">黄晓明</p>
                <p class="meta"><span class="status green">已提交</span><span>2020/07/01 10:30</span></p>
              </div>
            </div>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <div class="student-info">
              <van-image class="stu-avatar" fit="cover" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
              <div class="stu-base">
                <p class="name">黄晓明</p>
                <p class="meta"><span class="status green">已提交</span><span>2020/07/01 10:30</span></p>
              </div>
            </div>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <div class="student-info">
              <van-image class="stu-avatar" fit="cover" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
              <div class="stu-base">
                <p class="name">黄晓明</p>
                <p class="meta"><span class="status green">已提交</span><span>2020/07/01 10:30</span></p>
              </div>
            </div>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <div class="student-info">
              <van-image class="stu-avatar" fit="cover" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
              <div class="stu-base">
                <p class="name">黄晓明</p>
                <p class="meta"><span class="status green">已提交</span><span>2020/07/01 10:30</span></p>
              </div>
            </div>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <div class="student-info">
              <van-image class="stu-avatar" fit="cover" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
              <div class="stu-base">
                <p class="name">黄晓明</p>
                <p class="meta"><span class="status green">已提交</span><span>2020/07/01 10:30</span></p>
              </div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </ed-page-wrap>
</template>

<script>

import { NavBar, CellGroup, Cell, Image as VanImage} from "vant";

export default {
  components: {
    [NavBar.name]: NavBar,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [VanImage.name]: VanImage,
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">
.page-content {
  .course-info {
    padding: 30px;
    background-color: #FFFFFF;
    .course-title {
      font-size: 34px;
      margin-bottom: 24px;
    }
    .info-item {
      font-size: 28px;
      &:not(:last-child) {
        margin-bottom: 16px;
      }
      .c-sub-title {
        color: #84898C;
        &:after {
          content: "|";
          padding: 0 16px;
        }
      }
    }
  }
  .student-list {
    height: 96px;
    background-color: #FFFFFF;
    margin-top: 20px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .student-label {
      font-size: 34px;
    }
    .student-value {
      font-size: 30px;
    }
  }
}

.student-info {
  display: flex;
  .stu-avatar {
    width: 96px;
    height: 96px;
  }
  .stu-base {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .name {
      font-size: 34px;
    }
    .meta {
      font-size: 24px;
      color: #84898C;
      .status {
        margin-right: 16px;
      }
    }
  }
}

.green {
  color: #00C090;
}

.my-cell-group /deep/ {
  .van-cell {
    align-items: center;
  }
}
</style>