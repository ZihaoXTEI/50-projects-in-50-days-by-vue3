<template>
  <div id="page">
    <button class="magic" @click="isRestore = !isRestore">Magic 🎩</button>

    <div class="boxes" :class="{ big: isRestore }">
      <template v-for="(item, index) in backgroundPositionList" :key="index">
        <div class="box" :style="{ backgroundPosition: item }"></div>
      </template>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: '3d-boxes-background',
  setup() {
    const isRestore = ref(false)
    const backgroundPositionList = ref(initiData())

    return { isRestore, backgroundPositionList }
  }
}

const initiData = () => {
  const list = []
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const position = `${-j * 125}px ${-i * 125}px`
      list.push(position)
    }
  }

  return list
}
</script>

<style lang="less" scoped>
#page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: '等线', sans-serif;
  background-color: #fafafa;
  overflow: hidden;
}

.magic {
  // position: fixed;
  // top: 20px;
  // z-index: 100;
  margin-bottom: 20px;
  padding: 12px 20px;
  border: 0;
  border-radius: 3px;
  background-color: #f9ca24;
  box-shadow: 0 3px rgba(249, 202, 36, 0.5);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: none;
    transform: translateY(2px);
  }
}

.boxes {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 500px;
  height: 500px;
  transition: 0.4s ease;

  &.big {
    width: 600px;
    height: 600px;

    .box {
      transform: rotateZ(360deg);
    }
  }
}

.box {
  position: relative;
  width: 125px;
  height: 125px;
  background: url('https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif')
    no-repeat;
  background-size: 500px 500px;
  transition: 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 8px;
    width: 100%;
    height: 15px;
    background-color: #f9ca24;
    transform: skewX(45deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 8px;
    right: -15px;
    width: 15px;
    height: 100%;
    background-color: #f6e58d;
    transform: skewY(45deg);
  }
}
</style>
