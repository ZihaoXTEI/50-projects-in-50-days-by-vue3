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
  },
  {
    path: '/drag-n-drop',
    name: 'drag-n-drop',
    meta: {
      title: '拖放事件'
    },
    component: () =>
      import(
        /* webpackChunkName: "drag-n-drop" */ '../views/drag-n-drop/index.vue'
      )
  },
  {
    path: '/drawing-app',
    name: 'drawing-app',
    meta: {
      title: '绘画板'
    },
    component: () =>
      import(
        /* webpackChunkName: "drawing-app" */ '../views/drawing-app/index.vue'
      )
  },
  {
    path: '/kinetic-loader',
    name: 'kinetic-loader',
    meta: {
      title: '动态三角形加载效果'
    },
    component: () =>
      import(
        /* webpackChunkName: "kinetic-loader" */ '../views/kinetic-loader/index.vue'
      )
  },
  {
    path: '/content-placeholder',
    name: 'content-placeholder',
    meta: {
      title: '内容占位符（骨架屏）'
    },
    component: () =>
      import(
        /* webpackChunkName: "content-placeholder" */ '../views/content-placeholder/index.vue'
      )
  },
  {
    path: '/sticky-navigation',
    name: 'sticky-navigation',
    meta: {
      title: '粘性导航栏'
    },
    component: () =>
      import(
        /* webpackChunkName: "sticky-navigation" */ '../views/sticky-navigation/index.vue'
      )
  },
  {
    path: '/double-vertical-slider',
    name: 'double-vertical-slider',
    meta: {
      title: '双垂直滑块'
    },
    component: () =>
      import(
        /* webpackChunkName: "double-vertical-slider" */ '../views/double-vertical-slider/index.vue'
      )
  },
  {
    path: '/toast-notification',
    name: 'toast-notification',
    meta: {
      title: '吐司通知'
    },
    component: () =>
      import(
        /* webpackChunkName: "toast-notification" */ '../views/toast-notification/index.vue'
      )
  },
  {
    path: '/double-click-heart',
    name: 'double-click-heart',
    meta: {
      title: '双击心效果'
    },
    component: () =>
      import(
        /* webpackChunkName: "double-click-heart" */ '../views/double-click-heart/index.vue'
      )
  },
  {
    path: '/auto-text-effect',
    name: 'auto-text-effect',
    meta: {
      title: '自动文字效果'
    },
    component: () =>
      import(
        /* webpackChunkName: "auto-text-effect" */ '../views/auto-text-effect/index.vue'
      )
  },
  {
    path: '/password-generator',
    name: 'password-generator',
    meta: {
      title: '密码生成器'
    },
    component: () =>
      import(
        /* webpackChunkName: "password-generator" */ '../views/password-generator/index.vue'
      )
  },
  {
    path: '/good-cheap-fast',
    name: 'good-cheap-fast',
    meta: {
      title: '待办事项'
    },
    component: () =>
      import(
        /* webpackChunkName: "good-cheap-fast" */ '../views/good-cheap-fast/index.vue'
      )
  },
  {
    path: '/notes-app',
    name: 'notes-app',
    meta: {
      title: '笔记应用'
    },
    component: () =>
      import(/* webpackChunkName: "notes-app" */ '../views/notes-app/index.vue')
  },
  {
    path: '/animated-countdown',
    name: 'animated-countdown',
    meta: {
      title: '动画倒计时'
    },
    component: () =>
      import(
        /* webpackChunkName: "animated-countdown" */ '../views/animated-countdown/index.vue'
      )
  },
  {
    path: '/image-carousel',
    name: 'image-carousel',
    meta: {
      title: '图像轮播'
    },
    component: () =>
      import(
        /* webpackChunkName: "image-carousel" */ '../views/image-carousel/index.vue'
      )
  },
  {
    path: '/hoverboard',
    name: 'hoverboard',
    meta: {
      title: '悬停板'
    },
    component: () =>
      import(
        /* webpackChunkName: "hoverboard" */ '../views/hoverboard/index.vue'
      )
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    meta: {
      title: '宝可梦图鉴'
    },
    component: () =>
      import(/* webpackChunkName: "pokedex" */ '../views/pokedex/index.vue')
  },
  {
    path: '/mobile-tab-navigation',
    name: 'mobile-tab-navigation',
    meta: {
      title: '移动标签导航'
    },
    component: () =>
      import(
        /* webpackChunkName: "mobile-tab-navigation" */ '../views/mobile-tab-navigation/index.vue'
      )
  },
  {
    path: '/password-strength-background',
    name: 'password-strength-background',
    meta: {
      title: '密码强度背景'
    },
    component: () =>
      import(
        /* webpackChunkName: "password-strength-background" */ '../views/password-strength-background/index.vue'
      )
  },
  {
    path: '/3d-boxes-background',
    name: '3d-boxes-background',
    meta: {
      title: '3D 背景盒子'
    },
    component: () =>
      import(
        /* webpackChunkName: "3d-boxes-background" */ '../views/3d-boxes-background/index.vue'
      )
  },
  {
    path: '/verify-account-ui',
    name: 'verify-account-ui',
    meta: {
      title: '验证码界面'
    },
    component: () =>
      import(
        /* webpackChunkName: "verify-account-ui" */ '../views/verify-account-ui/index.vue'
      )
  }
]
