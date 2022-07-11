<template>
  <nav>
    <router-link to="expanding-cards">expanding-cards</router-link>
    <router-link to="/about">About</router-link>
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
