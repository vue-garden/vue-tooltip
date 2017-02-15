import Vue from 'vue'
import App from './App'
import Tooltip from 'main'

Vue.use(Tooltip)

new Vue({
  el: '#app',
  render: h => h(App)
})
