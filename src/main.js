import Vue from 'vue'
import App from './App.vue'
import smoothScroll from 'vue-smoothscroll'
import 'es6-promise/auto'
Vue.use(smoothScroll)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
