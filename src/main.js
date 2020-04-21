import Vue from 'vue'
import App from './App.vue'
import smoothScroll from 'vue-smoothscroll'
import store from './store.js';
import 'es6-promise/auto'
Vue.use(smoothScroll)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
