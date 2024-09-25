// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Dashboard from '@/views/Dashboard.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  // Добавь другие маршруты по необходимости
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Защита маршрутов, требующих аутентификации
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // или другой способ проверки
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
