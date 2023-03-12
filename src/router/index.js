import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/nav'
  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import('../view/Nav.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../view/Search.vue')
  },
  {
    path: '/command',
    name: 'command',
    component: () => import('../view/Command.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
