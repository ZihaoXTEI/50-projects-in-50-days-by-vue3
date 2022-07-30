<template>
  <div id="page">
    <div class="panel-container">
      <strong v-if="!isReview">您对我们的客户支持表现满意吗？</strong>
      <div class="ratings-container" v-if="!isReview">
        <div
          class="rating"
          :class="{ active: activeIndex === 0 }"
          @click="activeIndex = 0"
        >
          <img
            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
            alt="不高兴"
          />
          <small>不高兴</small>
        </div>

        <div
          class="rating"
          :class="{ active: activeIndex === 1 }"
          @click="activeIndex = 1"
        >
          <img
            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
            alt="一般"
          />
          <small>一般</small>
        </div>

        <div
          class="rating"
          :class="{ active: activeIndex === 2 }"
          @click="activeIndex = 2"
        >
          <img
            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
            alt="满意"
          />
          <small>满意</small>
        </div>
      </div>

      <div v-if="isReview">
        <i class="iconfont icon-xihuan"></i>
        <strong>感谢您的评价</strong>
        <br />
        <strong>反馈：{{ rating }}</strong>
        <p>我们将利用您的反馈改善我们的客户支持</p>
      </div>

      <button class="btn" v-if="!isReview" @click="handleReviewClick">
        发送评价
      </button>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'feedback-ui-design',
  // handleRatingClick
  setup() {
    const activeIndex = ref(0)
    const ratingList = ['不高兴', '一般', '满意']
    const rating = ref('')
    const isReview = ref(false)

    const handleReviewClick = () => {
      rating.value = ratingList[activeIndex.value]
      isReview.value = true
    }
    return {
      activeIndex,
      rating,
      isReview,
      handleReviewClick
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
  font-family: '华文细黑', sans-serif;
  font-size: 18px;
  background-color: #fef9f2;
  overflow: hidden;
}

.panel-container {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-style: 90%;
  text-align: center;

  strong {
    line-height: 20px;
  }
}

.ratings-container {
  display: flex;
  margin: 20px 0;

  .rating {
    flex: 1;
    margin: 10px 5px;
    padding: 20px;
    cursor: pointer;

    img {
      width: 40px;
    }

    small {
      display: inline-block;
      margin: 10px 0 0;
      font-size: 18px;
      color: #555;
    }

    &:hover,
    &.active {
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      small {
        color: #111;
      }
    }
  }
}

.btn {
  padding: 12px 30px;
  border: 0;
  border-radius: 4px;
  background-color: #302d2b;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }
}

.icon-xihuan {
  display: block;
  margin-bottom: 10px;
  font-size: 30px;
  color: red;
}
</style>
