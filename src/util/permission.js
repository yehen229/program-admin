import router from '@/router/index';
import store from '@/store'
import { Layout } from '@/layout'
import { getAdminMenu } from '@/api/menu'
import { getCookie } from './cookie';

function buildAsyncRouter(data) {
  
}

/**
 * 实现权限思路
 * 1、登入后，请求返回role，在路由跳转前根据role异步加载路由
 * 2、当不登出进入login页，判断是否有token，重定向到主页
 * 3、登出login页面，清除cookie和token值，重新加载路由
 * ## 请求发生在@/pages/login/index.vue  loginCheck() ##
 */
router.beforeEach((to, from, next) => {
  if (getCookie("Token") != null) {
    if (to.name == 'login') {
      next('/index/index');
    } else {
      if(store.getters.currentRole == "admin"){
        if (store.getters.isAddRouter == false) {
          router.addRoute({
            path: '/secret',
            name: 'secret',
            component: Layout,
            children: [
              {
                path: 'secret',
                component: () => import('@/pages/secret/secret.vue')
              }
            ]
          })
          store.commit('SET_ISADDROUTER', true);
          next({ ...to, replace: true })
        } else {
          console.log(router.getRoutes(),'router Update')
          next();
        }
      } else {
        console.log(router.getRoutes(),'router Visitor')
        next();
      }
    }
  } else {
    next()
  }
})

