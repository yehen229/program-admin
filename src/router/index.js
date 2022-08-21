import Vue from 'vue'
import VueRouter from 'vue-router'
import { Layout } from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    redirect: '/index/index'
  },
  {
    path: '/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/pages/index/index')
      }
    ]
  },
  {
    path: '/share',
    component: Layout,
    children: [{
      path: 'share',
      component: () => import('@/pages/share')
    }]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: 'admin',
        component: () => import('@/pages/user/admin')
      },
      {
        path: 'visitor',
        component: () => import('@/pages/user/visitor')
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: '/home/',
  routes
})

export default router
