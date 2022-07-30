<template>
  <div id="page">
    <div class="container">
      <header class="header">
        <h4 class="title">实时用户筛选器</h4>
        <small class="subtitle">按名称搜索</small>
        <input
          type="text"
          placeholder="输入内容搜索"
          v-model="searchText"
          @input="handleFilterData"
        />
      </header>

      <ul class="user-list">
        <li v-if="!filterUserList">
          <h3>加载中</h3>
        </li>

        <template v-for="item in filterUserList" :key="item.uuid">
          <li>
            <img :src="item.imageUrl" :alt="item.firstName" />
            <div class="user-info">
              <h4>{{ item.firstName }} {{ item.lastName }}</h4>
              <p>{{ item.city }}, {{ item.country }}</p>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <back-home></back-home>
  </div>
</template>

<script>
import { ref, computed, onBeforeMount } from 'vue'
import { getUserData } from './service'
export default {
  name: 'live-user-filter',
  setup() {
    let userList = ref()
    let filterUserList = computed(() => {
      if (userList.value) {
        return userList.value.filter((user) => user.isShow)
      } else {
        return []
      }
    })

    const searchText = ref('')

    onBeforeMount(async () => {
      await getUserList()
    })

    const getUserList = async () => {
      userList.value = await getUserData()
    }

    const handleFilterData = () => {
      console.log(searchText.value)
      userList.value.forEach((user) => {
        if (
          user.firstName.includes(searchText.value) ||
          user.lastName.includes(searchText.value)
        ) {
          user.isShow = true
        } else {
          user.isShow = false
        }
      })
    }

    return {
      filterUserList,
      searchText,
      handleFilterData
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
  font-family: '等线', sans-serif;
  background-color: #f8f9fd;
  overflow: hidden;
}

.container {
  width: 300px;
  border-radius: 5px;
  background-color: 3px 3px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.header {
  padding: 30px 20px;
  background-color: #3e57db;
  color: #fff;
  text-align: left;

  .title {
    margin: 0;
    font-size: 24px;
  }

  .subtitle {
    display: inline-block;
    margin: 5px 0 20px;
    opacity: 0.8;
  }

  input {
    width: 100%;
    padding: 10px 15px;
    border: 0;
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 14px;
    color: #fff;

    &:focus {
      outline: none;
    }
  }
}

.user-list {
  max-height: 400px;
  margin: 0;
  padding: 0;
  background-color: #fff;
  list-style-type: none;
  overflow-y: auto;

  li {
    display: flex;
    padding: 20px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .user-info {
      margin-left: 10px;
      text-align: left;
      overflow: hidden;

      h4 {
        margin: 0 0 10px;
        font-size: 18px;
        font-weight: bold;
      }

      p {
        font-size: 12px;
      }
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid #eee;
    }

    &.hide {
      display: none;
    }
  }
}
</style>
