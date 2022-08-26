import Vue from 'vue'
import VueRouter from 'vue-router'
import { Layout } from '@/layout'
import { getCookie,deleteCookie } from '@/util/cookie.js'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

export const totalRoutes = [
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
  },
  {
    path: '/money',
    component: Layout,
    children: [
      {
        path: 'moneyList',
        component: () => import('@/pages/money/moneyList')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: '/home/',
  routes: totalRoutes
})

export default router
