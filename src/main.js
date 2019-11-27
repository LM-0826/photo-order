// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store/index'
import config from './config'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import AjaxPlugin from './http/request.js'
import VueI18n from 'vue-i18n'
import device from './plugins/device'
import  { ToastPlugin } from 'vux'

// import './plugns/vconsole.js'

Vue.config.productionTip = false
Vue.prototype.config = config;
sessionStorage.setItem('token', '1123')
Vue.use(VueLazyLoad)
Vue.use(AjaxPlugin)
Vue.use(ElementUI);
Vue.use(VueI18n)
Vue.use(ToastPlugin, {position: 'middle'})

// 表单响应处理
FastClick.prototype.focus = function(targetElement) {
  var length;    
  if (deviceIsIOS && targetElement.setSelectionRange 
            && targetElement.type.indexOf('date') !== 0 
            && targetElement.type !== 'time' 
            && targetElement.type !== 'month') 
  {
      length = targetElement.value.length;        
      targetElement.focus();        
      targetElement.setSelectionRange(length, length);    
  } else {
      targetElement.focus();    
  }
};

FastClick.attach(document.body)

/*---------使用语言包-----------*/
const i18n = new VueI18n({
  locale: 'cn',    // 语言标识
  messages: {
    'cn': require('./assets/common/lang/cn'),   // 中文语言包
    'en': require('./assets/common/lang/en')    // 英文语言包
  },
})

// 将设备信息进行原型挂载
for (let key in device) {
  Vue.prototype[key] = device[key]
}

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app")
