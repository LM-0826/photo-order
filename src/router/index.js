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
        require(['../views/Pc/Pc-Login.vue'], resolve)
      }
    },
    {
      path: '/pc',
      component: resolve => {
        require(['../views/Pc/Pc-Index.vue'], resolve)
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
            require(['../views/Pc/Order-Index.vue'], resolve)
          }
        },
        {
          path: 'orderBuy',
          name: 'orderBuy',
          meta: {
            keepAlive: false
          },
          component: resolve => {
            require(['../views/Pc/Order-Buy.vue'], resolve)
          }
        },
        {
          path: 'myOrder',
          name: 'myOrder',
          meta: {
            keepAlive: false
          },
          component: resolve => {
            require(['../views/Pc/My-Order.vue'], resolve)
          }
        },
        {
          path: 'cart',
          name: 'cart',
          meta: {
            keepAlive: false
          },
          component: resolve => {
            require(['../views/Pc/Cart.vue'], resolve)
          }
        },
        {
          path: 'pay',
          name: 'pay',
          meta: {
            keepAlive: false
          },
          component: resolve => {
            require(['../views/Pc/Pay.vue'], resolve)
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
        require(['../views/Mobile/Mobile-Login.vue'], resolve)
      }
    },
    {
      path: '/mobile',
      component: resolve => {
        require(['../views/Mobile/Mobile-Index.vue'], resolve)
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
            require(['../views/Mobile/Order-Index.vue'], resolve)
          }
        },
        {
          path: 'orderBuy',
          name: 'orderBuy',
          meta: {
            keepAlive: false
          },
          component: resolve => {
            require(['../views/Mobile/Order-Buy.vue'], resolve)
          }
        },
        {
          path: 'myOrder',
          name: 'myOrder',
          meta: {
            keepAlive: false
          },
          component: resolve => {
            require(['../views/Mobile/My-Order.vue'], resolve)
          }
        },
        {
          path: 'cart',
          name: 'cart',
          meta: {
            keepAlive: false
          },
          component: resolve => {
            require(['../views/Mobile/Cart.vue'], resolve)
          }
        },
        {
          path: 'pay',
          name: 'pay',
          meta: {
            keepAlive: false
          },
          component: resolve => {
            require(['../views/Mobile/Pay.vue'], resolve)
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