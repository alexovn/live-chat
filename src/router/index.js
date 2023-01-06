import { createRouter, createWebHistory } from 'vue-router'
import welcome from '~/views/welcome.vue';
import { projectAuth } from '@/firebase/config'

const requireAuth = (to, from) => {
  const user = projectAuth.currentUser;
  if (!user && to.name !== 'welcome') {
    return {
      name: 'welcome'
    };
  }
};

const requireNoAuth = (to, from) => {
  const user = projectAuth.currentUser;
  if(user) {
    return {
      name: 'chatroom'
    };
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome,
      beforeEnter: requireNoAuth
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
