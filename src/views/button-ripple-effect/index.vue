<template>
  <div id="page">
    <button class="ripple" v-ripple-effect="'circle'">点击我</button>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'button-ripple-effect',
  setup() {
    // const buttonRef = ref()

    // const handleBtnClick = (e) => {
    //   const x = e.clientX
    //   const y = e.clientY

    //   const buttonTop = e.target.offsetTop
    //   const buttonLeft = e.target.offsetLeft

    //   const XInside = x - buttonLeft
    //   const YInside = y - buttonTop

    //   const circle = document.createElement('span')
    //   circle.classList.add('circle')
    //   circle.style.top = YInside + 'px'
    //   circle.style.left = XInside + 'px'

    //   buttonRef.value.appendChild(circle)

    //   setTimeout(() => circle.remove(), 500)
    // }

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
  font-family: '等线', sans-serif;
  background-color: #333;
  overflow: hidden;
}

.ripple {
  position: relative;
  margin: 10px 0;
  padding: 20px 30px;
  border: 1px solid purple;
  font-size: 14px;
  color: #fff;
  letter-spacing: 2px;
  background-color: purple;
  overflow: hidden;

  &:focus {
    outline: none;
  }
  /deep/ .circle {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%) scale(0);
    animation: scale 0.5s ease-in;
  }
}

@keyframes scale {
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
</style>
