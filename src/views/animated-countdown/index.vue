<template>
  <div id="page">
    <div class="counter" :class="{ hide: isShowReplay }">
      <div class="nums">
        <span class="in">3</span>
        <span>2</span>
        <span>1</span>
        <span>0</span>
      </div>
      <h4>Get Ready</h4>
    </div>

    <div class="final" :class="{ show: isShowReplay }">
      <h1>GO</h1>
      <button class="replay" @click="handleReplayClick">
        <span>Replay</span>
      </button>
    </div>
    <back-home></back-home>
  </div>
</template>

<script>
// import { ref } from 'vue'

import { onMounted, ref } from 'vue'

export default {
  name: 'animated-countdown',
  setup() {
    const isShowReplay = ref(false)
    let nums = null

    onMounted(() => {
      nums = document.querySelectorAll('.nums span')

      runAnimation()
    })

    const runAnimation = () => {
      nums.forEach((num, index) => {
        const nextToLast = nums.length - 1

        num.addEventListener('animationend', (e) => {
          if (e.animationName.includes('goIn') && index !== nextToLast) {
            num.classList.remove('in')
            num.classList.add('out')
          } else if (
            e.animationName.includes('goOut') &&
            num.nextElementSibling
          ) {
            num.nextElementSibling.classList.add('in')
          } else {
            isShowReplay.value = true
          }
        })
      })
    }

    const handleReplayClick = () => {
      isShowReplay.value = false
      nums.forEach((num) => {
        num.classList.value = ''
      })

      nums[0].classList.add('in')
      runAnimation()
    }
    return {
      isShowReplay,
      handleReplayClick
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  height: 100vh;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
}

h4 {
  margin: 5px;
  font-size: 20px;
  text-transform: uppercase;
}

.counter {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  &.hide {
    transform: translate(-50%, -50%) scale(0);
    animation: hide 0.2s ease-out;
  }
}

@keyframes hide {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    transform: translate(-50%, -50%) scale(0);
  }
}

.nums {
  position: relative;
  width: 250px;
  height: 50px;
  font-size: 50px;
  color: #3498db;
  overflow: hidden;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: bottom center;
    transform: translate(-50%, -50%) rotate(120deg);

    &.in {
      transform: translate(-50%, -50%) rotate(0deg);
      animation: goIn 0.5s ease-in-out;
    }

    &.out {
      animation: goOut 0.5s ease-in-out;
    }
  }
}

// 数字进入、离开动画
@keyframes goIn {
  0% {
    transform: translate(-50%, -50%) rotate(120deg);
  }

  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}

@keyframes goOut {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(20deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
}

.final {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  text-align: center;

  &.show {
    transform: translate(-50%, -50%) scale(1);
    animation: show 0.2s ease-out;
  }
}

@keyframes show {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }

  30% {
    transform: translate(-50%, -50%) scale(1.4);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

// 重置按钮样式
.replay {
  display: inline-block;
  padding: 5px;
  border: none;
  border-radius: 3px;
  background-color: #3498db;
  color: aliceblue;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  span {
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;

    &::after {
      content: '\00bb';
      position: absolute;
      top: 0;
      right: -20px;
      opacity: 0;
      transition: 0.5s;
    }
  }

  &:hover span {
    padding-right: 25px;

    &::after {
      opacity: 1;
      right: 0;
    }
  }
}
</style>
