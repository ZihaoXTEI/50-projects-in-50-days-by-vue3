export const myRoutes = [
  {
    path: '/',
    redirect: '/home-page'
  },
  {
    path: '/home-page',
    name: 'home-page',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '../views/home/index.vue')
  },
  {
    path: '/expanding-cards',
    name: 'expanding-cards',
    component: () =>
      import(
        /* webpackChunkName: "expanding-cards" */ '../views/expanding-cards/index.vue'
      )
  }
]
