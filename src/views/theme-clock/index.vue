<template>
  <div id="page" :class="{ dark: isDark }">
    <button class="toggle" @click="handleToggleClick">暗黑模式</button>

    <div class="clock-container">
      <div class="clock">
        <div class="needle hour" ref="hourRef"></div>
        <div class="needle minute" ref="minuteRef"></div>
        <div class="needle second" ref="secondRef"></div>
        <div class="center-point"></div>
      </div>

      <div class="time">{{ currentTime }}</div>
      <div class="date">
        {{ currentDate }}
        <!-- <span class="circle"></span> -->
      </div>
    </div>
    <back-home></back-home>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'

import { scale } from '@/utils'

export default {
  name: 'theme-clock',
  setup() {
    const days = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    ]
    const months = [
      '1 月',
      '2 月',
      '3 月',
      '4 月',
      '5 月',
      '6 月',
      '7 月',
      '8 月',
      '9 月',
      '10月',
      '11月',
      '12月'
    ]

    const currentTime = ref('')
    const currentDate = ref('')
    const isDark = ref(false)
    const hourRef = ref(null)
    const minuteRef = ref(null)
    const secondRef = ref(null)
    let timer = null

    onMounted(() => {
      setTimeOut()

      timer = setInterval(setTimeOut, 1000)
    })

    onUnmounted(() => {
      clearTimeout(timer)
    })

    const handleToggleClick = () => {
      isDark.value = !isDark.value
    }

    const setTimeOut = () => {
      let time = new Date()
      const month = time.getMonth()
      const day = time.getDay()
      const date = time.getDate()
      const hours = time.getHours()
      const hoursForClock = hours >= 13 ? hours % 12 : hours
      const minutes = time.getMinutes()
      const seconds = time.getSeconds()
      const ampm = hours >= 12 ? 'PM' : 'AM'

      hourRef.value.style.transform = `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        12,
        0,
        360
      )}deg)`
      minuteRef.value.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        60,
        0,
        360
      )}deg)`
      secondRef.value.style.transform = `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        60,
        0,
        360
      )}deg)`

      currentTime.value = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      } ${ampm}`

      currentDate.value = `${days[day]}  ${months[month]} ${date}日`
    }

    return {
      currentTime,
      currentDate,
      isDark,

      hourRef,
      minuteRef,
      secondRef,

      handleToggleClick
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
  font-family: '等线', sans-serif;
  overflow: hidden;
  --primary-color: #000;
  --secondary-color: #fff;

  &.dark {
    --primary-color: #fff;
    --secondary-color: #333;

    color: var(--primary-color);
    background-color: #111;
  }
}

.toggle {
  // position: absolute;
  // top: 100px;
  margin-bottom: 20px;
  padding: 8px 12px;
  border: 0;
  border-radius: 4px;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

.clock-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .clock {
    position: relative;
    width: 220px;
    height: 220px;
    border: 1px solid var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
    border-radius: 50%;

    .needle {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 3px;
      height: 65px;
      background-color: var(--primary-color);
      transform-origin: bottom center;
      // transition: all 0.5s ease-in;

      &.hour {
        transform: translate(-50%, -100%) rotate(0deg);
      }

      &.minute {
        height: 100px;
        transform: translate(-50%, -100%) rotate(0deg);
      }

      &.second {
        height: 100px;
        background-color: #e74c3c;
        transform: translate(-50%, -100%) rotate(0deg);
      }
    }

    .center-point {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #e74c3c;
      transform: translate(-50%, -50%);

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: var(--primary-color);
        transform: translate(-50%, -50%);
      }
    }
  }

  .time {
    font-size: 60px;
  }

  .date {
    font-size: 14px;
    letter-spacing: 0.3px;
    color: #aaa;
    text-transform: uppercase;

    .circle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      line-height: 18px;
      border-radius: 50%;
      font-size: 12px;
      color: var(--secondary-color);
      background-color: var(--primary-color);
      transition: all 0.5s ease-in;
    }
  }
}
</style>
