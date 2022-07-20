<template>
  <div
    id="page"
    :style="{ 'background-image': `url(${images[currentIndex]})` }"
  >
    <div class="slider-container">
      <template v-for="(image, index) in images" :key="index">
        <div
          class="slide"
          :style="{ 'background-image': `url(${image})` }"
          :class="{ active: index === currentIndex }"
        ></div>
      </template>

      <button class="arrow left-arrrow" @click="handleBtnClick(-1)">左</button>
      <button class="arrow right-arrrow" @click="handleBtnClick(1)">右</button>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

import { ImageList } from './config'

export default {
  name: 'background-slider',
  setup() {
    const images = reactive(ImageList)
    const currentIndex = ref(0)

    const handleBtnClick = (flag) => {
      const imagesLength = images.length
      if (flag == 1) {
        currentIndex.value = (currentIndex.value + 1) % imagesLength
      } else {
        currentIndex.value = currentIndex.value - 1

        if (currentIndex.value < 0) {
          currentIndex.value = imagesLength - 1
        }
      }
    }
    return {
      images,
      currentIndex,
      handleBtnClick
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  transition: 0.4s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    // z-index: -1;
  }
}

.slider-container {
  position: relative;
  width: 70vw;
  height: 70vh;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;

  .slide {
    position: absolute;
    top: -15vh;
    left: -15vw;
    width: 100vw;
    height: 100vh;
    background-position: center center;
    background-size: cover;
    opacity: 0;
    z-index: 1;
    transition: 0.4s ease;

    &.active {
      opacity: 1;
    }
  }

  .arrow {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    border: 2px solid rgba(255, 97, 0, 0.4);
    border-radius: 50%;
    font-size: 18px;
    color: #fff;
    background-color: rgba(255, 97, 0, 0.3);
    cursor: pointer;

    &:focus {
      outline: 0;
    }

    &.left-arrrow {
      left: calc(15vw - 65px);
    }

    &.right-arrrow {
      right: calc(15vw - 65px);
    }
  }
}
</style>
