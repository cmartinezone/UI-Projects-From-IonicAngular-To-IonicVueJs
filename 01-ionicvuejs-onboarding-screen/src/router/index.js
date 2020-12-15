import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue';
import Onboarding from '../views/Onboarding.vue';

const routes = [
  {
    path: '/',
    redirect: '/onboarding',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },

  {
    path: '/onboarding',
    name: 'OnBoarding',
    component: Onboarding,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
