<template>
  <div id="page">
    <div class="carousel">
      <!-- 轮播图区域 -->
      <div class="image-container">
        <transition-group name="carousel">
          <!-- v-show="item.id === activeIndex" -->
          <template v-for="item in imageList" :key="item.id">
            <img
              :src="item.url"
              :alt="item.name"
              v-show="item.id === activeIndex"
            />
          </template>
        </transition-group>
      </div>
      <!-- 按钮区域 -->
      <div class="buttons-container">
        <button class="btn" @click="handleBtnClick('prev')">上一张</button>
        <button class="btn" @click="handleBtnClick('next')">下一张</button>
      </div>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref } from 'vue'

import { ImageList } from './config'

export default {
  name: 'image-carousel',
  setup() {
    const imageList = reactive(ImageList)
    const activeIndex = ref(0)
    let timer = null

    onMounted(() => {
      timer = setInterval(() => {
        activeIndex.value++
        changeImage()
      }, 2000)
    })

    onUnmounted(() => {
      clearInterval(timer)
    })

    const changeImage = () => {
      if (activeIndex.value > imageList.length - 1) {
        activeIndex.value = 0
      } else if (activeIndex.value < 0) {
        activeIndex.value = imageList.length - 1
      }
    }

    const resetInterval = () => {
      clearInterval(timer)
      timer = setInterval(() => {
        activeIndex.value++
        changeImage()
      }, 2000)
    }

    const handleBtnClick = (direction) => {
      if (direction === 'prev') {
        activeIndex.value--
      } else if (direction === 'next') {
        activeIndex.value++
      }
      changeImage()
      resetInterval()
    }

    return {
      imageList,
      activeIndex,
      handleBtnClick
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
  font-family: '华文细黑', sans-serif;
}

.carousel {
  width: 500px;
  height: 530px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  .image-container {
    display: flex;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;

    img {
      width: 500px;
      height: 500px;
      object-fit: cover;
    }
  }
}

.buttons-container {
  display: flex;
  justify-content: space-between;

  .btn {
    width: 49.5%;
    padding: 0.5em;
    border: none;
    color: #fff;
    background-color: #009688;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    &:focus {
      outline: none;
    }
  }
}

.carousel-enter-active,
.carousel-leave-active {
  transition: transform 0.5s ease-in-out;
}

// .carousel-enter-to,
// .carousel-leave-from {
//   transform: translateX(100%) scale(1);
// }

.carousel-enter-from,
.carousel-leave-to {
  transform: translateX(500px);
}
</style>
