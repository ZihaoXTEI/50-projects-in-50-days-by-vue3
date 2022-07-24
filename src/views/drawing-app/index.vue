<template>
  <div id="page">
    <canvas id="canvas" width="800" height="700" ref="canvasRef"></canvas>

    <div class="toolbox">
      <button @click="handleDecreaseClick">-</button>
      <span>{{ size }}</span>
      <button @click="handleIncreaseClick">+</button>
      <input type="color" @change="handleColorChange" />
      <button @click="handleClearClick">X</button>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'drawing-app',
  setup() {
    const canvasRef = ref()
    const size = ref(10)
    const color = ref('black')
    let canvasContext = null
    let x = 0,
      y = 0,
      isPressed = false

    onMounted(() => {
      canvasContext = canvasRef.value.getContext('2d')

      canvasRef.value.addEventListener('mousedown', (e) => {
        isPressed = true

        x = e.offsetX
        y = e.offsetY
      })

      document.addEventListener('mouseup', () => {
        isPressed = false

        x = undefined
        y = undefined
      })

      canvasRef.value.addEventListener('mousemove', (e) => {
        if (isPressed) {
          const x2 = e.offsetX
          const y2 = e.offsetY

          drawCircle(x2, y2)
          drawLine(x, y, x2, y2)

          x = x2
          y = y2
        }
      })
    })

    const drawCircle = (x, y) => {
      canvasContext.beginPath()
      canvasContext.arc(x, y, size.value, 0, Math.PI * 2)
      canvasContext.fillStyle = color.value
      canvasContext.fill()
    }

    const drawLine = (x1, y1, x2, y2) => {
      canvasContext.beginPath()
      canvasContext.moveTo(x1, y1)
      canvasContext.lineTo(x2, y2)
      canvasContext.strokeStyle = color.value
      canvasContext.lineWidth = size.value * 2
      canvasContext.stroke()
    }

    const handleIncreaseClick = () => {
      size.value += 5
      if (size.value > 50) {
        size.value = 50
      }
    }

    const handleDecreaseClick = () => {
      size.value -= 5
      if (size.value < 5) {
        size.value = 5
      }
    }

    const handleClearClick = () => {
      canvasContext.clearRect(
        0,
        0,
        canvasRef.value.width,
        canvasRef.value.height
      )
    }

    const handleColorChange = (e) => {
      color.value = e.target.value
    }
    return {
      size,
      canvasRef,

      handleIncreaseClick,
      handleDecreaseClick,
      handleClearClick,
      handleColorChange
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
  // height: 100vh;
  height: 100%;
  margin: 0;
  font-family: '等线', sans-serif;
  background-color: #f5f5f5;
}

canvas {
  border: 2px solid steelblue;
  border-radius: 8px;
  margin-top: 10px;
}

.toolbox {
  display: flex;
  width: 804px;
  margin-top: 8px;
  padding: 1rem;
  border: 1px solid slateblue;
  border-radius: 8px;
  background-color: steelblue;

  > * {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 0.25rem;
    padding: 0.25rem;
    border: none;
    border-radius: 6px;
    background-color: #fff;
    font-size: 2rem;
    cursor: pointer;

    &:last-child {
      margin-left: auto;
    }
  }

  > button:hover {
    background-color: rgba(240, 248, 255, 0.2);
    border: 1px solid steelblue;
  }
}
</style>
