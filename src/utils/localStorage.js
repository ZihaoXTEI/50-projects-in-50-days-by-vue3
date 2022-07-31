// 本地存储
class LocalStorage {
  storage = window.localStorage

  setCache(key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache(key) {
    const value = this.storage.getItem(key)
    console.log('a', value)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

export default new LocalStorage()
