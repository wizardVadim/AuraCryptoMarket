<template>
          <header class="header">
              <div class="container container--header">

                  <div class="header__inner">


                      <div class="header__section">

                          <a class="header__logo" href="/">
                              <img src="../assets/images/main-page/logo.png" alt="">
                          </a>

                          <div class="navs">
                              <a href="#" class="navs__item">Авторы</a>
                              <a href="#" class="navs__item">Коллекции</a>
                              <a href="#" class="navs__item">Сервисы</a>
                          </div>

                      </div>


                      <div class="header__buttons">
                          <button class="btn btn--black btn--wallet">Кошелёк</button>
                          <button v-if="isModalAuth" @click="showLoginModal = true" class="btn btn--blue btn--auth">Вход</button>
                          <a v-else href="/login" class="btn btn--blue btn--auth">Вход</a>
                          <button v-if="isModalAuth" @click="showRegisterModal = true" class="btn btn--blue btn--auth">Регистрация</button>
                          <a v-else href="/register" class="btn btn--blue btn--auth">Регистрация</a>
                      </div>


                  </div>

              </div> <!-- ./container -->
          </header> <!-- ./header -->

          <LoginComponent v-if="showLoginModal" :isModal="true" @close="showLoginModal = false"  />
          <RegisterComponent v-if="showRegisterModal" :isModal="true" @close="showRegisterModal = false"  />

</template>

<script>
import HeaderComponentLogic from './scripts/HeaderComponent.js'; // Импортируем логику компонента

export default {
    ...HeaderComponentLogic, // Распространяем логику в основной компонент
};
</script>

<style scoped>
/* Стили для шапки */
</style>
