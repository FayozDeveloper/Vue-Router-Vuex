import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  mounted(){
    AOS.init()
  }
}).$mount('#app')
