import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SchedulePage from '../pages/SchedulePage.vue'
import AutorisPage from '../pages/AutorisPage.vue'
import RegPage from '../pages/RegPage.vue'
import LogoutPage from '../pages/LogoutPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: SchedulePage
  },
  {
    path: '/login',
    name: 'login',
    component: AutorisPage
  },
  {
    path: '/reg',
    name: 'reg',
    component: RegPage
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
