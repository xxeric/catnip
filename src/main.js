import Vue from 'vue'
import App from './App.vue'

// import catnip from '../packages/index'
// Vue.use(catnip)

import catnip from 'catnip-ui'
import 'catnip-ui/lib/style/index.css'
Vue.use(catnip)
console.log(catnip)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
