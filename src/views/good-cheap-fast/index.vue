<template>
  <div id="page">
    <h2>你希望你的项目怎么样？</h2>
    <div class="toggle-container">
      <input type="checkbox" id="good" class="toggle" v-model="good" />
      <label for="good" class="label">
        <div class="ball"></div>
      </label>
      <span>Good</span>
    </div>

    <div class="toggle-container">
      <input type="checkbox" id="cheap" class="toggle" v-model="cheap" />
      <label for="cheap" class="label">
        <div class="ball"></div>
      </label>
      <span>Cheap</span>
    </div>

    <div class="toggle-container">
      <input type="checkbox" id="fast" class="toggle" v-model="fast" />
      <label for="fast" class="label">
        <div class="ball"></div>
      </label>
      <span>Fast</span>
    </div>
    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'good-cheap-fast',
  setup() {
    const good = ref(false)
    const cheap = ref(false)
    const fast = ref(false)

    const handle = () => {
      console.log(good.value)
      good.value = good.value ? false : true
      console.log(good.value)
    }

    return { good, cheap, fast, handle }
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
  font-family: '等线', sans-serif;
  overflow: hidden;
}

.toggle-container {
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 200px;

  .toggle {
    visibility: hidden;

    &:checked + .label {
      background-color: #8e44ad;

      & .ball {
        animation: slidOn 0.3s linear forwards;
      }
    }
  }

  span {
    font-size: 16px;
  }

  .label {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
    margin: 0 15px 0;
    border-radius: 50px;
    background-color: #d0d0d0;
    cursor: pointer;

    .ball {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 34px;
      height: 34px;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #fff;
      animation: slidOff 0.3s linear forwards;
    }
  }
}

@keyframes slidOn {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(20px) scale(1.2);
  }
  100% {
    transform: translateX(40px) scale(1);
  }
}

@keyframes slidOff {
  0% {
    transform: translateX(40px) scale(1);
  }
  50% {
    transform: translateX(20px) scale(1.2);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
</style>
