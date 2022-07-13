export const myRoutes = [
  {
    path: '/',
    redirect: '/home-page'
  },
  {
    path: '/home-page',
    name: 'home-page',
    meta: {
      title: '主页'
    },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '../views/home-page/index.vue')
  },
  {
    path: '/expanding-cards',
    name: 'expanding-cards',
    meta: {
      title: '扩展卡'
    },
    component: () =>
      import(
        /* webpackChunkName: "expanding-cards" */ '../views/expanding-cards/index.vue'
      )
  },
  {
    path: '/progress-steps',
    name: 'progress-steps',
    meta: {
      title: '进度条'
    },
    component: () =>
      import(
        /* webpackChunkName: "progress-steps" */ '../views/progress-steps/index.vue'
      )
  },
  {
    path: '/rotating-nav-animation',
    name: 'rotating-nav-animation',
    meta: {
      title: '旋转导航动画'
    },
    component: () =>
      import(
        /* webpackChunkName: "rotating-nav-animation" */ '../views/rotating-nav-animation/index.vue'
      )
  },
  {
    path: '/hidden-search',
    name: 'hidden-search',
    meta: {
      title: '可隐藏的搜索框'
    },
    component: () =>
      import(
        /* webpackChunkName: "hidden-search" */ '../views/hidden-search/index.vue'
      )
  },
  {
    path: '/blurry-loading',
    name: 'blurry-loading',
    meta: {
      title: '模糊加载'
    },
    component: () =>
      import(
        /* webpackChunkName: "blurry-loading" */ '../views/blurry-loading/index.vue'
      )
  },
  {
    path: '/scroll-animation',
    name: 'scroll-animation',
    meta: {
      title: '滚动动画'
    },
    component: () =>
      import(
        /* webpackChunkName: "scroll-animation" */ '../views/scroll-animation/index.vue'
      )
  },
  {
    path: '/split-landing-page',
    name: 'split-landing-page',
    meta: {
      title: '拆分登录页'
    },
    component: () =>
      import(
        /* webpackChunkName: "split-landing-page" */ '../views/split-landing-page/index.vue'
      )
  }
]
