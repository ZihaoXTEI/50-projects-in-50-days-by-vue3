// 获取元素距离浏览器视口距离
// 参考自Element.getBoundingClientRect()
// https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
export default function (app) {
  app.directive('rect', {
    mounted(el, bindings) {
      window.addEventListener('scroll', () => {
        const truggerBottom = (window.innerHeight / 5) * 4
        const boxTop = el.getBoundingClientRect().top
        if (boxTop < truggerBottom) {
          el.classList.add(bindings.value)
        } else {
          el.classList.remove(bindings.value)
        }
      })
    }
  })
}
