<template>
  <div id="page">
    <div class="toasts"></div>

    <button class="btn" @click="handleShowNotif">显示提示信息</button>
    <back-home></back-home>
  </div>
</template>

<script>
// 详细写法可参考：
// https://www.vue-js.com/topic/60f780cd4590fe0031e5a3dc
export default {
  name: 'toast-notification',
  setup() {
    const types = ['info', 'success', 'error']

    const handleShowNotif = () => {
      const notif = document.createElement('div')
      notif.classList.add('toast')
      notif.classList.add(getRandomType())

      notif.innerText = '提示信息'

      const toasts = document.querySelector('.toasts')
      toasts.appendChild(notif)

      setTimeout(() => {
        notif.remove()
      }, 3000)
    }

    const getRandomType = () => {
      return types[Math.floor(Math.random() * types.length)]
    }
    return {
      handleShowNotif
    }
  }
}
</script>

<style lang="less">
#page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  font-family: '等线', sans-serif;
  background-color: #795548;
  overflow: hidden;
}

.btn {
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-weight: bold;
  color: #5d4037;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }
}

.toasts {
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.toast {
  margin: 0.5rem;
  padding: 1rem 1rem;
  border-radius: 5px;
  background-color: #fff;
  animation: toastshow 0.5s ease-in-out;
}

.toast.info {
  color: #03a9f4;
  border-bottom: 4px solid #03a9f4;
}

.toast.success {
  color: #4caf50;
  border-bottom: 4px solid #4caf50;
}

.toast.error {
  color: #ff5252;
  border-bottom: 4px solid #ff5252;
}

@keyframes toastshow {
  0% {
    opacity: 0;
    transform: translateX(200%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
