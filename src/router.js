import Vue from 'vue';
import Router from 'vue-router';
import test from './views/set1/test.vue';
import anima from './views/set1/anima.vue';
import timeTable from './views/set1/timeTable.vue';
Vue.use(Router);
export default new Router({
    routes:[
       {
        path:'/index',
        component:test,
        meta:{
            KeepAlive:false
        }
       },
       {
        path:'/anima',
        component:anima,
        meta:{
            KeepAlive:false
        }
       },
       {
        path:'/timeTable',
        component:timeTable,
        meta:{
            KeepAlive:false
        }
       },
       {
        path:'/*',
        component:test,
        meta:{
            KeepAlive:false
        }
       }
    ]
})