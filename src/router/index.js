import { createRouter, createWebHistory } from 'vue-router'

import { AboutView, BlogView, ContactView,ProductView,HomeView, KartaView, ClickView } from '../views/main.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component:ProductView
    },
    {
      path: '/about',
      name: 'about',
      component:AboutView
    },
    {
      path: '/blog',
      name: 'blog',
      component:BlogView
    },
    {
      path: '/contact',
      name: 'contact',
      component:ContactView
    }
    ,
    {
      path:'/karta',
      name:'buy',
      component:KartaView

    }
    ,
    {
      path:'/click',
      name:'click',
      component:ClickView

    }
  
  ]
})

export default router
