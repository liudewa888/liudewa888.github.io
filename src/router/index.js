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
    path: '/vscode',
    name: 'vscode',
    component: () => import('../view/Vscode.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
