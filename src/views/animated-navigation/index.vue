<template>
  <div id="page">
    <nav :class="{ active: isActive }">
      <ul>
        <li><a href="#">主页</a></li>
        <li><a href="#">作品</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">联系</a></li>
      </ul>

      <button class="icon" @click="isActive = !isActive">
        <div class="line line1"></div>
        <div class="line line2"></div>
      </button>
    </nav>
    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'animated-navigation',
  setup() {
    const isActive = ref(true)
    return {
      isActive
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
  background-color: #eafbff;
  background-image: linear-gradient(
    to bottom,
    #eafbff 0%,
    #eafbff 50%,
    #5290f9 50%,
    #5290f9 100%
  );
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 20px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  overflow-x: hidden;
  transition: width 0.6s linear;

  &.active {
    width: 350px;

    ul {
      width: 100%;

      li {
        opacity: 1;
        transform: rotateY(360deg);
      }
    }

    .icon {
      .line1 {
        transform: rotate(-765deg) translateY(5.5px);
      }
      .line2 {
        transform: rotate(765deg) translateY(-5.5px);
      }
    }
  }

  ul {
    display: flex;
    width: 0;
    margin: 0;
    padding: 0;
    list-style-type: none;
    transition: width 0.6s linear;

    li {
      transform: rotateY(0deg);
      opacity: 0;
      transition: transform 0.6s linear, opacity 0.6s linear;

      a {
        position: relative;
        margin: 0 10px;
        color: #000;
        text-decoration: none;
      }
    }
  }

  .icon {
    position: relative;
    width: 30px;
    height: 30px;
    padding: 0;
    border: 0;
    background-color: #fff;
    cursor: pointer;

    &:focus {
      outline: 0;
    }

    .line {
      position: absolute;
      top: 10px;
      left: 5px;
      width: 20px;
      height: 2px;
      background-color: #5290f9;
      transition: transform 0.6s linear;
    }

    .line2 {
      top: auto;
      bottom: 10px;
    }
  }
}
</style>
