import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import My from '@/pages/my'
import Vou from  '@/pages/voucher'
import Package from '@/pages/package'
import Health from '@/pages/health'
import PaySu from '@/pages/health/PaySucc'
import CardActive from '@/pages/voucher/CardActive'
import ActiveSucc from '@/pages/voucher/ActiveSucc'
import Order from '@/pages/order'
import OrderDetails from '@/pages/order/OrderDetails'

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
    },
    {
      path: '/package',
      name:  'Package',
      component: Package
    },
    {
      path: '/health',
      name:  'Health',
      component: Health
    },
    {
      path: '/PaySu',
      name:  'PaySu',
      component: PaySu
    },
    {
      path: '/card-active',
      name:  'CardActive',
      component: CardActive
    },
    {
      path: '/active-succ',
      name:  'ActiveSucc',
      component: ActiveSucc
    },
    {
      path: '/order',
      name:  'Order',
      component: Order
    },
    {
      path: '/order-details',
      name:  'OrderDetails',
      component: OrderDetails
    }
  ]
})
