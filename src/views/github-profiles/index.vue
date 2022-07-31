<template>
  <div id="page">
    <form class="user-form" @submit="handleSubmit">
      <input
        type="text"
        placeholder="搜索一位 Github 用户"
        v-model="searchText"
      />
    </form>

    <main class="main" v-show="isSuccess >= 0">
      <div class="card" v-if="isSuccess == 1">
        <div>
          <img
            class="avatar"
            :src="userInfo.avatar_url"
            :alt="userInfo.login"
          />
        </div>
        <div class="user-info">
          <h2>{{ userInfo.name || userInfo.login }}</h2>
          <p>{{ userInfo.bio }}</p>
          <ul>
            <li>{{ userInfo.followers }} <strong>Followers</strong></li>
            <li>{{ userInfo.following }} <strong>Following</strong></li>
            <li>{{ userInfo.public_repos }} <strong>Repos</strong></li>
          </ul>

          <div class="repos">
            <template v-for="(item, index) in repoList" :key="index">
              <a class="repo" :href="item.href" target="_blank">
                {{ item.name }}
              </a>
            </template>
          </div>
        </div>
      </div>

      <div class="card" v-if="isSuccess == 0">
        <h1>该用户不存在或网络连接错误</h1>
      </div>
    </main>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getUser } from './service'
export default {
  name: 'github-profiles',
  setup() {
    const userInfo = ref({})
    const repoList = ref([])
    const searchText = ref('')
    const isSuccess = ref(-1)

    const handleSubmit = async (e) => {
      e.preventDefault()

      if (searchText.value != '') {
        try {
          const { userinfo, repos } = await getUser(searchText.value)
          userInfo.value = userinfo
          repoList.value = repos
          isSuccess.value = 1
        } catch (err) {
          isSuccess.value = 0
        }
      }

      searchText.value = ''
    }

    return {
      userInfo,
      repoList,
      searchText,
      isSuccess,
      handleSubmit
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
  background-color: #536dfe;
  font-family: '华文细黑', sans-serif;
  font-size: 14px;
  color: #fff;
  overflow: hidden;
}

.user-form {
  max-width: 700px;
  width: 100%;

  input {
    width: 100%;
    display: block;
    margin-bottom: 2em;
    padding: 1em;
    border: none;
    border-radius: 10px;
    background-color: #3f51b5;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(0, 0, 0, 0.1);
    font-family: inherit;
    font-size: 1em;
    color: #fff;

    &::placeholder {
      color: #bdbdbd;
    }

    &:focus {
      outline: none;
    }
  }
}

.main {
  .card {
    max-width: 800px;
    display: flex;
    margin: 0 1.5em;
    padding: 3em;
    border-radius: 20px;
    background-color: #3f51b5;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(0, 0, 0, 0.1);

    .avatar {
      width: 150px;
      height: 150px;
      border: 10px solid #3f51b5;
      border-radius: 50%;
    }

    .user-info {
      margin-left: 2em;
      color: #eee;

      h2 {
        margin-top: 0;
      }

      ul {
        max-width: 400px;
        display: flex;
        justify-content: space-between;
        padding: 0;
        list-style-type: none;

        li {
          display: flex;
          align-items: center;
          margin-right: 10px;

          strong {
            margin-left: 0.5em;
            font-size: 0.9em;
          }
        }
      }
    }

    .repo {
      display: inline-block;
      margin-right: 0.5em;
      margin-bottom: 0.5em;
      padding: 0.25em 0.25em;
      background-color: #536dfe;
      font-size: 0.7em;
      color: #fff;
      text-decoration: none;
    }
  }
}

@media (max-width: 500px) {
  .card {
    flex-direction: column;
    align-items: center;
  }

  .user-form {
    max-width: 400px;
  }
}
</style>
