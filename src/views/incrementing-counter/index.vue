<template>
  <div id="page">
    <div class="counter-container">
      <div class="counter" v-incre="120"></div>
      <span>可乐瓶数</span>
    </div>

    <div class="counter-container">
      <div class="counter" v-incre="328"></div>
      <span>薯片包数</span>
    </div>

    <div class="counter-container">
      <div class="counter" v-incre="1025"></div>
      <span>Steam 余额</span>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
export default {
  name: 'incrementing-counter',
  setup() {
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
  color: #fff;
  background-color: #8e44ad;
  overflow: hidden;
}

.counter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 160px;
  margin: 30px 50px;
  text-align: center;
  border: 1px solid #e1bee7;
  border-radius: 10px;

  .counter {
    margin-top: 10px;
    font-size: 60px;
  }

  span {
    border-top: 1px solid #e1bee7;
    padding: 10px 0;
  }
}

@media (max-width: 580px) {
  body {
    flex-direction: column;
  }
}
</style>
