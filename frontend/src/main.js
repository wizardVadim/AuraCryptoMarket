// src/main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;

// Настройка axios для работы с API
axios.defaults.baseURL = 'http://localhost:8080/api'; // URL твоего бэкенда

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
