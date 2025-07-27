import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: () => import('@/pages/IndexPage.vue')
      },
      {
        path: 'resources/tools',
        component: () => import('@/pages/resources/ToolsPage.vue')
      },
      {
        path: 'resources/news',
        component: () => import('@/pages/resources/NewsPage.vue')
      },
      {
        path: 'resources/sites',
        component: () => import('@/pages/resources/SitesPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 