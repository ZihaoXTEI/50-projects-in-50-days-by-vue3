<template>
  <div id="page">
    <section
      class="bg"
      :style="{ 'background-image': `url(${imageUrl})`, filter: imageFilter }"
    ></section>
    <div class="loading-text" :style="{ opacity: loadTextOpacity }">
      {{ loadText }}%
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'blurry-loading',
  props: {
    imageUrl: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80'
    }
  },
  setup() {
    const loadText = ref(0)
    const loadTextOpacity = ref(1)
    const imageFilter = ref('1px')

    onMounted(() => {
      const blurring = () => {
        loadText.value++

        if (loadText.value > 99) {
          clearInterval(interval)
        }

        // opacity：透明度，范围[0,1],默认值：1（不透明）
        loadTextOpacity.value = scale(loadText.value, 0, 100, 1, 0)
        // filter 滤镜效果，使用blur()函数实现高斯模糊，默认值：0，单位px
        imageFilter.value = `blur(${scale(loadText.value, 0, 100, 30, 0)}px)`
      }

      const interval = setInterval(blurring, 30)
    })

    // 将给定范围的数字映射到另一个范围数字
    const scale = (number, inMin, inMax, outMin, outMax) => {
      return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
    }
    return {
      loadText,
      loadTextOpacity,
      imageFilter
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.bg {
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: center/cover;
  filter: blur(0px);
  z-index: -1;
}

.loading-text {
  font-size: 50px;
  color: #fff;
}
</style>
