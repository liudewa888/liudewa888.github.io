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
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
