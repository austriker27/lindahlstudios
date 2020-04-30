import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require("typeface-fira-sans");
require("typeface-fira-mono");


new Vue({
  render: h => h(App),
}).$mount('#app')
