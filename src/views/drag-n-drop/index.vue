<template>
  <div id="page">
    <div class="empty" v-drag="dragClassList">
      <div class="fill" draggable="true" v-drag.on="dragClassList"></div>
    </div>
    <div class="empty" v-drag="dragClassList"></div>
    <div class="empty" v-drag="dragClassList"></div>
    <div class="empty" v-drag="dragClassList"></div>
    <div class="empty" v-drag="dragClassList"></div>

    <back-home></back-home>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'drag-n-drop',
  setup() {
    // 各种事件触发时相应的样式的类名
    // 被拖拽元素
    // dragstart
    // dragend
    // 拖拉进入元素
    // dragenter
    // dragleave
    // drop
    const dragClassList = reactive({
      dragstart: ' hold',
      dragend: 'fill',
      dragenter: ' hovered',
      dragleave: 'empty',
      drop: 'empty'
    })
    return { dragClassList }
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
  background-color: steelblue;
  overflow: hidden;
}

.empty {
  width: 150px;
  height: 150px;
  margin: 10px;
  border: 3px solid #000;
  background: #fff;
}

.fill {
  width: 145px;
  height: 145px;
  background-image: url('~@/assets/img/dog.jfif');
  cursor: pointer;
}

.hold {
  border: 5px solid #ccc;
}

.hovered {
  border-color: #fff;
  border-style: dashed;
  background-color: #333;
}

@media (max-width: 800px) {
  body {
    flex-direction: column;
  }
}
</style>
