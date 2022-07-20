import registerRect from './rect'
// import registerPlayAudio from './playAudio'
import registerIncrementCounter from './incrementCounter'
import registerRippleEffect from './rippleEffect'

export default function registerDirectives(app) {
  registerRect(app)
  // registerPlayAudio(app)
  registerIncrementCounter(app)
  registerRippleEffect(app)
}
