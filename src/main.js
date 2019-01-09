import Vue from 'vue'
import App from './App.vue'

import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
