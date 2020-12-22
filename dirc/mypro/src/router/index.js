import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/views/Homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/Person',
    component: () => import('@/views/Person.vue')
  },
  {
    path:'/Login',
    components:()=>import('@/views/Login.vue')
  },
  {
    path:'/Chanpin',
    components:()=>import('@/views/Chanpin.vue')
  },
  {
    path:'/CpHomepage',
    components:()=>import('@/views/CpHomepage.vue')
  },
  {
    path:'/Messager',
    components:()=>import('@/views/Messager.vue')
  },
  {
    path:'/Teacher',
    components:()=>import('@/views/Teacher.vue')
  },
  {
    path:'/Student',
    components:()=>import('@/views/Student.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
