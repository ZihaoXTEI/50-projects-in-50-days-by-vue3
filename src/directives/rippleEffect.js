export default function rippleEffect(app) {
  app.directive('ripple-effect', {
    mounted(el, bindings) {
      el.addEventListener('click', (e) => {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const XInside = x - buttonLeft
        const YInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add(bindings.value)
        circle.style.top = YInside + 'px'
        circle.style.left = XInside + 'px'
        el.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
      })
    }
  })
}
