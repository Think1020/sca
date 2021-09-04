import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Homepage from '../components/Homepage'
import Main from '../components/Main'
import Knowledge from '../components/Knowledge'
import Process from '../components/Process'
import Relation from '../components/Relation'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/homepage',component:Homepage,
      children:[
        {path:'main',component:Main},
        {path:'knowledge',component:Knowledge},
        {path:'process',component:Process},
        {path:'relation',component:Relation},
      ]
    },
  ]
})
