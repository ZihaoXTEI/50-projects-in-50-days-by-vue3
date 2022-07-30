<template>
  <div id="page">
    <button class="nav-btn open-btn" @click="isOpen = true">
      <i class="iconfont icon-gengduo"></i>
    </button>

    <img
      src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-700x188.png"
      alt="Logo"
      class="logo"
    />
    <p class="text">移动端导航栏</p>

    <div class="nav nav-black" :class="{ visible: isOpen }">
      <div class="nav nav-red" :class="{ visible: isOpen }">
        <div class="nav nav-white" :class="{ visible: isOpen }">
          <button class="nav-btn close-btn" @click="isOpen = false">
            <i class="iconfont icon-guanbi"></i>
          </button>

          <img
            src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-700x188.png"
            alt="Logo"
            class="logo"
          />

          <ul class="list">
            <li><a href="#">首页</a></li>
            <li><a href="#">关注</a></li>
            <li><a href="#">我的</a></li>
            <li>
              <ul>
                <li><a href="#">历史记录</a></li>
                <li><a href="#">我的收藏</a></li>
                <li><a href="#">稍后再看</a></li>
                <li><a href="#">离线缓存</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'netflix-mobile-navigation',
  setup() {
    const isOpen = ref(false)

    return { isOpen }
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
  font-family: '等线', sans-serif;
  font-size: 16px;
}

.logo {
  width: 150px;
}

.nav-btn {
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;

  &.open-btn {
    position: fixed;
    top: 10px;
    left: 10px;
  }

  &.close-btn {
    position: absolute;
    top: 40px;
    right: 30px;
    opacity: 0.3;
  }
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &.visible {
    transform: translateX(0);
  }
}

.nav-black {
  max-width: 480px;
  min-width: 320px;
  width: 60%;
  background-color: #221f1f;
  transition-delay: 0.4s;

  &.visible {
    transition-delay: 0s;
  }
}

.nav-red {
  width: 95%;
  background-color: #e50914;
  transition-delay: 0.2s;

  &.visible {
    transition-delay: 0.2s;
  }
}

.nav-white {
  position: relative;
  width: 95%;
  padding: 40px;
  background-color: #fff;
  transition-delay: 0s;

  &.visible {
    transition-delay: 0.4s;
  }
}

.list {
  padding: 0;
  list-style-type: none;
  font-size: 16px;
  text-align: left;

  li {
    margin: 20px 0;

    a {
      font-size: 14px;
      color: #221f1f;
      text-decoration: none;
    }
  }

  ul {
    list-style-type: none;
    padding-left: 20px;
  }
}
</style>
