<template>
  <div id="page">
    <h1>每日喝水量计算</h1>
    <h3>目标: 2 升</h3>

    <div class="cup">
      <!-- v-show="remained > 0" -->
      <div class="remained" :class="{ hidden: remained <= 0 }">
        <span>{{ remained }}L</span>
        <small>剩余</small>
      </div>
      <!-- v-show="percentage > 0" -->
      <div
        class="percentage"
        :class="{ hidden: percentage <= 0 }"
        :style="{ height: percentageHeight }"
      >
        {{ percentage }}%
      </div>
    </div>

    <p class="text">选择你喝了多少杯水</p>

    <div class="cups">
      <template v-for="n in smallCupTotal" :key="n">
        <div
          class="cup cup-small"
          :class="{ full: n <= smallCupIndex }"
          @click="handleCupClick(n)"
        >
          250 ml
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'drink-water',
  setup() {
    const remained = ref(2)
    const percentage = ref(0)
    const smallCupIndex = ref(0)
    const smallCupTotal = ref(8)
    const percentageHeight = ref('0px')

    const handleCupClick = (n) => {
      if (n === smallCupIndex.value) {
        smallCupIndex.value--
      } else {
        smallCupIndex.value = n
      }

      console.log(smallCupIndex.value)

      // 计算完成百分率
      percentage.value = (smallCupIndex.value / smallCupTotal.value) * 100
      // 计算百分比高度
      percentageHeight.value = `${
        (smallCupIndex.value / smallCupTotal.value) * 330
      }px`
      // 计算剩余升数
      remained.value = 2 - (250 * smallCupIndex.value) / 1000
    }

    return {
      remained,
      percentage,
      smallCupIndex,
      smallCupTotal,
      percentageHeight,
      handleCupClick
    }
  }
}
</script>

<style lang="less" scoped>
@border-color: #144fc6;
@fill-coler: #6ab3f8;

#page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: '等线', sans-serif;
  color: #fff;
  background-color: #3494e4;
}

h1 {
  margin: 10px 0 0;
}

h3 {
  margin: 10px 0;
  font-weight: 400;
}

.cup {
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 330px;
  margin: 30px 0;
  border: 4px solid @border-color;
  border-radius: 0 0 40px 40px;
  color: @border-color;
  background-color: #fff;
  overflow: hidden;

  &.cup-small {
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 95px;
    margin: 5px;
    border-radius: 0 0 15px 15px;
    font-size: 14px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    transition: 0.3s ease;

    &.full {
      color: #fff;
      background-color: @fill-coler;
    }
  }
}

.cups {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 280px;
}

.remained {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  transition: 0.3s ease;

  span {
    font-size: 20px;
    font-weight: bold;
  }

  small {
    font-size: 12px;
  }
}

.hidden {
  visibility: hidden;
  height: 0;
}

.percentage {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0;
  font-size: 30px;
  font-weight: bold;
  background-color: @fill-coler;
  transition: 0.3s ease;
}

.text {
  margin: 0 0 5px;
  text-align: center;
}
</style>
