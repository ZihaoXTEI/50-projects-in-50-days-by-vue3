<template>
  <div id="page">
    <div class="background" ref="backgroundRef"></div>

    <div class="login-container">
      <h1>密码强度背景</h1>
      <p>更改密码以查看效果</p>
      <div class="item">
        <label for="email"> 邮箱： </label>
        <input
          class="input"
          type="text"
          name="email"
          placeholder="输入邮箱地址"
          autocomplete="off"
          v-model="loginData.email"
        />
      </div>

      <div class="item">
        <label for="password">密码：</label>
        <input
          class="input"
          type="password"
          name="password"
          placeholder="输入密码"
          autocomplete="off"
          v-model="loginData.password"
          @input="handleInput"
        />
      </div>

      <button class="btn">提交</button>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'password-strength-background',
  setup() {
    const backgroundRef = ref()
    const loginData = reactive({ email: '', password: '' })

    const handleInput = () => {
      const length = loginData.password.length
      const blurValue = 20 - length * 2
      backgroundRef.value.style.filter = `blur(${blurValue}px)`
    }
    return {
      backgroundRef,
      loginData,
      handleInput
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
  font-size: 16px;
  overflow: hidden;
}

.background {
  position: absolute;
  top: -20px;
  bottom: -20px;
  left: -20px;
  right: -20px;
  z-index: -1;
  background: url('https://images.unsplash.com/photo-1556745757-8d76bdb6984b')
    no-repeat center center/cover;
  filter: blur(20px);
}

.login-container {
  box-sizing: border-box;
  width: 400px;
  padding: 2.5em;
  border-radius: 0.25em;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.6);
  text-align: center;

  h1 {
    font-size: 1.875em;
  }

  p {
    font-size: 0.875em;
    color: rgb(74, 85, 104);
  }
}

.item {
  margin: 1em 0;
  text-align: left;

  label {
    color: rgb(26, 32, 44);
  }

  .input {
    display: block;
    width: 100%;
    margin-top: 0.5em;
    padding: 0.5em;
    border: 1px solid #e2e8f0;
    border-radius: 0.25em;
  }
}

.btn {
  display: inline-block;
  width: 100%;
  margin-top: 1em;
  padding: 0.5em 0;
  border: 0 solid #e2e8f0;
  border-radius: 0.25em;
  background-color: #000;
  color: #fff;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
}
</style>
