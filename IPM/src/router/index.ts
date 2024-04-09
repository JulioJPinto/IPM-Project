import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/RegisterView.vue")
    },
    {
      path: "/services",
      name: "Services",
      component: () => import("../views/ServicesView.vue")
    },
    {
      path: "/services/:id",
      name: "Service",
      meta: { title: "Service" },
      component: () => import("../views/ServiceView.vue")
    }

  ]
})

export default router