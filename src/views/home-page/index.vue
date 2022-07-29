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
    <router-link to="form-wave"> Form Wave | 表单波浪效果 </router-link>
    <router-link to="sound-board"> Sound Board | 声音面板 </router-link>
    <router-link to="dad-jokes"> Dad Jokes | 爸爸的笑话 </router-link>
    <router-link to="event-keycodes"> Event Keycodes | 键盘事件 </router-link>
    <router-link to="faq-collapse"> FAQ collapse | FAQ 折叠卡片 </router-link>
    <router-link to="random-choice-picker">
      Random Choice Picker | 随机选择选择器
    </router-link>
    <router-link to="animated-navigation">
      Animated Navigation | 动画导航栏
    </router-link>
    <router-link to="incrementing-counter">
      Incrementing Counter | 递增计算器
    </router-link>
    <router-link to="drink-water"> Drink Water | 每日喝水 </router-link>
    <router-link to="movie-app"> Movie App | 电影 App </router-link>
    <router-link to="background-slider">
      Background Slider | 背景滑块墙
    </router-link>
    <router-link to="theme-clock"> Theme Clock | 主题时钟 </router-link>
    <router-link to="button-ripple-effect">
      Button Ripple Effect | 按钮波纹效果
    </router-link>
    <router-link to="drag-n-drop"> Drag N Drop | 拖放事件 </router-link>
    <router-link to="drawing-app"> Drawing App | 绘画板 </router-link>
    <router-link to="kinetic-loader">
      Kinetic Loader | 三角形运动加载效果
    </router-link>
    <router-link to="content-placeholder">
      Content Placeholder | 内容占位符（骨架屏）
    </router-link>
    <router-link to="sticky-navigation">
      Sticky Navigation | 粘性导航栏
    </router-link>
    <router-link to="double-vertical-slider">
      Double Vertical Slider | 双垂直滑块
    </router-link>
    <router-link to="toast-notification">
      Toast Notification | 吐司通知
    </router-link>
    <router-link to="double-click-heart">
      Double Click Heart | 双击心效果
    </router-link>
    <router-link to="auto-text-effect">
      Auto Text Effect | 自动文字效果
    </router-link>
    <router-link to="password-generator">
      Password Generator | 密码生成器
    </router-link>
    <router-link to="good-cheap-fast">
      Good Cheap Fast | 滑动选择器
    </router-link>
    <router-link to="notes-app"> Notes App | 笔记应用 </router-link>
    <router-link to="animated-countdown">
      Animated Countdown | 动画倒计时
    </router-link>
    <router-link to="image-carousel"> Image Carousel | 图像轮播 </router-link>
    <router-link to="hoverboard"> Hoverboard | 悬停板 </router-link>
    <router-link to="pokedex"> Pokedex | 宝可梦图鉴 </router-link>
    <router-link to="mobile-tab-navigation">
      Mobile Tab Navigation | 移动标签导航
    </router-link>
    <router-link to="password-strength-background">
      Password Strength Background | 密码强度背景
    </router-link>
    <router-link to="3d-boxes-background">
      3d Background Boxes | 3D 背景盒子
    </router-link>
    <router-link to="verify-account-ui">
      Verify Account UI | 验证码界面
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
  align-items: flex-start;

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
