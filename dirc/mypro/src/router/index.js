import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/views/Homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Homepage',
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
  },
   { path:'/Fuwu',
  component:()=>import('@/views/Fuwu.vue')
},
{ path:'/Yinsi',
component:()=>import('@/views/Yinsi.vue')
},
{ path:'/Know',
component:()=>import('@/views/Know.vue')
},
{ path:'/Join',
component:()=>import('@/views/Join.vue')
},
{ path:'/Lianxi',
component:()=>import('@/views/Lianxi.vue')
},
{ path:'/Zhihui',
component:()=>import('@/views/Zhihui.vue')
},
{ path:'/Need',
component:()=>import('@/views/Need.vue')
},
{ path:'/Advice',
component:()=>import('@/views/Advice.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach(function(to1,from1,next) {
//   if(to1.path=="/Person"){

//   }else if(to1.path="/CpHomepage"){

//   }else if(to1.path="/Messager"){

//   }else if(to1.path="/Teacher"){

//   }else if(to1.path="/Student"){

//   }
// })
export default router
