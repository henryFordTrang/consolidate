import Vue from 'vue'
import Router from 'vue-router'
import test from './views/set1/test.vue'
import anima from './views/set1/anima.vue'
import timeTable from './views/set1/timeTable.vue'
import father from './views/father.vue'
import son from './views/son.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/index',
      component: test,
      children: [
        {
          path: '/xxx',
          component: anima,
          meta: {
            bitch: '1'
          },
          children: [
            {
              path: '/grandson',
              component: son
            },
            {
              path: '/grandson1',
              component: father
            }
          ]
        }
      ]
    },
    {
      path: '/father',
      component: father,
      children: [
        {
          path: '/',
          component: son,
          meta: {
            bitch: '1'
          }
        }
      ]
    },
    {
      path: '/anima',
      component: anima,
      meta: {
        KeepAlive: false
      }
    },
    {
      path: '/timeTable',
      component: timeTable,
      meta: {
        KeepAlive: false
      }
    }
  ]
})
