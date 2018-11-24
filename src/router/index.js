import Vue from 'vue'
import Router from 'vue-router'
import SendData from '@/components/SendData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SendData',
      component: SendData
    }
  ]
})
