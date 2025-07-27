const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'resources/news', component: () => import('pages/resources/NewsPage.vue') },

      { 
        path: '/:catchAll(.*)*', 
        component: () => import('pages/NotFoundPage.vue') 
      }
    ]
  }
]

export default routes 