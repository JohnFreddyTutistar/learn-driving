import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('../views/home.vue')
      //component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import ('../views/SignUp.vue')
    },
    {
      path: '/car',
      name: 'categorycar',
      component: () => import ('../views/CategoCar.vue')
    },
    {
      path: '/Moto',
      name: 'categoryMoto',
      component: () => import ('../views/CategoMoto.vue')
    },
    {
      path: '/contact',
      name: 'categorycontact',
      component: () => import ('../views/CategoContact.vue')
    },
    {
      path: '/login',
      name: 'ComponentLogin',
      component: () => import ('../views/CompoLogin.vue')
    },
    {
      path: '/admin',
      name: 'componentadmin',
      component: () => import('../views/AdminComp.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/ProfileUser.vue')
    },
    {
      path: '/user2',
      name: 'user2',
      component: () => import('../views/profileuser2.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/CoursesView.vue')
    },
    {
      path: "/upload",
      name: "filecomponent",
      component: () => import('../views/CompoFile.vue')
    },
    {
      path: "/update",
      name: "updateinfo",
      component: () => import('../views/UpdateInf.vue')
    },
    {
      path: "/create",
      name: "create",
      component: () => import('../views/CreateView.vue')
    }, 
    {
      path: "/edit",
      name: "edit",
      component: () => import('../views/EditView.vue')
    }, 
    {
      path: "/payment",
      name: "payment",
      component: () => import('../views/PayOnline.vue')
    }
      

  ]
})

export default router
