<template>
  <div id="page">
    <h1>常见问题</h1>

    <div class="faq-container">
      <template v-for="item in faq" :key="item.index">
        <div class="faq" :class="{ active: item.isActive }">
          <h3 class="faq-title">{{ item.question }}</h3>

          <p class="faq-text">{{ item.answer }}</p>

          <button class="faq-toggle" @click="handleToggleClick(item.index)">
            <i class="iconfont icon-arrow-up-filling"></i>
            <i class="iconfont icon-arrow-down-filling"></i>
          </button>
        </div>
      </template>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'faq-collapse',
  setup() {
    const isActive = ref(false)

    const faq = reactive([
      {
        index: 0,
        question: '为什么我们不应该相信原子？',
        answer: '它们创造了一切。',
        isActive: false
      },
      {
        index: 1,
        question: '你怎么称呼一个没有身体和鼻子的人？',
        answer: '没有人知道。',
        isActive: false
      }
    ])

    const handleToggleClick = (index) => {
      faq[index].isActive = !faq[index].isActive
    }
    return {
      isActive,
      faq,
      handleToggleClick
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
  font-family: '等线', sans-serif;
  background-color: #f0f0f0;
  height: 100vh;
}

h1 {
  margin: 50px 0 30px;
  text-align: center;
}

.faq-container {
  max-width: 600px;
  margin: 0 auto;

  .faq {
    position: relative;
    margin: 20px 0;
    padding: 30px;
    border: 1px solid #9fa4a8;
    border-radius: 10px;
    background-color: transparent;
    overflow: hidden;
    transition: 0.3s ease;

    &.active {
      background-color: #fff;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);

      & .faq-text {
        display: block;
      }

      & .faq-toggle {
        background-color: #9fa4a8;
        & .icon-arrow-up-filling {
          display: block;
          color: #fff;
        }

        & .icon-arrow-down-filling {
          display: none;
        }
      }
    }

    .faq-title {
      margin: 0 35px 0 0;
    }

    .faq-text {
      display: none;
      margin: 30px 0 0;
    }

    .faq-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 30px;
      right: 30px;
      width: 30px;
      height: 30px;
      padding: 0;
      font-size: 16px;
      border: 0;
      border-radius: 50%;
      background-color: transparent;
      cursor: pointer;

      &:focus {
        outline: 0;
      }

      & .icon-arrow-up-filling {
        display: none;
      }
    }
  }

  .faq.active::before,
  .faq.active::after {
    content: '\f075';
    font-family: 'Font Awesome 5 Free';
    color: #2ecc71;
    font-size: 7rem;
    position: absolute;
    opacity: 0.2;
    top: 20px;
    left: 20px;
    z-index: 0;
  }

  .faq.active::before {
    color: #3498db;
    top: -10px;
    left: -30px;
    transform: rotateY(180deg);
  }
}
</style>
