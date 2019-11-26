import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
import device from '../plugins/device'
const ISPC = device.isPC
Vue.use(Router)
NProgress.configure({ showSpinner: false })
const PC_ROUTER = {
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        require(['../views/Pc-Login.vue'], resolve)
      }
    },
    {
      path: '/pc',
      component: resolve => {
        require(['../views/Pc-Index.vue'], resolve)
      },
      redirect: 'orderIndex',
      children: [
        {
          path: 'orderIndex',
          name: 'OrderIndex',
          meta: {
            keepAlive: false
          },
          component: resolve => {
            require(['../views/Order/Index.vue'], resolve)
          }
        }
      ]
    }
  ]
}
const MOBILE_ROUTER = {
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        require(['../views/Mobile-Login.vue'], resolve)
      }
    },
    {
      path: '/mobile',
      component: resolve => {
        require(['../views/Mobile-Index.vue'], resolve)
      },
      redirect: 'orderIndex',
      children: [
        {
          path: 'orderIndex',
          name: 'OrderIndex',
          meta: {
            keepAlive: false
          },
          component: resolve => {
            require(['../views/Order/Index.vue'], resolve)
          }
        }
      ]
    }
  ]
}

const router = new Router(ISPC ? PC_ROUTER : MOBILE_ROUTER)
// 路由前置 后置拦截
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  let token = sessionStorage.getItem('token')
  if (!token) {
    if (to.path !== '/login') {  
      console.log(`token失效，开始重新登录~ - ${new Date()}`)
      next({ path: `/login?redirect=${to.path}` })
      NProgress.done()
    } else {
      next()
      NProgress.done()
    }
  } else {
    next()
    NProgress.done()
  }
})
router.afterEach(() => {
  NProgress.done()
})

export default router