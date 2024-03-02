import { createRouter, createWebHistory} from 'vue-router'
import TestView from '../views/TestView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.)
  routes: [
    {
      path: '/',
      name: 'home',
      component: Test
    }
  ]
})

export default router