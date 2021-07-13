<template>
  <div>
    <div class="page-mine">
      <div class="header-wrap">
        <ed-status-bar></ed-status-bar>
        <div class="header">
          <ed-icon class="h-message" icon-name="icon-message"></ed-icon>
          <div class="user-info">
            <ed-icon style="width: 132px; height: 132px;" icon-name="icon-user-head"></ed-icon>
            <div class="nike-name">{{ userInfo.name }}</div>
            <div class="phone">{{ handleMobile(userInfo.mobile) }}</div>
          </div>
          <div class="page-item item1">
            <div class="works">
              <div class="total">12</div>
              <span>我的作品</span>
            </div>
            <div class="like">
              <div class="total">68</div>
              <span>我的喜欢</span>
            </div>
          </div>
        </div>
      </div>
      <div class="page-item item2">
        <div class="all-order">
          <ed-icon icon-name="icon-my-order"></ed-icon>
          <span>全部订单</span>
        </div>
        <div class="sign">
          <ed-icon icon-name="icon-my-sign"></ed-icon>
          <span>我的签名</span>
        </div>
        <div class="foot-print">
          <ed-icon icon-name="icon-study-foot"></ed-icon>
          <span>学习足迹</span>
        </div>
      </div>
      <div class="page-item item3">
        <ul>
          <li>
            <div class="left">
              <ed-icon icon-name="icon-about"></ed-icon>
              <span>关于我们</span>
            </div>
            <ed-icon icon-name="icon-common-more" style="width: 28px; height: 28px;"></ed-icon>
          </li>
          <li>
            <div class="left">
              <ed-icon icon-name="icon-write"></ed-icon>
              <span>反馈建议</span>
            </div>
            <ed-icon icon-name="icon-common-more" style="width: 28px; height: 28px;"></ed-icon>
          </li>
          <li>
            <div class="left">
              <ed-icon icon-name="icon-mine-setting"></ed-icon>
              <span>系统设置</span>
            </div>
            <ed-icon icon-name="icon-common-more" style="width: 28px; height: 28px;"></ed-icon>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, reactive, toRefs} from "vue";
import {useStore} from "vuex";
import EdStatusBar from "@/components/common/ed-status-bar";

export default {
  components: {EdStatusBar},
  setup() {
    const store = useStore();
    const state = reactive({
      userInfo: computed(() => store.state.appStore.userInfo)
    })

    const handleMobile = (val) => {
      return val.split("").reduce((acc, cur, idx) => acc += (idx >= 3 && idx < 7) ? "*" : cur);
    }

    return {
      ...toRefs(state),
      handleMobile
    }
  }
}
</script>


<style lang="scss" scoped>
.page-mine {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header-wrap {
    background: url("~@/assets/img/bg-mine-header.png") no-repeat top center;
    background-size: cover;

    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 472px;
      width: 100vw;

      .h-message {
        position: absolute;
        top: 24px;
        right: 32px;
      }

      .user-info {
        position: absolute;
        top: 54px;
        font-size: 32px;
        color: #ffffff;
        text-align: center;
        //.user-image {
        //  width: 132px;
        //  height: 132px;
        //}
        .nike-name {
          margin-top: 22px;
          font-weight: 600;
        }

        .phone {
          margin-top: 6px;
          font-size: 28px;
        }
      }
    }
  }
}


.page-item {
  display: flex;
  width: 686px;
  padding: 32px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #f5f5f5;
  //box-shadow: 0px 0px 10px #f0f0f0;
  &.item1 {
    box-sizing: border-box;
    left: 50%;
    margin-left: -343px;
    padding: 36px;
    position: absolute;
    bottom: -66px;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 118px;

    .works, .like {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 24px;

      .total {
        font-size: 48px;
        font-weight: bold;
      }

      span {
        margin-top: 16px;
      }
    }

  }

  &.item2 {
    margin-top: 98px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 118px;
    align-items: center;
    justify-content: center;

    .all-order, .sign, .foot-print {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 24px;

      span {
        margin-top: 16px;
      }
    }
  }

  &.item3 {
    margin-top: 32px;

    ul {
      width: 100%;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;
        color: #18191A;

        .left {
          display: flex;
          align-items: center;
        }

        &:not(:first-child) {
          margin-top: 50px;
        }

        span {
          margin-left: 24px;
        }
      }
    }
  }
}

//.flex {
//  display: flex;
//  justify-content: space-around;
//  align-items: center;
//  text-align: center;
//}

.order {
  margin-top: 98px;
}

.image {
  width: 48px;
  height: 48px;
}

.about {
  box-sizing: border-box;
  margin-top: 32px;
  height: 310px;
  width: 686px;
  padding: 36px 32px;
}

.flex-center {
  display: flex;
  align-items: center;
}

.explain {
  margin-bottom: 50px;
}

</style>