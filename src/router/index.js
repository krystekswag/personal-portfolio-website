import { createRouter, createWebHashHistory } from 'vue-router';
import NotFoundComponent from '@/404.vue';


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: '/:catchAll(.*)', 
      component: NotFoundComponent,
      name: 'NotFound'
    }
  ]
})

export default router
