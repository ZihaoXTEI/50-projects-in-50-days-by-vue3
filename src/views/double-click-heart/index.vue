<template>
  <div id="page">
    <h3>双击图像以<i class="iconfont icon-xihuan"></i>它</h3>
    <small>
      你喜爱它 <span>{{ times }}</span> 次
    </small>

    <div class="loveMe" @dblclick="handleHeartClick">
      <i class="iconfont icon-xihuan" v-show="isDoubleClick"></i>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'double-click-heart',
  setup() {
    const times = ref(0)
    const isDoubleClick = ref(false)

    const handleHeartClick = () => {
      // 最好添加节流
      times.value++
      isDoubleClick.value = true

      let timer = setTimeout(() => {
        isDoubleClick.value = false
        clearTimeout(timer)
      }, 1000)
    }
    return {
      times,
      isDoubleClick,
      handleHeartClick
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  margin: 0;
  font-family: '等线', san1;
  text-align: center;
  overflow: hidden;
}

h3 {
  margin-bottom: 0;
  font-size: 2rem;
  text-align: center;

  .icon-xihuan {
    font-size: 2rem;
    color: #f44336;
  }
}

small {
  display: block;
  margin-bottom: 20px;
  font-size: 1.8rem;
  text-align: center;
}

.loveMe {
  max-width: 100%;
  width: 300px;
  height: 440px;
  position: relative;
  margin: auto;
  background: url('https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
    no-repeat center center/cover;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;

  .icon-xihuan {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #f44336;
    animation: grow 0.6s linear;
    transform: translate(-50%, -50%) scale(0);
  }
}

@keyframes grow {
  to {
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
  }
}
</style>
