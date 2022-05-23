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
      path: '/categorycar',
      name: 'categorycar',
      component: () => import ('../views/CategoCar.vue')
    },
    {
      path: '/categoryMoto',
      name: 'categoryMoto',
      component: () => import ('../views/CategoMoto.vue')
    },
    {
      path: '/categorycontact',
      name: 'categorycontact',
      component: () => import ('../views/CategoContact.vue')
    },
    {
      path: '/componentlogin',
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
    ,
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
