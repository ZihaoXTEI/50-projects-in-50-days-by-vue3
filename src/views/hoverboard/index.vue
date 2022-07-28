<template>
  <div id="page">
    <div class="container">
      <template v-for="index in SQUARES" :key="index">
        <div
          class="square"
          :ref="setBlockRef"
          @mouseover="setColor(index)"
          @mouseout="removeColor(index)"
        ></div>
      </template>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'hover-board',
  setup() {
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
    const SQUARES = ref(1000)
    let blockRefList = []

    // v-for 中的 Ref 数组
    // https://v3.cn.vuejs.org/guide/migration/array-refs.html#%E8%BF%81%E7%A7%BB%E7%AD%96%E7%95%A5
    const setBlockRef = (el) => {
      if (el) {
        blockRefList.push(el)
      }
    }

    const getRandomColor = () => {
      return colors[Math.floor(Math.random() * colors.length)]
    }

    const setColor = (index) => {
      const color = getRandomColor()
      blockRefList[index - 1].style.background = color
      blockRefList[
        index - 1
      ].style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    const removeColor = (index) => {
      blockRefList[index - 1].style.background = '#1d1d1d'
      blockRefList[index - 1].style.boxShadow = '0 0 2px #000'
    }
    return {
      SQUARES,
      setBlockRef,
      setColor,
      removeColor
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: #111;
  overflow: hidden;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;

  .square {
    width: 16px;
    height: 16px;
    margin: 2px;
    background-color: #1d1d1d;
    box-shadow: 0 0 2px #000;
    transition: all 2s ease;

    &:hover {
      transition-duration: 0s;
    }
  }
}
</style>
