// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

 
Vue.use(VueAxios, axios)
Vue.use(VueCodemirror, {
  events: ['change', 'changes', 'focus', 'scroll', 'keyup']
})

Vue.config.productionTip = false

// /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
