import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vant from 'vant';
import {stringify} from 'qs'
import 'vant/lib/index.css';
import external from './components/external.vue';
import scroller from './components/scroller.vue';
import iosPad from './components/iosPad.vue';
import laydate from 'laydate';
Vue.config.productionTip = false
Vue.component(external.name,external);
Vue.component(scroller.name,scroller);
Vue.component(iosPad.name,iosPad);
Vue.use(vant);
Vue.use(laydate);
Vue.prototype.$axios=axios;
router.animation='go';
Vue.prototype.$util={
  stringify,
  axiosUrl(){
    return window.location.pathname.split("/phone")[0]
  }
},
new Vue({
  created(){
    console.log('main created...')
  },

  router,
  store,
  render: h => h(App),
}).$mount('#app')
