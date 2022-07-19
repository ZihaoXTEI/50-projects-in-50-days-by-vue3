<template>
  <div id="page">
    <div class="container">
      <h3>输入所有选项，并用英文逗号（','）分隔。<br />完成后按 enter 键</h3>

      <textarea
        placeholder="在此处输入选项"
        ref="textarea"
        v-model="inputText"
        @keyup.enter="handleEnterKeyUp"
      ></textarea>

      <template v-for="tag in tagList" :key="tag.index">
        <div
          class="tags"
          :class="{ highlight: tag.index === highlightTagIndex }"
        >
          {{ tag.text }}
        </div>
      </template>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
export default {
  name: 'random-choice-picker',
  setup() {
    const textarea = ref(null)
    const inputText = ref('')
    const highlightTagIndex = ref(-1)
    let tagList = ref([])

    onMounted(() => {
      // 光标在 textarea 中
      textarea.value.focus()
    })

    // 监听 输入框
    watch(inputText, (newValue) => {
      let index = 0
      tagList.value = newValue
        .split(',') // 根据 , 割字符串，返回数组
        .filter((tag) => tag.trim() !== '') // 过滤掉空字符
        .map((tag) => ({ index: index++, text: tag.trim() })) //去除字符串两端的空格，并返回对象数组
    })

    const handleEnterKeyUp = () => {
      const time = 30 // 毫秒
      const tagListLength = tagList.value.length

      // 设置每隔 100 毫秒随机高亮显示一个 tag

      // setInterval指定某个任务每隔一段时间就执行一次
      const interval = setInterval(() => {
        const randomTag = Math.floor(Math.random() * tagListLength)

        if (randomTag !== undefined) {
          highlightTagIndex.value = randomTag

          // 100 毫秒后取消高亮显示
          setTimeout(() => {
            highlightTagIndex.value = -1
          }, 100)
        }
      }, 100)

      // 30 * 100 毫秒后完成筛选，在 100 毫秒后随机显示一个 tag
      setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
          const randomTag = Math.floor(Math.random() * tagListLength)
          highlightTagIndex.value = randomTag
        }, 100)
      }, time * 100)
    }

    return {
      textarea,
      inputText,
      highlightTagIndex,
      tagList,
      handleEnterKeyUp
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
  height: 100vh;
  margin: 0;
  font-family: '等线', sans-serif;
  background-color: #2b88f0;
  overflow: hidden;
}

.container {
  width: 500px;

  h3 {
    margin: 10px 0 20px;
    text-align: center;
    color: #fff;
  }

  textarea {
    display: block;
    width: 100%;
    height: 100px;
    margin: 0 0 20px;
    padding: 10px;
    border: none;
    font-family: inherit;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }

  .tags {
    display: inline-block;
    margin: 0 5px 10px 0;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 14px;
    color: #fff;
    background-color: #f0932b;

    &.highlight {
      background-color: #273c75;
    }
  }
}
</style>
