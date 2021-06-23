import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/main.css'


Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.use(BootstrapVueIcons)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')