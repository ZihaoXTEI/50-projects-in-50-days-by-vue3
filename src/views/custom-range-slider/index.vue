<template>
  <div id="page">
    <h2>自定义滑块范围</h2>

    <div class="range-container">
      <input
        type="range"
        min="0"
        max="100"
        id="range"
        v-model="rangeValue"
        @input="handleRangeInput"
      />
      <label for="range">{{ rangeValue }}</label>
    </div>
    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

import { scale } from '@/utils'

export default {
  name: 'custom-range-slider',
  setup() {
    const rangeValue = ref(50)

    const handleRangeInput = (e) => {
      const label = e.target.nextElementSibling

      const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
      const labelWidth = getComputedStyle(label).getPropertyValue('width')

      // '300px'  -->  300
      const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2)
      const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2)

      const max = +e.target.max
      const min = +e.target.min

      const left =
        rangeValue.value * (numWidth / max) -
        numLabelWidth / 2 +
        scale(rangeValue.value, min, max, 10, -10)

      label.style.left = `${left}px`
    }
    return {
      rangeValue,
      handleRangeInput
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
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: '华文细黑', sans-serif;
  overflow: hidden;
}

h2 {
  margin-top: 10px;
  margin-bottom: 100px;
}

.range-container {
  position: relative;
}

input[type='range'] {
  width: 300px;
  margin: 18px 0;
  appearance: none;

  &:focus {
    outline: none;
  }

  & + label {
    position: absolute;
    top: -25px;
    left: 110px;
    width: 80px;
    padding: 5px 0;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    font-size: 18px;
    text-align: center;
  }
}

/* Chrome & Safari */
input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  border-radius: 4px;
  background-color: purple;
  cursor: pointer;
}

input[type='range']::-webkit-slider-thumb {
  width: 24px;
  height: 24px;
  margin-top: -7px;
  border: 1px solid purple;
  border-radius: 50%;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
}

/* Firefox */
input[type='range']::-moz-range-track {
  width: 100%;
  height: 13px;
  border-radius: 4px;
  background-color: purple;
  cursor: pointer;
}

input[type='range']::-moz-range-thumb {
  width: 24px;
  height: 24px;
  margin-top: -7px;
  border: 1px solid purple;
  border-radius: 50%;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
}
</style>
