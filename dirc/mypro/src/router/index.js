import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/Person',
    component: () => import('../views/Person.vue')
  },
  {
    path:'/Login',
    components:()=>import('@/components/Login.vue')
  },
  {
    path:'/Chanpin',
    components:()=>import('@/components/Chanpin.vue')
  },
  {
    path:'/CpHomepage',
    components:()=>import('@/components/CpHomepage.vue')
  },
  {
    path:'/Messager',
    components:()=>import('@/components/Messager.vue')
  },
  {
    path:'/Teacher',
    components:()=>import('@/components/Teacher.vue')
  },
  {
    path:'/Student',
    components:()=>import('@/components/Student.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
