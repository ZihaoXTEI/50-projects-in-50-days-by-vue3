<template>
  <div id="page">
    <div class="testimonial-container">
      <div class="progress-bar"></div>
      <div class="iconfont icon-arrow-down-filling icon"></div>
      <div class="iconfont icon-arrow-up-filling icon"></div>

      <p class="testimonial">{{ testimonial.text }}</p>

      <div class="user">
        <img class="user-image" :src="testimonial.photo" alt="user" />
        <div class="user-details">
          <h4 class="username">{{ testimonial.name }}</h4>
          <p class="role">{{ testimonial.position }}</p>
        </div>
      </div>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Testimonials } from './config'
export default {
  name: 'testimonial-box-switcher',
  setup() {
    const testimonials = Testimonials
    const currentIndex = ref(0)
    let timer = null

    const testimonial = computed(() => testimonials[currentIndex.value])

    onMounted(() => {
      timer = setInterval(updateTestimonial, 10000)
    })

    onBeforeUnmount(() => {
      clearInterval(timer)
    })
    const updateTestimonial = () => {
      currentIndex.value++
      if (currentIndex.value > testimonials.length - 1) {
        currentIndex.value = 0
      }
    }
    return { testimonial }
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
  background-color: #f4f4f4;
  font-family: 'Cascadia Mono', sans-serif;
  font-size: 14px;
  overflow: hidden;
}

.testimonial-container {
  max-width: 768px;
  position: relative;
  margin: 20px auto;
  padding: 50px 80px;
  border-radius: 15px;
  background-color: #476ce4;
  color: #fff;

  .progress-bar {
    width: 100%;
    height: 4px;
    background-color: #fff;
    transform-origin: left;
    animation: grow 10s linear infinite;
  }

  .testimonial {
    text-align: justify;
    line-height: 28px;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;

    .user-image {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      object-fit: cover;
    }

    .user-details {
      margin-left: 10px;

      .username {
        margin: 0;
      }

      .role {
        margin: 10px 0;
        font-weight: normal;
      }
    }
  }
}

.icon {
  position: absolute;
  top: 20px;
  font-size: 48px;
  color: rgba(255, 255, 255, 0.3);
}

.icon-arrow-up-filling {
  top: 35px;
  right: 35px;
}

.icon-arrow-down-filling {
  left: 35px;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
}

@media (max-width: 768px) {
  .testimonial-container {
    padding: 20px 30px;
  }
}
</style>
