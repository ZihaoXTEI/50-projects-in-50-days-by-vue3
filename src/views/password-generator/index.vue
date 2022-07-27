<template>
  <div id="page">
    <div class="container">
      <h2>密码生成器</h2>

      <!-- 结果 -->
      <div class="result-container">
        <span>{{ finalPassword }}</span>
        <button class="btn" @click="handleCopyToClipboard">复制</button>
      </div>

      <!-- 生成密码生成类型 -->
      <div class="settings">
        <div class="setting">
          <label>密码长度</label>
          <input type="number" min="4" max="30" v-model="passwordLength" />
        </div>
        <div class="setting">
          <label>包含大写英文字母</label>
          <input type="checkbox" checked v-model="isIncludeUppercase" />
        </div>
        <div class="setting">
          <label>包含小写英文字母</label>
          <input type="checkbox" checked v-model="isIncludeLowercase" />
        </div>
        <div class="setting">
          <label>包含数字</label>
          <input type="checkbox" checked v-model="isIncludeNumber" />
        </div>
        <div class="setting">
          <label>包含符号</label>
          <input type="checkbox" checked v-model="isIncludeSymbol" />
        </div>
      </div>

      <button class="btn btn-large" @click="handleGeneratePassword">
        生成密码
      </button>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

import { randomFunc } from './utils'

export default {
  name: 'password-generator',
  setup() {
    const finalPassword = ref('')
    const passwordLength = ref(15)
    const isIncludeLowercase = ref(true)
    const isIncludeUppercase = ref(true)
    const isIncludeNumber = ref(true)
    const isIncludeSymbol = ref(true)

    const handleGeneratePassword = () => {
      let password = ''
      let typeArr = []
      typeArr.push({ lower: isIncludeLowercase.value })
      typeArr.push({ upper: isIncludeUppercase.value })
      typeArr.push({ number: isIncludeNumber.value })
      typeArr.push({ symbol: isIncludeSymbol.value })

      typeArr = typeArr.filter((item) => Object.values(item)[0])

      if (typeArr.length === 0 || passwordLength.value.length < 4) {
        finalPassword.value = ''
        return
      }

      for (let i = 0; i < passwordLength.value; i++) {
        const random = Math.floor(Math.random() * typeArr.length)
        const type = typeArr[random]
        const funcName = Object.keys(type)[0]
        password += randomFunc[funcName]()
      }

      finalPassword.value = password.slice(0, passwordLength.value)
    }

    // 复制至剪贴板可以使用第三方库：clipboard.js
    const handleCopyToClipboard = () => {
      if (finalPassword.value.trim() === '') {
        console.log('内容为空')
        return
      }

      if (navigator.clipboard) {
        navigator.clipboard.writeText(finalPassword.value)
        window.alert('密码已经复制至剪贴板，快去使用吧~~~')
      } else {
        window.alert('浏览器版本过低，无法复制至剪贴板，你可以手动复制')
      }
    }

    return {
      finalPassword,
      passwordLength,
      isIncludeLowercase,
      isIncludeUppercase,
      isIncludeNumber,
      isIncludeSymbol,

      handleGeneratePassword,
      handleCopyToClipboard
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
  padding: 10px;
  font-family: '等线', sans-serif;
  color: #fff;
  background-color: #3b3b98;
  overflow: hidden;
}

h2 {
  margin: 10px 0 20px;
  text-align: center;
}

.container {
  max-width: 100%;
  width: 350px;
  padding: 20px;
  background-color: #23235b;
  box-shadow: 0 2px 10px rgba(25, 255, 255, 0.2);
}

.result-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
  padding: 12px 10px;
  font-size: 18px;
  letter-spacing: 1px;
  background-color: rgba(0, 0, 0, 0.4);

  span {
    max-width: calc(100%-40px);
    height: 100%;
    word-wrap: break-word;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 1rem;
    }
  }

  .btn {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 40px;
    height: 40px;
    padding: 0;
    font-size: 12px;
  }
}

.btn {
  padding: 8px 12px;
  border: none;
  background-color: #3b3b98;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

.btn-large {
  display: block;
  width: 100%;
}

.setting {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  font-size: 16px;
}
</style>
