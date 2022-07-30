<template>
  <div id="page">
    <div class="quiz-container">
      <div class="quiz-header" v-if="!isFinish">
        <h2>{{ currentQuiz.question }}</h2>
        <ul>
          <li>
            <input type="radio" id="a" value="a" v-model="answer" />
            <label for="a">{{ currentQuiz.a }}</label>
          </li>

          <li>
            <input type="radio" id="b" value="b" v-model="answer" />
            <label for="b">{{ currentQuiz.b }}</label>
          </li>

          <li>
            <input type="radio" id="c" value="c" v-model="answer" />
            <label for="c">{{ currentQuiz.c }}</label>
          </li>

          <li>
            <input type="radio" id="d" value="d" v-model="answer" />
            <label for="d">{{ currentQuiz.d }}</label>
          </li>
        </ul>
      </div>
      <button class="submit" v-if="!isFinish" @click="handleSubmitClick">
        提交
      </button>

      <div v-if="isFinish">
        <h2>你回答了{{ currentIndex }}题，其中答对了{{ score }}道题</h2>
        <button class="submit" @click="handleReloadClick">重置</button>
      </div>
    </div>
    <back-home></back-home>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { QuizData } from './config'
export default {
  name: 'quiz-app',
  setup() {
    const quizData = QuizData
    const currentIndex = ref(0) // 当前题目
    const score = ref(0) // 得分
    const answer = ref('')
    const isFinish = ref(false)

    const currentQuiz = computed(() => quizData[currentIndex.value])

    const handleSubmitClick = () => {
      if (answer.value == '') {
        alert('请选择答案，再按提交按钮！')
        return
      }

      // 判断选择的答案与正确答案是否相等，记录得分
      if (answer.value === quizData[currentIndex.value].correct) {
        score.value++
      }

      if (currentIndex.value < quizData.length - 1) {
        answer.value = ''
        // 显示下一题
        currentIndex.value++
      } else {
        isFinish.value = true
      }
    }

    const handleReloadClick = () => {
      currentIndex.value = 0
      score.value = 0
      answer.value = ''
      isFinish.value = false
    }

    return {
      currentIndex,
      currentQuiz,
      answer,
      score,
      isFinish,
      handleSubmitClick,
      handleReloadClick
    }
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
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  overflow: hidden;
}

.quiz-container {
  width: 50em;
  border-radius: 0.8em;
  box-shadow: 0 0 0.83em 0.16em rgba(100, 100, 100, 0.1);
  background-color: #fff;
  overflow: hidden;

  .quiz-header {
    padding: 4em;

    h2 {
      margin: 0;
      padding: 1em;
      font-size: 2em;
      text-align: center;
    }
  }
}

ul {
  padding: 0;
  list-style-type: none;
  text-align: left;

  li {
    margin: 1em 0;
    font-size: 1.6em;

    input[type='radio'] {
      margin: 10px;
      vertical-align: middle;
    }

    label {
      cursor: pointer;
    }
  }
}

.submit {
  width: 100%;
  display: block;
  padding: 1.3em;
  border: none;
  background-color: #8e44ad;
  font-size: 1.2em;
  font-family: inherit;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #732d91;
  }

  &:focus {
    outline: none;
    background-color: #5e3370;
  }
}
</style>
