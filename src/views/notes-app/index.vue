<template>
  <div id="page">
    <button class="add" @click="addNote">+</button>

    <template v-for="item in notes" :key="item.id">
      <note-pad
        :note="item"
        @deleteNote="deleteNote"
        @saveNote="saveNote"
      ></note-pad>
    </template>
  </div>

  <back-home></back-home>
</template>

<script>
import { ref } from 'vue'
import { nanoid } from 'nanoid'

import NotePad from './notepad.vue'

import { getNotesFromStorage, saveNotesToStorage } from './utils'
export default {
  name: 'notes-app',
  components: {
    NotePad
  },
  setup() {
    const notes = ref(getNotesFromStorage())

    // const noteList = [{"id":"uXjyhUQMG_r3FJXaLXorJ","note":"今天天气真热！"},{"id":"QGM29Qn1BJj-0-_tOJ3xv","note":"哇塞，怎么块的吗！"},{"id":"3_R1pFyKOLrYkXkPd0JLd","note":"窝窝窝，呐呐！！！"}]

    const addNote = () => {
      const id = nanoid()
      const note = ''
      notes.value.push({ id, note })
    }

    const deleteNote = (id) => {
      notes.value = notes.value.filter((item) => {
        if (item.id !== id) {
          return true
        }
      })

      saveNotesToStorage(notes.value)
    }

    // 保存笔记内容至本地
    const saveNote = (note) => {
      notes.value.forEach((element) => {
        if (element.id === note.id) {
          element.note = note.note
        }
      })

      saveNotesToStorage(notes.value)
    }

    return {
      notes,
      addNote,
      deleteNote,
      saveNote
    }
  }
}
</script>

<!-- <style>
body {
  background-color: #7bdaf3;
}
</style> -->

<style lang="less" scoped>
#page {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding-top: 3rem;
  font-family: '等线', sans-serif;
  font-size: 16px;
}

.add {
  position: fixed;
  top: 1rem;
  right: 1em;
  border: none;
  border-radius: 8px;
  padding: 0.5em 0.8em;
  font-size: 1.8em;
  background-color: #9ec862;
  color: #fff;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
}
</style>
