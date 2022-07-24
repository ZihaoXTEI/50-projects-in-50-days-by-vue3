<template>
  <div id="page">
    <div class="kinetic"></div>
    sss
    <back-home></back-home>
  </div>
</template>

<script>
export default {
  name: 'kinetic-loader',
  setup() {
    return {}
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
  background-color: #2c3e50;
  overflow: hidden;
}

.kinetic {
  position: relative;
  height: 80px;
  width: 80px;
}

.kinetic::before,
.kinetic::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  border: 50px solid transparent;
  border-bottom-color: #fff;
  // animation:动画名称 动画持续时间 动画函数 动画延迟间隔 动画播放次数（infinite：无限） 是否轮流反向播放动画 动画不播放时样式 指定动画状态
  animation: rotateA 2s linear infinite 0.5s;
}

.kinetic::before {
  transform: rotate(90deg);
  animation: rotateB 2s linear infinite;
}

@keyframes rotateA {
  0%,
  25% {
    transform: rotate(0deg);
  }

  50%,
  75% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotateB {
  0%,
  25% {
    transform: rotate(90deg);
  }

  50%,
  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(450deg);
  }
}
</style>
