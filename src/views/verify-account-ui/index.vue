<!-- eslint-disable vue/valid-v-model -->
<template>
  <div id="page">
    <div class="container">
      <h2>验证您的帐户</h2>
      <p>
        我们通过电子邮件将六位数代码发送到您的邮箱<br />
        输入验证码以确认您的电子邮件地址
      </p>

      <!-- v-model="verificationCode[index]" -->

      <div class="code-container">
        <template v-for="(_, index) in state.verificationCode" :key="index">
          <input
            type="number"
            class="code"
            placeholder="0"
            min="0"
            max="9"
            required
            :modelValue="state.verificationCode[index]"
            @keyup="handleKeydown(index, $event)"
            :ref="setCodeInputRefs"
          />
        </template>
      </div>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { onBeforeUpdate, onMounted, reactive } from 'vue'

export default {
  name: 'verify-account-ui',
  setup() {
    const state = reactive({
      verificationCode: [0, 0, 0, 0, 0, 0]
    })

    let codeInputRefs = []

    const setCodeInputRefs = (el) => {
      if (el) {
        codeInputRefs.push(el)
      }
    }

    onMounted(() => {
      if (codeInputRefs[0]) {
        codeInputRefs[0].focus()
      }
    })

    onBeforeUpdate(() => {
      codeInputRefs = []
    })

    const handleKeydown = (index, e) => {
      codeInputRefs[index].value = e.key
      if (e.key >= 0 && e.key <= 9) {
        state.verificationCode[index] = e.key
        if (index < 5) {
          setTimeout(() => codeInputRefs[index + 1].focus(), 10)
        }
      } else if (e.key === 'Backspace') {
        state.verificationCode[index] = ''
        if (index > 0) {
          setTimeout(() => codeInputRefs[index - 1].focus(), 10)
        }
      }
    }
    return {
      state,
      setCodeInputRefs,
      handleKeydown
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
  background-color: #fbfcfe;
  font-family: '等线', sans-serif;
  overflow: hidden;
}

.container {
  max-width: 1000px;
  padding: 30px;
  border: 3px solid #000;
  border-radius: 10px;
  background-color: #fff;
  font-size: 24px;
  text-align: center;
}

.code-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 40px 10px;

  .code {
    width: 100px;
    height: 120px;
    margin: 1%;
    border: 1px solid #eee;
    border-radius: 5px;
    font-size: 75px;
    font-weight: 300;
    text-align: center;
    // 用来定义插入光标颜色
    caret-color: transparent;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:valid {
      border-color: #3498db;
      box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.25);
    }
  }
}

@media (max-width: 600px) {
  .code-container {
    flex-wrap: wrap;
  }

  .code {
    font-size: 60px;
    height: 80px;
    max-width: 70px;
  }
}
</style>
