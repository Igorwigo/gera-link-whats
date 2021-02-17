import Vue from 'vue'
import App from './App.vue'

import Clipboard from 'v-clipboard'
import VueMask from 'v-mask'
Vue.use(VueMask);
Vue.use(Clipboard);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
