<template>
    <section class="user-info-section">
        <div class="user-info">
            <img src="../assets/images/main-page/48x48Author.png" alt="User Avatar" class="user-avatar" />
            <h2>{{ user.name }}</h2>
            <p>{{ user.email }}</p>
        </div>
    </section>
  </template>
  
  <script>
  import UserInfoComponentLogic from './scripts/UserInfoComponent.js'; // Импортируем логику компонента

    export default {
        ...UserInfoComponentLogic, // Распространяем логику в основной компонент
    };
  </script>
  
  <style src="./assets/UserInfoComponent.css">
  </style>