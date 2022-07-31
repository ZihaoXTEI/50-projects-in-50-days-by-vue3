<template>
  <div id="page">
    <div class="screen" :class="{ up: status > 0 }">
      <h1>昆虫捕捉</h1>
      <button class="btn" @click="status++">开始游戏</button>
    </div>

    <div class="screen" :class="{ up: status > 1 }">
      <choose-insect @chooseInsect="chooseInsect"></choose-insect>
    </div>

    <div class="screen game-container" :class="{ up: status == 0 }">
      <h3 id="time" class="time">时间：00:00</h3>
      <h3 id="score" class="score">分数：{{ score }}</h3>
      <little-insect
        v-if="status == 2"
        :insect="insectInfo"
        @increaseScore="increaseScore"
      ></little-insect>

      <div class="message" v-if="status == 3">
        你生气了吗？<br />
        你在玩一个难对付的游戏！！<br />
        <button class="btn" @click="handleReplay">重新开始</button>
      </div>
    </div>

    <back-home v-if="status !== 2"></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'
import ChooseInsect from './choose-insect.vue'
import LittleInsect from './little-insect.vue'

export default {
  name: 'insect-catch-game',
  components: {
    ChooseInsect,
    LittleInsect
  },
  setup() {
    const status = ref(0)
    const score = ref(0)
    const insectInfo = ref({})

    const chooseInsect = (insect) => {
      status.value++
      insectInfo.value = insect
    }

    const handleReplay = () => {
      status.value = 0
      score.value = 0
      insectInfo.value = {}
    }

    const increaseScore = () => {
      score.value++
      if (score.value > 5) {
        status.value++
      }
    }

    return {
      status,
      score,
      insectInfo,
      chooseInsect,
      increaseScore,
      handleReplay
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  height: 100vh;
  margin: 0;
  background-color: #757575;
  font-family: 'Press Start 2P', sans-serif;
  color: #fff;
  text-align: center;
  overflow: hidden;
}

h1 {
  line-height: 1.4;
}

.btn {
  padding: 15px 20px;
  border: 0;
  background-color: #fff;
  font-family: inherit;
  font-size: 18px;
  color: #607d8b;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
}

.screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  transition: margin 0.5s ease-out;

  &.up {
    margin-top: -100vh;
  }
}

.game-container {
  position: relative;

  .time,
  .score {
    position: absolute;
    top: 20px;
  }

  .time {
    left: 20px;
  }

  .score {
    right: 20px;
  }

  .message {
    width: 100%;
    padding: 20px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 150%);
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 36px;
    text-align: center;
    transition: transform 0.4s ease-in;

    .btn {
      margin-top: 20px;
    }
  }
}
</style>
