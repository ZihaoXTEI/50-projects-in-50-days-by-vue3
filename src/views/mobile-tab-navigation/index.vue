<template>
  <div id="page">
    <div class="phone">
      <template v-for="item in imageList" :key="item.id">
        <img
          :src="item.url"
          :alt="item.name"
          class="content"
          :class="{ show: item.id === currentIndex }"
        />
      </template>

      <nav>
        <ul>
          <template v-for="(item, index) in navbar" :key="index">
            <li
              @click="handleNavBarClick(index)"
              :class="{ active: index === currentIndex }"
            >
              <p>{{ item }}</p>
            </li>
          </template>
        </ul>
      </nav>
    </div>
    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

import { ImageList } from './config'

export default {
  name: 'mobile-tab-navigation',
  setup() {
    const imageList = ref(ImageList)
    const navbar = ['主页', '任务', '博客', '我']
    const currentIndex = ref(0)

    const handleNavBarClick = (index) => {
      currentIndex.value = index
    }
    return { imageList, currentIndex, navbar, handleNavBarClick }
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
  background-color: #ffccbc;
}

.phone {
  position: relative;
  width: 340px;
  height: 600px;
  border: 3px solid #eee;
  border-radius: 15px;
  overflow: hidden;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 60px);
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.4s ease;

    &.show {
      opacity: 1;
    }
  }
}

nav {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: -5px;

  ul {
    height: 60px;
    display: flex;
    margin: 0;
    padding: 0;
    background-color: #fff;
    list-style-type: none;

    li {
      flex: 1;
      padding: 10px;
      color: #777;
      text-align: center;
      cursor: pointer;

      &:hover,
      &.active {
        p {
          color: #ffffff;
          background-color: #e64a19;
        }
      }

      p {
        margin: 2px 0;
        padding: 5px 5px;
        font-size: 16px;
        border-radius: 5px;
      }
    }
  }
}
</style>
