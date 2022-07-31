<template>
  <div id="page">
    <h1 class="title">随机图片生成器</h1>

    <div class="container">
      <template v-for="index in rows" :key="index">
        <img :src="`${unsplashURL}${getRandomSize()}`" alt="" />
      </template>
    </div>
    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'random-image-generator',
  setup() {
    const unsplashURL = 'https://source.unsplash.com/random/'
    const rows = ref(3 * 5)

    const getRandomSize = () => {
      return `${getRandomNr()}x${getRandomNr()}}`
    }

    const getRandomNr = () => {
      return Math.floor(Math.random() * 10) + 300
    }
    return { unsplashURL, rows, getRandomSize }
  }
}
</script>

<style lang="less" scoped>
#page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-family: '华文细黑', sans-serif;
}

.title {
  margin: 10px 0 0;
  text-align: center;
}

.container {
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    width: 300px;
    height: 300px;
    margin: 10px;
    object-fit: cover;
  }
}
</style>
