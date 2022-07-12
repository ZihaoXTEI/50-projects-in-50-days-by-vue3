<template>
  <div id="page">
    <div class="search" :class="{ active: isOpen }">
      <input
        type="text"
        class="input"
        placeholder="请输入搜索内容..."
        ref="searchInput"
        v-model="searchData"
      />
      <button class="search-btn" @click="handleSearchClick">
        <i class="iconfont icon-icon-sousuo"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'hidden-search',
  setup() {
    const searchInput = ref()
    const isOpen = ref(false)
    const searchData = ref('')

    const handleSearchClick = () => {
      isOpen.value = !isOpen.value
    }
    return {
      searchInput,
      isOpen,
      searchData,
      handleSearchClick
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  background-image: linear-gradient(90deg, #7d5fff, #7158e2);
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.search {
  position: relative;
  height: 50px;

  .input {
    width: 50px;
    height: 50px;
    border: 0;
    padding: 15px;
    font-size: 18px;
    border-radius: 8px;
    background-color: #fff;
    transition: width 0.3s ease;

    &:focus {
      outline: none;
    }
  }

  .search-btn {
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    line-height: 50px;
    border: 0;
    font-size: 24px;
    font-weight: 700;
    color: #000;
    border-radius: 8px;
    background-color: #fff;
    transition: transform 0.3s ease;

    &:focus {
      outline: none;
    }
  }

  &.active {
    .input {
      width: 250px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .search-btn {
      transform: translateX(248px);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
