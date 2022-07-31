const API_URL = 'https://api.github.com/users/'

export const getUser = async (username) => {
  try {
    const res = await fetch(API_URL + username)
    const userinfo = await res.json()

    const repos = await getRepos(username)

    return { userinfo, repos }
  } catch (err) {
    throw new Error('该用户不存在或网络连接错误')
  }
}

const getRepos = async (username) => {
  try {
    const res = await fetch(API_URL + username + '/repos?sort=created')
    const data = await res.json()

    const repos = []

    data.slice(0, 5).forEach((repo) => {
      const href = repo.html_url
      const name = repo.name
      repos.push({ name, href })
    })

    return repos
  } catch (err) {
    throw new Error('网络连接错误')
  }
}
