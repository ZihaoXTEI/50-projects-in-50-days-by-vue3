<template>
  <div id="page">
    <div class="container">
      <h3>不要笑挑战</h3>
      <div class="joke-content">{{ joke }}</div>
      <button class="btn" @click="getJoke">获取下一个笑话</button>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'dad-jokes',
  setup() {
    const joke = ref('')
    const getJoke = async () => {
      const config = {
        headers: {
          Accept: 'application/json'
        }
      }

      const res = await fetch('https://icanhazdadjoke.com', config)
      joke.value = (await res.json()).joke
    }
    return {
      joke,
      getJoke
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
  padding: 20px;
  background-color: #4caf50;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
}

.container {
  max-width: 100%;
  width: 800px;
  padding: 50px 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin: 0;
    letter-spacing: 2px;
    opacity: 0.5;
  }

  .joke-content {
    max-width: 600px;
    margin: 50px auto;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 1px;
  }

  .btn {
    padding: 14px 40px;
    border: 0;
    border-radius: 10px;
    background-color: #388e3c;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: #fff;
    cursor: pointer;

    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: 0;
    }
  }
}
</style>
