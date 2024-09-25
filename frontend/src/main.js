import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// В вашем основном файле, например, main.js
import './assets/style.css'; // Замените на путь к вашему файлу стилей
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';


const app = createApp(App);

app.use(router); // Убедитесь, что этот вызов присутствует
app.mount('#app');
