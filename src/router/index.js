import { createRouter, createWebHistory } from 'vue-router'

import { myRoutes } from './my-routes'

const routes = myRoutes

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  window.document.title = to.meta.title
  return true
})

export default router
