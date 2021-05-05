import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
