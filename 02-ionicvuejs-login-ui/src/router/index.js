import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue';
import Welcome from '../views/Welcome.vue';

const routes = [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },

  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
