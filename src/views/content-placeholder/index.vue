<template>
  <div id="page">
    <div class="card">
      <!-- 头部图片区域 -->
      <div class="card-header" :class="{ 'animated-bg': isLoading }">
        <img v-show="!isLoading" :src="headerImg" alt="card-header-image" />
      </div>

      <!-- 主体内容 -->
      <div class="card-content">
        <!-- 标题 -->
        <h3
          class="card-title"
          :class="{ 'animated-bg animated-bg-text': isLoading }"
        >
          {{ title }}
        </h3>

        <p class="card-excerpt">
          {{ excerpt }}
          <span
            v-if="isLoading"
            :class="{ 'animated-bg animated-bg-text': isLoading }"
          ></span>
          <span
            v-if="isLoading"
            :class="{ 'animated-bg animated-bg-text': isLoading }"
          ></span>
        </p>

        <!-- 作者信息 -->
        <div class="author">
          <div class="profile-img" :class="{ 'animated-bg': isLoading }">
            <img v-show="!isLoading" :src="avatar" />
          </div>
          <div class="author-info">
            <strong :class="{ 'animated-bg animated-bg-text': isLoading }">
              {{ author }}
            </strong>
            <small :class="{ 'animated-bg animated-bg-text': isLoading }">
              {{ birthday }}
            </small>
          </div>
        </div>
      </div>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'content-placeholder',
  setup() {
    const headerImg = ref('')
    const title = ref('')
    const excerpt = ref('')
    const avatar = ref('')
    const author = ref('')
    const birthday = ref('')

    const isLoading = ref(true)

    setTimeout(() => {
      headerImg.value =
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
      title.value = '个人简介'
      excerpt.value = 'Web前端开发工程师'
      avatar.value =
        'https://storage.360buyimg.com/i.imageUpload/c0e8e8f7bac031353931363039373734353132_mid.jpg'
      author.value = '栎梓'
      birthday.value = '1998年9月'

      isLoading.value = false
    }, 2500)

    return {
      headerImg,
      title,
      excerpt,
      avatar,
      author,
      birthday,
      isLoading
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
  font-family: '等线', sans-serif;
  background-color: #ecf0f1;
  overflow: hidden;

  color: black;
}

.card {
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.card-header {
  height: 200px;
}

.card-header img {
  width: 100%;
  height: 100%;
  // 指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框
  object-fit: cover;
}

.card-content {
  padding: 30px;
  background-color: #fff;
}

.card-title {
  height: 20px;
  margin: 0;
  text-align: left;
}

.card-excerpt {
  margin: 10px 0 20px;
  color: #777;
  text-align: left;
}

.author {
  display: flex;

  .profile-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .author-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100px;
    margin-left: 10px;
    text-align: right;

    small {
      margin-top: 5px;
      color: #aaa;
    }
  }
}

.animated-bg {
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 10%,
    #f6f7f8 20%,
    #f6f7f8 100%
  );
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
}

.animated-bg-text {
  display: inline-block;
  width: 100%;
  height: 10px;
  margin: 0;
  border-radius: 50px;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
</style>
