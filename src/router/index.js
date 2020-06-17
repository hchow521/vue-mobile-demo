import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: resolve => require(['@/views/Home'], resolve),
    children: [
      {
        path: '/number',
        component: resolve => require(['@/views/Number'], resolve),
        children: [
          {
            path: '/bind',
            component: resolve => require(['@/views/Number/bind'], resolve)
          },
          {
            path: '/wait',
            component: resolve => require(['@/views/Number/wait'], resolve)
          }
        ]
      },
      {
        path: '/call',
        component: resolve => require(['@/views/Call'], resolve)
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
