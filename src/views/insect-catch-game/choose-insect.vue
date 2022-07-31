<template>
  <div>
    <h1>你“最喜欢”的昆虫是什么？</h1>
    <ul class="insects-list">
      <template v-for="insect in insectList" :key="insect.id">
        <li>
          <button class="choose-insect-btn" @click="handleBtnClick(insect.id)">
            <p>{{ insect.name }}</p>
            <img :src="insect.imageUrl" :alt="insect.name" />
          </button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { Insects } from './config'
export default {
  name: 'choose-insect',
  emits: ['chooseInsect'],
  setup(_, { emit }) {
    const insectList = Insects

    const handleBtnClick = (id) => {
      const [insect] = insectList.filter((item) => item.id === id)
      emit('chooseInsect', insect)
    }
    return {
      insectList,
      handleBtnClick
    }
  }
}
</script>

<style lang="less" scoped>
.insects-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style-type: none;

  li {
    margin: 10px;

    .choose-insect-btn {
      width: 150px;
      height: 150px;
      border: 2px solid #fff;
      background-color: transparent;
      font-family: inherit;
      color: #fff;
      cursor: pointer;

      &:hove {
        background-color: #fff;
        color: #607d8b;
      }

      &:active {
        background-color: rgba(255, 255, 255, 0.7);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
