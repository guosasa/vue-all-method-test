import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from './plugins/plugin.js'
import directive from './directives/scroll.js'
Vue.config.productionTip = false
import TopBtn from './components/index.js'
import elBtn from 'custom-tst' 

Vue.use(TopBtn)
console.log(directive)
Vue.directive('update1',directive)

Vue.use(elBtn)
// console.log(elBtn)
// console.log(Vue)
// console.log(TopBtn)
// console.log(elButton)
// Vue.use(elButton)
plugin()
// import TopBtn from './components/button1'
// Vue.component('TopBtn', TopBtn)
require('./assets/css/index.less')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


