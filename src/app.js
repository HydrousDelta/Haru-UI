import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './App.vue'
import HaComponents from './components'
import HaCoordinater from './coordinater'
import HaMaterials from './materials'
import HaOthers from './others'
import HaIcons from './icons'
import './scss'

Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.use(VueRouter)

Vue.use(HaComponents)
Vue.use(HaMaterials)
Vue.use(HaCoordinater)
Vue.use(HaOthers)
Vue.use(HaIcons)

const router = new VueRouter({
   // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')