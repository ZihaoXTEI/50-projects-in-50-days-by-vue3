<template>
  <div id="page">
    <h1>向下滚动</h1>
    <template v-for="n in 10" :key="n">
      <div class="box" v-rect="className">
        <h2>Content</h2>
      </div>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'scroll-animation',
  setup() {
    let className = ref('show')

    return { className }
  }
}
</script>

<style lang="less" scoped>
#page {
  background-color: #efedd6;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  overflow-x: hidden;
}

.h1 {
  margin: 10px;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  color: #fff;
  background-color: skyblue;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  transform: translateX(400%);
  transition: transform 0.4s ease;

  &.show {
    transform: translateX(0);
  }

  h2 {
    font-size: 45px;
  }
}

.box:nth-of-type(even) {
  transform: translateX(-400%);
}
</style>
