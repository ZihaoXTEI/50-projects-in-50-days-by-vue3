<template>
  <div id="page">
    <div class="insert">
      <div class="key" v-if="key">
        {{ key }}
        <small>event.key</small>
      </div>

      <div class="key" v-if="keyCode">
        {{ keyCode }}
        <small>event.keyCode</small>
      </div>

      <div class="key" v-if="code">
        {{ code }}
        <small>event.code</small>
      </div>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'event-keycodes',
  setup() {
    const key = ref('按任意键获取键代码')
    const keyCode = ref('')
    const code = ref('')

    onMounted(() => {
      window.addEventListener('keydown', (event) => {
        key.value = event.key === ' ' ? 'Space' : event.key
        keyCode.value = event.keyCode
        code.value = event.code
      })
    })
    return {
      key,
      keyCode,
      code
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
  font-family: '等线', sans-serif;
  text-align: center;
  background-color: #e1e1e1;
  overflow: hidden;
}

.key {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 150px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #999;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-weight: bold;
  background-color: #eee;

  small {
    position: absolute;
    top: -24px;
    left: 0;
    width: 100%;
    font-size: 14px;
    color: #555;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .key {
    margin: 10px 0px;
  }
}
</style>
