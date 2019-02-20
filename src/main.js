import Vue from 'vue'
import App from './App.vue'
import './assets/style/reset.scss'
import router from './router'
// import axios from 'axios'

Vue.config.productionTip = false

var bus = new Vue();
Vue.prototype.$center = bus

Vue.filter('replaceWH', (path, w, h)=>{
  return path.replace(/w.h/, `${w}.${h}`);
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
