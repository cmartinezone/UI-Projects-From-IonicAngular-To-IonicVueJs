import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue';
import Welcome from '../views/Welcome.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';

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
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/item-details',
    name: 'item-details',
    component: () => import('../views/Item-details.vue'),
  },

  {
    path: '/my-cart',
    name: 'my-cart',
    component: () => import('../views/My-cart.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
