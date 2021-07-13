<template>
  <ed-page-wrap>
  <!--    <van-nav-bar left-arrow title="全部课件" @click-left="goBack"></van-nav-bar>-->
  <div class="page-content">
    <ul class="gallery-wrap">
      <li class="gallery-item" v-for="item in courceList" :key="item.courseId">
        <ed-gallery :title="item.courseTitle" :desc="item.courseDescribe" :src="item.courseImage || ''"></ed-gallery>
      </li>
    </ul>
  </div>
  </ed-page-wrap>
</template>

<script>
import {NavBar, Image as VanImage} from "vant";
import {queryCourse} from "@/api/course-api";

export default {
  components: {
    [NavBar.name]: NavBar,
    [VanImage.name]: VanImage,
  },
  data() {
    return {
      courceList: []
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  created() {
    queryCourse({
      "courseStartDate": "",
      "pageNum": 1,
      "pageSize": 10
    }).then(res => {
      this.courceList = res?.data?.rows ?? [];
    })
  }
}
</script>

<style scoped lang="scss">
.page-content {
  background-color: #F7F9FA;
  padding: 32px;

  .plan-calendar {
    height: 232px;
    background-color: #ffffff;
    box-shadow: 0px -1px 0px 0px rgba(202, 202, 202, 0.5);
  }

  .today-date {
    margin: 24px 32px;
    font-size: 28px;
    color: #84898C;
  }

  .c-wrap {
    padding: 0 32px 32px;
  }

  .grade-list {
    display: flex;
    flex-direction: column;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 2px;
    }

    .grade-item {
      display: flex;

      &:not(:first-child) {
        margin-top: 28px;
      }

      .grade-desc {
        margin-left: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .grade-name {
          font-size: 30px;
          color: #18191A;
        }

        .grade-info {
          font-size: 26px;
          color: #84898C;

          .i-item:not(:last-child) {
            &:after {
              content: "|";
              padding: 0 32px;
            }
          }
        }
      }
    }
  }
}

.gallery-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  //grid-template-rows: 293px;
  grid-row-gap: 32px;
  grid-column-gap: 32px;
  border-radius: 16px;

  .gallery-item {
    border-radius: 16px;
    overflow: hidden;
  }
}
</style>