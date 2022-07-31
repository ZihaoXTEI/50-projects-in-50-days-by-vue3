<template>
  <div id="page">
    <h1>代办事项</h1>

    <form @submit="handleSubmit">
      <input
        type="text"
        class="input"
        placeholder="输入待办事项"
        v-model="inputText"
        autocomplete="off"
      />

      <ul class="todos">
        <template v-for="item in todolist" :key="item.id">
          <li
            :class="{ completed: item.isCompleted }"
            @click="handleItemClick(item.id)"
            @contextmenu="handleItemRightClick(item.id, $event)"
          >
            {{ item.text }}
          </li>
        </template>
      </ul>
    </form>

    <small
      >单击鼠标左键切换已完成
      <br />
      右击删除待办事项
    </small>
    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

import localStorage from '@/utils/localStorage'
import { nanoid } from 'nanoid'

export default {
  name: 'todo-list',
  setup() {
    const todolist = ref(localStorage.getCache('todos') || [])
    const inputText = ref('')

    // 新增 todo 提交事件
    const handleSubmit = (e) => {
      // 阻止事件冒泡
      e.preventDefault()

      if (inputText.value == '') {
        alert('请输入内容')
        return
      }

      const id = nanoid()
      const text = inputText.value
      const isCompleted = false
      todolist.value.push({ id, text, isCompleted })

      inputText.value = ''

      // 保存 todos 至本地
      localStorage.setCache('todos', todolist.value)
    }

    // 左击切换 todo 状态
    const handleItemClick = (id) => {
      todolist.value.forEach((item) => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted
        }
      })

      // 保存 todos 至本地
      localStorage.setCache('todos', todolist.value)
    }

    // 右击删除 todo 事件
    const handleItemRightClick = (id, e) => {
      // 阻止事件冒泡
      e.preventDefault()

      todolist.value = todolist.value.filter((item) => item.id !== id)

      // 保存 todos 至本地
      localStorage.setCache('todos', todolist.value)
    }

    return {
      todolist,
      inputText,
      handleSubmit,
      handleItemClick,
      handleItemRightClick
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
  min-height: 100vh;
  margin: 0;
  background-color: #f5f5f5;
  font-family: '华文细黑', sans-serif;
  font-size: 12px;
  color: #444;
}

h1 {
  font-size: 10em;
  text-align: center;
  color: #8bc34a;
  opacity: 0.4;
}

form {
  max-width: 100%;
  width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .input {
    display: block;
    width: 100%;
    padding: 1em 2em;
    border: none;
    font-size: 2em;
    color: #444;

    &::placeholder {
      color: #bdbdbd;
    }

    &:focus {
      outline-color: #689f38;
    }
  }
}

.todos {
  margin: 0;
  padding: 0;
  background-color: #fff;
  list-style-type: none;

  li {
    padding: 1em 2em;
    border-top: 1px solid #bdbdbd;
    font-size: 1.5em;
    cursor: pointer;

    &.completed {
      text-decoration: line-through;
      color: #757575;
    }
  }
}

small {
  margin-top: 3em;
  font-size: 1.2em;
  text-align: center;
  color: #bdbdbd;
}
</style>
