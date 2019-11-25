import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
Vue.use(Router)
NProgress.configure({ showSpinner: true })
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        require(['../views/login.vue'], resolve)
      }
    },
    {
      path: '/user',
      component: resolve => {
        require(['../views/index.vue'], resolve)
      },
      children: [
        {
          path: '',
          redirect: 'queryAccount'
        },
        {
          path: 'queryAccount',
          name: 'QueryAccount',
          meta: {
            keepAlive: true,
            firstCrumb: '运营账号管理',
            secondCrumb: '运营账号查询'
          },
          component: resolve => {
            require(['../views/OperationAccount/QueryAccount.vue'], resolve)
          }
        },
        {
          path: 'addOperationAccount',
          name: 'AddOperationAccount',
          meta: {
            keepAlive: true,
            firstCrumb: '运营账号管理',
            secondCrumb: '添加运营账号'
          },
          component: resolve => {
            require(['../views/OperationAccount/AddAccount.vue'], resolve)
          }
        }
      ]
    }
  ]
})
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
    let tempMenuList = JSON.parse(sessionStorage.getItem('menuList'))
    let currentMenu = ['/login']
    tempMenuList.forEach(child => {
      child.children.forEach(item => {
        currentMenu.push(item.url)
        currentMenu = currentMenu.concat(item.siblings)
      })
    })
    if (!currentMenu.includes(to.path)) {
      console.log(`您好，您没有权限跳转到 ${to.path} ，请在运营账户管理添加对应的菜单权限~ - ${new Date()}`)
      if (from.path != '/login') {
        next({ path: from.path })
      } else {
        next({ path: currentMenu[1] })
      }
      NProgress.done()
    } else {
      next()
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
export default router