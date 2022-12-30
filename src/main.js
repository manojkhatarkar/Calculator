import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'

import { store } from './store'


Vue.use(VueMeta, {
    keyName: 'head'
  })

Vue.config.productionTip = false

new Vue({
    data: {
       
    },
    store,
    router,
    render: h => h(App)
}).$mount('#app')