import Vue from 'vue'
import Router from 'vue-router'
import qqyy from '@/components/page/qqyy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'qqyy',
      component: qqyy
    }
  ]
})
