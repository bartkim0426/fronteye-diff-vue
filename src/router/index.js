import Vue from 'vue'
import Router from 'vue-router'
import SendData from '@/components/SendData'
import Main from '@/components/Main'
import ListRoom from '@/components/ListRoom'
// import CreateRoom from '@/components/CreateRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/rooms/',
      name: 'ListRoom',
      component: ListRoom
    },
    {
      path: '/rooms/:id',
      name: 'SendData',
      component: SendData
    },
  ]
})