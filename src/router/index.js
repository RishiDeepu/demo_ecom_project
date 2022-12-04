import Vue from 'vue'
import VueRouter from 'vue-router'
import AppBar from '../components/Appbar.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'appBAr',
    component: AppBar,
    
  },
  
]

const router = new VueRouter({
  routes
})

export default router
