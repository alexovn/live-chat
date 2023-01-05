import { createRouter, createWebHistory } from 'vue-router'
import welcome from '~/views/welcome.vue';
import { projectAuth } from '@/firebase/config'

const requireAuth = (to, from) => {

  const user = projectAuth.currentUser;

  console.log(user);

  if (!user && to.name !== 'welcome') {
    return {
      name: 'welcome'
    }
  }

};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: () =>  import('~/views/chatroom.vue'),
      beforeEnter: requireAuth
    }
  ]
})

export default router
