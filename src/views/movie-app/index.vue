<template>
  <div id="page">
    <header>
      <form @submit="handleSumbit">
        <input
          type="text"
          class="search"
          v-model="searchText"
          placeholder="搜索电影"
        />
      </form>
    </header>

    <template v-for="item in movieList" :key="item.name">
      <main class="main">
        <div class="movie">
          <img :src="item.image_url" :alt="item.title" />
          <div class="movie-info">
            <h3>{{ item.title }}</h3>
            <span :class="span_classname">{{ item.vote_average }}</span>
          </div>
          <div class="overview">
            <h3>{{ item.overview }}</h3>
          </div>
        </div>
      </main>
    </template>

    <back-home></back-home>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue'

import { getMovies } from './service'

export default {
  name: 'movie-app',
  setup() {
    const searchText = ref('')
    const movieList = ref([])

    onBeforeMount(async () => {
      movieList.value = await getMovies()
    })

    const handleSumbit = async (e) => {
      e.preventDefault()

      if (searchText.value != '') {
        movieList.value = await getMovies(searchText.value)
      } else {
        movieList.value = await getMovies()
      }
    }

    return {
      searchText,
      movieList,
      handleSumbit
    }
  }
}
</script>

<style lang="less" scoped>
@--primary-color: #22254b;
@--secondary-color: #373b69;

#page {
  margin: 0;
  font-family: '华文细黑' sans-serif;
  background-color: @--primary-color;
  min-height: 100vh;
}

header {
  padding: 1em;
  display: flex;
  justify-content: flex-end;
  background-color: @--secondary-color;

  .search {
    padding: 0.5em 1em;
    border: 2px solid @--primary-color;
    border-radius: 50px;
    background-color: transparent;
    font-size: 1em;
    font-family: inherit;
    color: #fff;

    &:placeholder {
      color: #7378c5;
    }

    &:focus {
      background-color: @--primary-color;
      outline: no;
    }
  }
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .movie {
    position: relative;
    width: 300px;
    margin: 1em;
    border-radius: 3px;
    background-color: @--secondary-color;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    img {
      width: 100%;
    }

    .movie-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5em 1em 1em;
      gap: 0.2em;
      color: #eee;
      letter-spacing: 0.5px;

      h3 {
        margin-top: 0;
      }

      span {
        padding: 0.25em 0.5em;
        border-radius: 3px;
        background-color: @--primary-color;
        font-weight: 700;

        &.green {
          color: lightgreen;
        }

        &.orange {
          color: orange;
        }

        &.red {
          color: red;
        }
      }
    }

    .overview {
      max-height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 2em;
      background-color: #fff;
      transform: translateY(101%);
      overflow-y: auto;
      transition: transform 0.3s ease-in;
    }

    &:hover .overview {
      transform: translateY(0);
    }
  }
}
</style>
