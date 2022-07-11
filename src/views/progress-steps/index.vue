<template>
  <div class="container">
    <div class="progress-container">
      <div class="progress" :style="{ width: progressWidth }"></div>

      <!-- <div class="circle">1</div>
      <div class="circle">2</div>
      <div class="circle">3</div>
      <div class="circle">4</div> -->

      <template v-for="(item, index) in stepData" :key="index">
        <div class="circle" :class="{ active: index <= currentActive }">
          {{ index + 1 }}
        </div>
      </template>
    </div>

    <button class="btn" @click="handlePrevClick" :disabled="isPrevDisabled">
      上一步
    </button>
    <button class="btn" @click="handleNextClick" :disabled="isNextDisabled">
      下一步
    </button>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'progress-steps',
  props: {
    stepData: {
      type: Array,
      default: () => [
        { title: '步骤一' },
        { title: '步骤二' },
        { title: '步骤三' },
        { title: '步骤四' }
      ]
    }
  },
  setup(props) {
    // 当前步骤
    const currentActive = ref(0)
    const isPrevDisabled = ref(false)
    const isNextDisabled = ref(false)
    const progressWidth = ref('0%')

    // 上一步事件
    const handlePrevClick = () => {
      currentActive.value--

      if (currentActive.value < 0) {
        currentActive.value = 0
      }

      update()
    }

    // 下一步事件
    const handleNextClick = () => {
      currentActive.value++

      if (currentActive.value >= props.stepData.length) {
        currentActive.value = props.stepData.length - 1
      }

      update()
    }

    const update = () => {
      // 计算出进度条长度
      progressWidth.value =
        (currentActive.value / (props.stepData.length - 1)) * 100 - 5 + '%'

      // 更新按钮状态
      if (currentActive.value === 0) {
        isPrevDisabled.value = true
      } else if (currentActive.value === props.stepData.length - 1) {
        isNextDisabled.value = true
      } else {
        isPrevDisabled.value = false
        isNextDisabled.value = false
      }
    }

    return {
      currentActive,
      isPrevDisabled,
      isNextDisabled,
      progressWidth,
      handlePrevClick,
      handleNextClick
    }
  }
}
</script>

<style lang="less" scoped>
@border-fill: #3498db;
@border-empty: #e0e0e0;

.container {
  text-align: center;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: @border-empty;
    transform: translateY(-50%);
    z-index: -1;
  }

  .progress {
    position: absolute;
    top: 50%;
    left: 0;
    height: 4px;
    width: 0%;
    background-color: @border-fill;
    transform: translateY(-50%);
    z-index: -1;
    transition: 0.4s ease;
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border: 3px solid @border-empty;
    background-color: #fff;
    color: #999;
    border-radius: 50%;
    transition: 0.4s ease;

    &.active {
      border-color: @border-fill;
    }
  }
}

.btn {
  margin: 5px;
  padding: 8px 30px;
  border: 0;
  border-radius: 6px;
  font-family: inherit;
  font-size: 14px;
  color: #fff;
  background-color: @border-fill;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    // 设置多个轮廓属性的简写属性
    // outline 不占据空间，绘制于元素内容周围。
    outline: 0;
  }

  &:disabled {
    background-color: @border-empty;
    cursor: not-allowed;
  }
}
</style>
