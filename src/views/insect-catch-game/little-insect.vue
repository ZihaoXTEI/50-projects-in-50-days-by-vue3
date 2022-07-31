<template>
  <div
    v-for="item in freshInsects"
    :key="item.id"
    class="insect"
    :style="{ top: item.y, left: item.x }"
    @click="handleCatchInsect(item.id)"
  >
    <img :src="insect.imageUrl" :alt="insect.name" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { nanoid } from 'nanoid'

export default {
  name: 'little-insect',
  props: {
    insect: {
      type: Object,
      required: true
    }
  },
  emits: ['increaseScore'],
  setup(_, { emit }) {
    const freshInsects = ref([])

    const handleCatchInsect = (id) => {
      emit('increaseScore')

      freshInsects.value = freshInsects.value.filter((item) => item.id != id)

      setTimeout(createInsect, 1000)
      setTimeout(createInsect, 1500)
    }

    onMounted(() => {
      setTimeout(createInsect, 1000)
    })

    const createInsect = () => {
      let { x, y } = getRandomLocation()
      x = `${x}px`
      y = `${y}px`
      const id = nanoid()
      freshInsects.value.push({ id, x, y })
    }

    const getRandomLocation = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const x = Math.random() * (width - 200) + 100
      const y = Math.random() * (height - 200) + 100
      return { x, y }
    }

    return { freshInsects, handleCatchInsect }
  }
}
</script>

<style lang="less" scoped>
.insect {
  position: absolute;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.3s ease-in-out;
  z-index: 10000;
  cursor: pointer;

  &.caught {
    transform: translate(-50%, -50%) scale(0);
  }

  img {
    width: 100px;
    height: 100px;
  }
}
</style>
