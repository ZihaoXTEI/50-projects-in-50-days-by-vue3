<template>
  <div class="note">
    <div class="tools">
      <button class="edit" @click="handleEditClick" v-show="isEdit">
        编辑
      </button>
      <button class="delete" @click="handleDeleteClick">删除</button>
      <button class="save" @click="handleSavaClick">保存</button>
    </div>

    <!-- <div class="main"></div> -->
    <textarea v-model="text" autocomplete="off" :readonly="isEdit"></textarea>
  </div>
</template>

<script>
import { ref, toRaw } from 'vue'

export default {
  name: 'note-pad',
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  emits: ['deleteNote', 'saveNote'],
  setup(props, { emit }) {
    const id = toRaw(props.note.id)
    const text = ref(props.note.note)
    const isEdit = ref(true)

    const handleEditClick = () => {
      isEdit.value = false
    }

    const handleDeleteClick = () => {
      emit('deleteNote', id)
    }

    const handleSavaClick = () => {
      emit('saveNote', { id, note: text.value })
    }
    return {
      text,
      isEdit,
      handleEditClick,
      handleDeleteClick,
      handleSavaClick
    }
  }
}
</script>

<style lang="less" scoped>
.note {
  width: 400px;
  height: 400px;
  margin: 30px 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  .tools {
    display: flex;
    justify-content: flex-end;
    padding: 0.5em;
    background-color: #4caf50;

    button {
      display: inline-block;
      margin-left: 0.5em;
      height: 100%;
      padding: 0.3em;
      border: none;
      border-radius: 5px;
      background-color: #c8e6c9;
      font-size: 1em;
      color: #757575;
      cursor: pointer;

      &:active {
        transform: scale(0.98);
      }
    }
  }

  textarea {
    width: 100%;
    height: 400px;
    padding: 20px;
    border: none;
    font-family: inherit;
    font-size: 1.2em;
    outline: none;
  }

  .main {
    background-color: orange;
    padding: 20px;
  }

  .hidden {
    display: none;
  }
}
</style>
