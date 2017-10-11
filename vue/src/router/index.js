import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import QjlHome from '@/vues/QklHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QjlHome',
      component: QjlHome,
    }
  ]
})
