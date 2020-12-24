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
    component:()=>import('@/views/Login.vue'),
    children:[{path:"",component:()=>import('@/views/Login/register.vue')},
    {path:"login",component:()=>import('@/views/Login/login.vue')}]
  },
  {
    path:'/Chanpin',
    component:()=>import('@/views/Chanpin.vue')
  },
  {
    path:'/CpHomepage',
    component:()=>import('@/views/CpHomepage.vue')
  },
  {
    path:'/Messager',
    component:()=>import('@/views/Messager.vue')
  },
  {
    path:'/Teacher',
    component:()=>import('@/views/Teacher.vue')
  },
  {
    path:'/Student',
    component:()=>import('@/views/Student.vue')
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
router.beforeEach(function(to1,from1,next) {
  if(to1.path==="/Person"){
    // console.log(window.localStorage.getItem("code"));
    var a = window.localStorage.getItem("code");
    if(a==1){
      next();
    }else{
      next("/Login/login")
    }
  }
  else if(to1.path==="/CpHomepage"){
    if(window.localStorage.getItem("code")){
      next();
    }else{
      next("/Login")
    }
  }else if(to1.path==="/Messager"){
    if(window.localStorage.getItem("code")){
      next();
    }else{
      next("/Login")
    }
  }else if(to1.path==="/Teacher"){
    if(window.localStorage.getItem("code")){
      next();
    }else{
      next("/Login")
    }
  }else if(to1.path==="/Student"){
    if(window.localStorage.getItem("code")){
      next();
    }else{
      next("/Login")
    }
  }else{
    next();
  }
})
export default router
