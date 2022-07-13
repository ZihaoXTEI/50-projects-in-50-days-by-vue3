<template>
  <nav>
    <router-link to="expanding-cards">Expanding Cards | 扩展卡</router-link>
    <router-link to="progress-steps">Progress Steps | 进度条</router-link>
    <router-link to="rotating-nav-animation">
      Rotating Nav Animation | 旋转导航动画
    </router-link>
    <router-link to="hidden-search">Hidden Search | 可隐藏的搜索框</router-link>
    <router-link to="blurry-loading">Blurry Loading | 模糊加载</router-link>
    <router-link to="scroll-animation">Scroll-Animation | 滚动动画</router-link>
    <router-link to="split-landing-page">
      Split Landing Page | 拆分登录页
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'home-page',
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
nav {
  display: flex;
  flex-direction: column;

  a {
    font-weight: bold;
    font-size: 2rem;
    padding: 0 15px;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #42b983;
    }
  }
}
</style>
