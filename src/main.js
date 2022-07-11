import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/base.css'

import BackHome from './components/back-home'

const app = createApp(App)

// 注册全局组件
app.component(BackHome.name, BackHome)

app.use(router)
app.mount('#app')
