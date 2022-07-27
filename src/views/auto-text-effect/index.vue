<template>
  <div id="page">
    <h1>{{ rollText }}</h1>

    <div class="operation">
      <label for="speed">滚动速度:</label>
      <input
        type="number"
        name="speed"
        v-model="speed"
        min="1"
        max="10"
        step="1"
      />
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'auto-text-effect',
  setup() {
    const text = 'JavaScript 是世界上最好的语言！❤'
    let index = 1
    let timer = null
    const rollText = ref('')
    const speed = ref(5)

    onMounted(() => {
      setRollSpeed()
    })

    onUnmounted(() => {
      clearTimeout(timer)
    })

    const setRollSpeed = () => {
      rollText.value = text.slice(0, index)

      index = ++index > text.length ? 1 : index

      console.log(speed.value)
      // index++
      // if (index > text.length) {
      //   index = 1
      // }

      timer = setTimeout(setRollSpeed, 300 / speed.value)
    }

    return {
      rollText,
      speed
    }
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
  font-family: '华文细黑', sans-serif;
  background-color: #d7ccc8;
  overflow: hidden;
}

.operation {
  position: absolute;
  bottom: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 18px;
  color: #212121;
  background-color: #bdbdbd;

  input[type='number'] {
    width: 50px;
    padding: 5px;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    background-color: #795548;
    text-align: center;

    &:focus {
      outline: none;
    }
  }
}
</style>
