import registerRect from './rect'
// import registerPlayAudio from './playAudio'
import registerIncrementCounter from './incrementCounter'
import registerRippleEffect from './rippleEffect'
import registerDrag from './drag'

export default function registerDirectives(app) {
  registerRect(app)
  // registerPlayAudio(app)
  registerIncrementCounter(app)
  registerRippleEffect(app)
  registerDrag(app)
}
