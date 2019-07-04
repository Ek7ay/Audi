import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import My from '@/pages/my'
import Vou from  '@/pages/voucher'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/my',
      name:  'My',
      component: My
    },
    {
      path: '/vou',
      name:  'Vou',
      component: Vou
    }
  ]
})
