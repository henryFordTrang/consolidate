import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import vant from 'vant';
import { stringify } from 'qs'
import 'vant/lib/index.css'
import external from './components/external.vue'
import scroller from './components/scroller.vue'
import iview from 'iview'
import iosPad from './components/iosPad.vue'
import TreeTable from 'tree-table-vue'
import laydate from 'laydate'
Vue.config.productionTip = false
Vue.component(external.name, external)
Vue.component(scroller.name, scroller)
Vue.component(iosPad.name, iosPad)
// Vue.use(vant);
Vue.use(iview)
Vue.use(laydate)
Vue.use(TreeTable)
Vue.prototype.$axios = axios
router.animation = 'go'
Vue.prototype.$util = {
  stringify,
  axiosUrl () {
    return window.location.pathname.split('/phone')[0]
  }
},
new Vue({
  created () {
    process.env.NODE_ENV === 'production' ? '' : new VConsole()
  },

  router,
  store,
  render: h => h(App)
}).$mount('#app')
