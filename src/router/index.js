import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Resources from '../components/Resources.vue'
import GetStarted from '../components/GetStarted.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources,
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: GetStarted,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
