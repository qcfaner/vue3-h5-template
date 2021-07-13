<!-- 日历组件封装 -->
<template>
  <div class="ed-calendar">
    <ul class="c-wrap">
      <li :class="['c-item', current === 28? 'today': '']" @click="clickDay(28)"><span class="week">日</span><span class="day">28</span></li>
      <li :class="['c-item', current === 29? 'today': '']" @click="clickDay(29)"><span class="week">一</span><span class="day">29</span></li>
      <li :class="['c-item', current === 30? 'today': '']" @click="clickDay(30)"><span class="week">二</span><span class="day">30</span></li>
      <li :class="['c-item', current === 1? 'today': '']" @click="clickDay(1)"><span class="week">三</span><span class="day">今天</span></li>
      <li :class="['c-item', current === 2? 'today': '']" @click="clickDay(2)"><span class="week">四</span><span class="day">2</span></li>
      <li :class="['c-item', current === 3? 'today': '']" @click="clickDay(3)"><span class="week">五</span><span class="day">3</span></li>
      <li :class="['c-item', current === 4? 'today': '']" @click="clickDay(4)"><span class="week">六</span><span class="day">4</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {

  },
  data(){
    return {
      current: 1
    }
  },
  methods: {
    clickDay(clickDay){
      this.current = clickDay
    }
  }
}
</script>

<style scoped lang="scss">
.ed-calendar {
  margin-top: 32px;
  .c-wrap {
    display: flex;
    justify-content: space-between;
    .c-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .week {
        font-size: 26px;
        color: #84898C;
      }
      .day {
        height: 88px;
        margin-top: 5px;
        font-size: 32px;
        color: #18191A;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &.today {
        .day {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          background-color: #26A5FF;
          color: #FFFFFF;
        }
      }
    }
  }
}
</style>