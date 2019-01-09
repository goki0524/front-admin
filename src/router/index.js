import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Products from '@/components/Products.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/products',
      component: Products
    }
  ]
})
