// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import config from './config'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/api'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.prototype.config = config;

Vue.use(ElementUI);
Vue.use(VueI18n)
Vue.prototype.api = api;

/*---------使用语言包-----------*/
const i18n = new VueI18n({
  locale: 'cn',    // 语言标识
  messages: {
    'cn': require('./assets/common/lang/cn'),   // 中文语言包
    'en': require('./assets/common/lang/en')    // 英文语言包
  },
})


new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app")
