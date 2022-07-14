export default function (app) {
  const audioElement = new WeakMap()
  app.directive('playaudio', {
    mounted(el, bindings) {
      audioElement.set(el, bindings.value)
    }
  })
}
