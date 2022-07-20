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
  },
  {
    path: '/form-wave',
    name: 'form-wave',
    meta: {
      title: '表单波浪效果'
    },
    component: () =>
      import(/* webpackChunkName: "form-wave" */ '../views/form-wave/index.vue')
  },
  {
    path: '/sound-board',
    name: 'sound-board',
    meta: {
      title: '声音面板'
    },
    component: () =>
      import(
        /* webpackChunkName: "sound-board" */ '../views/sound-board/index.vue'
      )
  },
  {
    path: '/dad-jokes',
    name: 'dad-jokes',
    meta: {
      title: '爸爸的笑话'
    },
    component: () =>
      import(/* webpackChunkName: "dad-jokes" */ '../views/dad-jokes/index.vue')
  },
  {
    path: '/event-keycodes',
    name: 'event-keycodes',
    meta: {
      title: '键盘事件'
    },
    component: () =>
      import(
        /* webpackChunkName: "event-keycodes" */ '../views/event-keycodes/index.vue'
      )
  },
  {
    path: '/faq-collapse',
    name: 'faq-collapse',
    meta: {
      title: 'FAQ 折叠卡片'
    },
    component: () =>
      import(
        /* webpackChunkName: "faq-collapse" */ '../views/faq-collapse/index.vue'
      )
  },
  {
    path: '/random-choice-picker',
    name: 'random-choice-picker',
    meta: {
      title: '随机选择选择器'
    },
    component: () =>
      import(
        /* webpackChunkName: "random-choice-picker" */ '../views/random-choice-picker/index.vue'
      )
  },
  {
    path: '/animated-navigation',
    name: 'animated-navigation',
    meta: {
      title: '动画导航栏'
    },
    component: () =>
      import(
        /* webpackChunkName: "animated-navigation" */ '../views/animated-navigation/index.vue'
      )
  },
  {
    path: '/incrementing-counter',
    name: 'incrementing-counter',
    meta: {
      title: '递增计算器'
    },
    component: () =>
      import(
        /* webpackChunkName: "incrementing-counter" */ '../views/incrementing-counter/index.vue'
      )
  },
  {
    path: '/drink-water',
    name: 'drink-water',
    meta: {
      title: '每日喝水'
    },
    component: () =>
      import(
        /* webpackChunkName: "drink-water" */ '../views/drink-water/index.vue'
      )
  },
  {
    path: '/movie-app',
    name: 'movie-app',
    meta: {
      title: '电影App'
    },
    component: () =>
      import(/* webpackChunkName: "movie-app" */ '../views/movie-app/index.vue')
  },
  {
    path: '/background-slider',
    name: 'background-slider',
    meta: {
      title: '背景滑块墙'
    },
    component: () =>
      import(
        /* webpackChunkName: "background-slider" */ '../views/background-slider/index.vue'
      )
  },
  {
    path: '/theme-clock',
    name: 'theme-clock',
    meta: {
      title: '主题时钟'
    },
    component: () =>
      import(
        /* webpackChunkName: "theme-clock" */ '../views/theme-clock/index.vue'
      )
  },
  {
    path: '/button-ripple-effect',
    name: 'button-ripple-effect',
    meta: {
      title: '按钮波纹效果'
    },
    component: () =>
      import(
        /* webpackChunkName: "button-ripple-effect" */ '../views/button-ripple-effect/index.vue'
      )
  }
]
