import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: () => import(/* webpackChunkName: "events" */ './views/Events.vue')
    },
    {
      path: '/output',
      name: 'output',
      component: () => import(/* webpackChunkName: "output" */ './views/Output.vue')
    }
  ]
})
