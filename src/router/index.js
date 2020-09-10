import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import order from '@/components/order'
import recharge from '@/components/recharge'
import result from '@/components/result'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
  ]
})
