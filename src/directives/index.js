import registerRect from './rect'
// import registerPlayAudio from './playAudio'
import registerIncrementCounter from './incrementCounter'

export default function registerDirectives(app) {
  registerRect(app)
  // registerPlayAudio(app)
  registerIncrementCounter(app)
}
