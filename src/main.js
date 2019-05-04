import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false

import './../node_modules/bulma/css/bulma.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
