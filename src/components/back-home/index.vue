<template>
  <div class="back" @click="handleBackClick">返回</div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'back-home',
  setup() {
    const router = useRouter()

    const handleBackClick = () => {
      router.push('/home-page')
    }
    return {
      handleBackClick
    }
  }
}
</script>

<style lang="less" scoped>
.back {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  right: 50px;
  bottom: 50px;
  color: #fff;
  background-color: skyblue;
  box-shadow: 5px 5px 10px -4px rgba(0, 0, 0, 0.3);
}
</style>
