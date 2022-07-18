import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '系统登录',
    component: login
  },
]

const router = new VueRouter({
  routes
})

export default router
