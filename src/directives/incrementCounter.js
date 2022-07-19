export default function (app) {
  app.directive('incre', {
    mounted(el, bindings) {
      el.innerText = '0'
      const value = +bindings.value
      const increment = value / 200 // 计算递进步长
      let timer = null

      const updateCounter = () => {
        const text = +el.innerText // 获取当前数值

        if (text < value) {
          el.innerText = `${Math.ceil(text + increment)}` // 向上取整
          timer = setTimeout(updateCounter, 1)
        } else {
          clearTimeout(timer)
          el.innerText = value
        }
      }

      updateCounter()
    }
  })
}
