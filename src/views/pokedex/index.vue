<template>
  <div id="page">
    <h1>Pokémon 宝可梦图鉴</h1>

    <div class="poke-container">
      <template v-for="item in pokeMonData" :key="item.id">
        <div class="pokemon" :style="{ 'background-color': item.color }">
          <div class="img-container">
            <img :src="item.imageUrl" :alt="item.name" />
          </div>
          <div class="info">
            <span class="number">{{ item.id }}</span>
            <h3 class="name">{{ item.name }}</h3>
            <small class="type">
              Type:
              <span>{{ item.type }}</span>
            </small>
          </div>
        </div>
      </template>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import { getAllPokeMonData } from './service'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'pokedex',
  setup() {
    let pokeMonData = ref(null)

    onBeforeMount(() => {
      getPokeMonData()
    })

    const getPokeMonData = async () => {
      pokeMonData.value = await getAllPokeMonData()
    }
    return {
      pokeMonData
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-image: linear-gradient(to right, #d4d3dd, #efefbb);
  font-family: '等线', sans-serif;
}

h1 {
  letter-spacing: 3px;
}

.poke-container {
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
}

.pokemon {
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #eee;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  text-align: center;

  .img-container {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    text-align: center;

    img {
      max-width: 90%;
      margin-top: 20px;
    }
  }
  .info {
    margin-top: 20px;

    .number {
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 0.8em;
      background-color: rgba(0, 0, 0, 0.1);
    }

    .name {
      margin: 15px 0 7px;
      letter-spacing: 1px;
    }
  }
}
</style>
