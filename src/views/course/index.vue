<template>
  <ed-page-wrap>
    <template #header>
      <van-nav-bar left-arrow title="智慧课件" @click-left="goBack" @click-right="open('/course/createCourse')">
        <template #right>
          创建
        </template>
      </van-nav-bar>
    </template>
    <!--    <van-nav-bar #header left-arrow title="智慧课件" @click-left="goBack" @click-right="createCourse">-->
    <!--      <template #right>-->
    <!--        创建-->
    <!--      </template>-->
    <!--    </van-nav-bar>-->
    <div class="page-content">
      <div class="plan-calendar">
        <p class="c-date">2020年6月29日 周二</p>
        <ed-calendar></ed-calendar>
      </div>
      <p class="today-date">7月1日 周三</p>
      <div class="c-wrap">
        <ed-course-card title="14:00 这是第一个课件名称" @chooseGrade="open('/course/addGrade')" @viewCourse="open('/course/courseDetails')">
          <ul class="grade-list">
            <li class="grade-item" @click="open('/course/completStatus')">
              <ed-icon class="avatar" icon-name="img-course-avatar"></ed-icon>
              <div class="grade-desc">
                <p class="grade-name">班级A</p>
                <p class="grade-info">
                  <span class="i-item">学员：33人</span>
                  <span class="i-item">完成作业：12人</span>
                </p>
              </div>
            </li>
            <li class="grade-item" @click="open('/course/completStatus')">
              <ed-icon class="avatar" icon-name="img-course-avatar"></ed-icon>
              <div class="grade-desc">
                <p class="grade-name">班级B</p>
                <p class="grade-info">
                  <span class="i-item">学员：45人</span>
                  <span class="i-item">完成作业：38人</span>
                </p>
              </div>
            </li>
          </ul>
        </ed-course-card>

        <ed-course-card title="16:30 这是第二个课件名称，最大长度..." @chooseGrade="open('/course/addGrade')">
          <ul class="grade-list">
            <li class="grade-item" @click="open('/course/completStatus')">
              <ed-icon class="avatar" icon-name="img-course-avatar"></ed-icon>
              <div class="grade-desc">
                <p class="grade-name">班级C</p>
                <p class="grade-info">
                  <span class="i-item">学员：21人</span>
                  <span class="i-item">完成作业：19人</span>
                </p>
              </div>
            </li>
          </ul>
        </ed-course-card>

        <ed-card title="全部课件" @click-right="open('/course/allCourse')">
          <ul class="gallery-wrap">
            <li class="gallery-item" v-for="item in courceList" :key="item.courseId">
              <ed-gallery :title="item.courseTitle" :desc="item.courseDescribe" :src="item.courseImage || ''"></ed-gallery>
            </li>
          </ul>
        </ed-card>
      </div>
    </div>
  </ed-page-wrap>
</template>

<script>
import {NavBar, Image as VanImage} from "vant";
import {queryCourse} from "@/api/course-api";
import {reactive, toRefs} from "vue";
import {useRouter} from "vue-router";


export default {
  components: {
    [NavBar.name]: NavBar,
    [VanImage.name]: VanImage,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      courceList: []
    })

    const open = (url) => {
      url && router.push(url);
    }

    const goBack = () => {
      router.go(-1);
    }

    const queryCourseList = () => {
      queryCourse({
        "courseStartDate": "",
        "pageNum": 1,
        "pageSize": 10
      }).then(res => {
        state.courceList = res?.data?.rows ?? [];
      })
    }

    queryCourseList();

    return {
      ...toRefs(state),
      open,
      goBack
    }
  }
}
</script>

<style scoped lang="scss">
.page-content {
  background-color: #F7F9FA;

  .plan-calendar {
    height: 232px;
    background-color: #ffffff;
    box-shadow: 0px -1px 0px 0px rgba(202, 202, 202, 0.5);
    padding: 24px 32px;
    box-sizing: border-box;

    .c-date {
      text-align: center;
      font-size: 32px;
      font-weight: 500;
      color: #18191A;
    }
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
        flex: 1;
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