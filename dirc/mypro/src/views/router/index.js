import Vue from 'vue'
import VueRouter from 'vue-router'
import Grades from '@/views/Student/Grades.vue'
import Test from '@/views/Student/Test.vue'
import Timetable from '@/views/Student/Timetable.vue'
import News from '@/views/Student/News.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:"/grades",
    component:Grades
  }
  ,{
    path:'/test',
    component:Test
  },{
    path:'/timetable',
    component:Timetable
  },{
    path:'/news',
    component:News
  }
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
