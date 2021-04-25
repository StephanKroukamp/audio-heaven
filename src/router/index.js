import VueRouter from 'vue-router'

import home from '@/views/home/index'
import library from '@/views/library/index'
import search from '@/views/search/index'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/library',
      name: 'library',
      component: library
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
  ]
})