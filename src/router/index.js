import VueRouter from 'vue-router'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index')
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('../views/library/index')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search/index')
    }
  ]
})