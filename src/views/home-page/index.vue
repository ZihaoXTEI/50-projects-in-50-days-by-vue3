<template>
  <nav>
    <template v-for="view in VIEWS" :key="view.id">
      <router-link :to="view.url">
        <p>{{ view.name }}</p>
        <span>{{ view.originalName }}</span>
      </router-link>
    </template>
  </nav>
</template>

<script>
import { VIEWS } from '@/config/views'
export default {
  name: 'home-page',
  setup() {
    return { VIEWS }
  }
}
</script>

<style lang="less" scoped>
nav {
  min-width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #c5cae9;
  box-shadow: 8px 0 16px #bcbcbc;
  font-size: 12px;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    width: 11px;
    height: 11px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #4b5563;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  a {
    padding-left: 15px;
    text-align: left;
    text-decoration: none;
    color: #212121;
    cursor: pointer;

    p {
      margin: 10px 0 0 0;
      padding: 0;
      font-weight: bold;
      font-size: 1.6em;
    }

    span {
      font-weight: normal;
      font-size: 1.2em;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #536dfe;
      padding-left: 20px;
      transform: scale(1.2);
    }
  }
}
</style>
