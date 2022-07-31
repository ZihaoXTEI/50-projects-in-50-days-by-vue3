<template>
  <div id="page">
    <div class="container">
      <h1>登录</h1>
      <form>
        <div class="form-control">
          <input type="text" required />
          <label class="label-text">
            <span style="transition-delay: 0ms">邮</span>
            <span style="transition-delay: 50ms">箱</span>
          </label>
        </div>

        <div class="form-control">
          <input type="password" required />
          <label class="label-text">
            <span style="transition-delay: 0ms">密</span>
            <span style="transition-delay: 50ms">码</span>
          </label>
        </div>

        <button class="btn">登录</button>

        <p class="text">还没有账号？<a href="#">去注册</a></p>
      </form>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
// import { onMounted } from 'vue'

export default {
  name: 'form-wave',
  setup() {
    // 可以使用指令实现
    // onMounted(() => {
    //   const labels = document.querySelectorAll('.form-control label')
    //   labels.forEach((label) => {
    //     label.innerHTML = label.innerText
    //       .split('')
    //       .map(
    //         (letter, idx) =>
    //           `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    //       )
    //       .join('')
    //   })
    // })
    return {}
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
  color: #fff;
  background-color: steelblue;
  overflow: hidden;
}

.container {
  padding: 20px 40px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.4);

  h1 {
    margin-bottom: 30px;
    text-align: center;
  }

  .btn {
    display: inline-block;
    width: 100%;
    padding: 15px;
    border: 0;
    border-radius: 5px;
    font-family: inherit;
    font-size: 16px;
    background: lightblue;
    cursor: pointer;

    &:focus {
      outline: 0;
    }

    &:active {
      transform: scale(0.98);
    }
  }

  .text {
    margin-top: 30px;

    a {
      color: lightblue;
      text-decoration: none;
    }
  }
}

.form-control {
  position: relative;
  width: 300px;
  margin: 20px 0 40px;

  input {
    display: block;
    width: 100%;
    padding: 15px 0;
    border: 0;
    border-bottom: 2px solid #fff;
    font-size: 18px;
    color: #fff;
    background-color: transparent;

    &:focus,
    &:valid {
      outline: 0;
      border-bottom-color: lightblue;

      & + .label-text span {
        color: lightblue;
        transform: translateY(-30px);
      }
    }
  }

  .label-text {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;

    span {
      display: inline-block;
      min-width: 5px;
      font-size: 18px;
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
}
</style>
