import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant';
import 'vant/lib/index.css';
import external from './components/external.vue';
import scroller from './components/scroller.vue';
Vue.config.productionTip = false
Vue.component(external.name,external);
Vue.component(scroller.name,scroller)
Vue.use(vant)
router.animation='go';
new Vue({
  created(){
    console.log('main created...')
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
