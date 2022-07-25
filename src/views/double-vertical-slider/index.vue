<template>
  <div id="page">
    <div class="slider-container">
      <!-- 左侧滑块 -->
      <div class="left-slide">
        <transition-group :name="slideDirection">
          <template v-for="(item, index) in imageList" :key="index">
            <div
              v-if="index === activeSlideIndex"
              :style="{ 'background-color': item.backgroundColor }"
            >
              <h1>{{ item.title }}</h1>
              <p>{{ item.desc }}</p>
            </div>
          </template>
        </transition-group>
      </div>

      <!-- 右侧滚动 -->
      <div class="right-slide">
        <transition-group :name="slideDirection">
          <template v-for="(item, index) in imageList" :key="index">
            <div
              v-if="index === activeSlideIndex"
              :style="{ 'background-image': `url(${item.url})` }"
            ></div>
          </template>
        </transition-group>
      </div>

      <!-- 控制按钮 -->
      <div class="action-buttons">
        <button class="down-button" @click="handleChangeSlide('down')">
          DOWN
        </button>
        <button class="up-button" @click="handleChangeSlide('up')">UP</button>
      </div>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

import { ImageList } from './config'

export default {
  name: 'double-vertical-slider',
  setup() {
    const imageList = ref(ImageList)
    const activeSlideIndex = ref(0)
    const slideDirection = ref('slideup')

    // 计算属性反转数组正确做法
    // const imageListReverse = computed(() => imageList.value.slice(0).reverse())

    const handleChangeSlide = (direction) => {
      if (direction === 'up') {
        slideDirection.value = 'slideup'
        activeSlideIndex.value++
        if (activeSlideIndex.value >= imageList.value.length) {
          activeSlideIndex.value = 0
        }
      } else if (direction === 'down') {
        slideDirection.value = 'slidedown'
        activeSlideIndex.value--
        if (activeSlideIndex.value < 0) {
          activeSlideIndex.value = imageList.value.length - 1
        }
      }
    }

    return {
      imageList,
      activeSlideIndex,
      slideDirection,
      handleChangeSlide
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  font-family: '等线', sans-serif;
  height: 100vh;
}

.slider-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.left-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  height: 100%;
  transition: transform 0.5s ease-in-out;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
  }

  h1 {
    margin-top: -30px;
    margin-bottom: 10px;
    font-size: 40px;
  }
}

.right-slide {
  position: absolute;
  top: 0;
  left: 35%;
  width: 65%;
  height: 100%;
  // transition: transform 0.5s ease-in-out;

  > div {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

button {
  padding: 15px;
  border: none;
  color: #aaa;
  font-size: 16px;
  padding: 15px;

  &:hover {
    color: #222;
  }

  &:focus {
    outline: none;
  }
}

.action-buttons button {
  position: absolute;
  left: 35%;
  top: 50%;
  z-index: 100;

  &.down-button {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transform: translateX(-100%);
  }

  &.up-button {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transform: translateY(-100%);
  }
}

// 使用Vue的过渡效果
.slideup-enter-active,
.slideup-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slideup-enter-to,
.slideup-leave-to {
  transform: translateY(-100%);
}

.slidedown-enter-active,
.slidedown-leave-active {
  transition: transform 2s ease-in-out;
}

.slidedown-enter-from {
  transform: translateY(-200%);
}
.slidedown-enter-to {
  transform: translateY(-100%);
}
.slidedown-leave-to {
  transform: translateY(100%);
}
</style>
