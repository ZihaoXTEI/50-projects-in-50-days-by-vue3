<template>
  <div id="page">
    <div class="container">
      <template v-for="item in imageData" :key="item.index">
        <div
          class="panel"
          :class="{ active: item.index === currentIndex }"
          :style="{ backgroundImage: `url(${item.imageUrl})` }"
          @click="handleClick(item.index)"
        >
          <h3>{{ item.name }}</h3>
        </div>
      </template>

      <back-home></back-home>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'expanding-cards',
  setup() {
    const currentIndex = ref(1)
    const imageData = ref([
      {
        index: 1,
        imageUrl:
          'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo',
        name: 'NASA'
      },
      {
        index: 2,
        imageUrl:
          'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',
        name: 'Andrew Ridley'
      },
      {
        index: 3,
        imageUrl:
          'https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU',
        name: 'William Hook'
      },
      {
        index: 4,
        imageUrl:
          'https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII',
        name: 'Eagle'
      },
      {
        index: 5,
        imageUrl:
          'https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE',
        name: 'New York Central Park'
      }
    ])

    const handleClick = (idx) => {
      currentIndex.value = idx
    }

    return {
      imageData,
      currentIndex,
      handleClick
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
.container {
  display: flex;
  width: 90vw;

  .panel {
    height: 80vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    transition: all 700ms ease-in;

    .h3 {
      font-size: 24px;
      position: absolute;
      bottom: 20px;
      left: 20px;
      margin: 0;
      opacity: 0;
    }

    // &:nth-of-type(1) {
    //   background-image: url(https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo);
    // }

    // &:nth-of-type(2) {
    //   background-image: url(https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg);
    // }

    // &:nth-of-type(3) {
    //   background-image: url(https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU);
    // }

    // &:nth-of-type(4) {
    //   background-image: url(https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII);
    // }

    // &:nth-of-type(5) {
    //   background-image: url(https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE);
    // }

    &.active {
      flex: 5;
    }

    &.active h3 {
      opacity: 1;
      transition: opacity 0.3s ease-in 0.4s;
    }
  }
}

// 当屏幕小于480px时
@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>
