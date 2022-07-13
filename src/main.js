import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import './assets/css/base.css'

// 导入图标
import './assets/iconfont/iconfont.css'

// 导入全局自定义指令
import registerDirectives from './directives'
// 导入全局组件
import BackHome from './components/back-home'

const app = createApp(App)
// 注册全局自定义指令
registerDirectives(app)
// 注册全局组件
app.component(BackHome.name, BackHome)

app.use(router)
app.mount('#app')
