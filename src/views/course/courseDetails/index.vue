<template>
  <div>
  <div class="page-content">
    <div class="c-gallery"></div>
    <div class="c-wrap">
      <h3 class="c-title">静夜思古诗书法课</h3>
      <p class="c-content">通过古诗词书法练习，这里展示的是课件描述，通过古诗词书法练习，这里展示的是课件描述。</p>
    </div>

    <!-- 诗词语句 -->
    <ul class="poem-str">
      <li v-for="(word, i) in words" :class="i === 0?'current': ''" :key="i">
        <span>{{ pinyin[i][0] }}</span>
        <span class="chart">{{ word }}</span>
      </li>
    </ul>

    <div class="page-card-wrap">
      <PageCard title="说解文字">
        <div class="c-content">
          <div class="part01 img"></div>
          <ul class="part01 desc">
            <li>拼音：hé</li>
            <li>解释：和谐、和蔼、和平</li>
            <li>英文：peace</li>
          </ul>
        </div>
      </PageCard>
      <PageCard title="字体演进">
        <div class="c-content">
          <div class="part02"></div>
        </div>
      </PageCard>
      <PageCard title="书写与教学">
        <div class="c-content">
          <div class="part03"></div>
        </div>
      </PageCard>
    </div>
  </div>
  </div>
</template>

<script>
import pinyin from "pinyin";
import PageCard from "./components/p-card";


export default {
  components: {PageCard},
  data() {
    return {
      words: "床前明月光"
    }
  },
  computed: {
    pinyin() {
      return pinyin(this.words, {
        heteronym: true,
        segment: true
      })
    }
  }
}


</script>

<style scoped lang="scss">
.page-content {
  .c-gallery {
    height: 750px;
    background-color: #C0C7CC;
  }

  .c-wrap {
    height: 192px;
    background-color: #FFFFFF;
    padding: 24px 30px;
    box-sizing: border-box;

    .c-title {
      font-size: 34px;
    }

    .c-content {
      margin-top: 16px;
      font-size: 28px;
      color: #84898C;
      line-height: 1.6;
    }
  }

  .poem-str {
    margin-top: 20px;
    padding: 0 94px;
    box-sizing: border-box;
    height: 128px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;

    li {
      padding: 18px 0 0 0;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .chart {
        padding: 0 6px 18px 6px;
      }

      &.current {
        color: #26A5FF;

        .chart {
          border-bottom: 4px solid #26A5FF;
        }
      }
    }
  }

  .page-card-wrap {
    margin: 30px;

    .c-content {
      padding: 48px 30px 30px;
      box-sizing: border-box;

      .part01 {
        &.img {
          width: 240px;
          height: 240px;
          background-color: #CCCCCC;
          margin: 0 auto;
        }

        &.desc {
          margin-top: 24px;
        }
      }

      .part02 {
        height: 458px;
      }

      .part03 {
        height: 690px;
      }
    }
  }

}
</style>