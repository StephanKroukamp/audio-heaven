import VueRouter from 'vue-router'

import index from '@/views/index'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    }
  ]
})