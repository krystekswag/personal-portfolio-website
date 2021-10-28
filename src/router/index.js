import { createRouter, createWebHistory } from 'vue-router';
import NotFoundComponent from '@/404.vue';
import App from '@/App.vue';
import Portfolio from '@/views/Portfolio.vue';
import Contact from '@/views/Contact.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/:catchAll(.*)', 
      component: NotFoundComponent,
      name: 'NotFound'
    },
    {
      path: '/',
      component: App,
      name: 'MainApp'
    },
    {
      path: '/',
      component: Portfolio,
      name: 'Portfolio'
    },
    {
      path: '/',
      component: Contact,
      name: 'Contact'
    }
  ],
  scrollBehavior (to) {
    if (to.hash) {
      return window.scrollTo({ 
        top: document.querySelector(to.hash).offsetTop - 70, 
        behavior: 'smooth' 
      })
    } else {
      return { 
        x: 0, y: 0 
      }
    }
  }
})

export default router
