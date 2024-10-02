<template>
       <footer class="footer">

          <div class="container container--footer ">

              <div class="footer__inner">
                  <div class="footer__block">
                      <a class="footer__logo" href="/">
                        <img src="../assets/images/main-page/logo.png" alt="">
                      </a>
                  </div>

                  <div class="footer__block">
                      <div class="navs navs--footer">
                          <a href="#" class="navs__item">Соглашение</a>
                          <a href="#" class="navs__item">Лицензии</a>
                          <a href="#" class="navs__item">FAQ</a>
                      </div>
                  </div>
              </div>

          </div> <!-- ./container -->

          <div class="copyright">
              AURA © 2024
          </div>

      </footer> <!-- ./footer -->
</template>

<script>
import FooterComponentLogic from './scripts/FooterComponent.js'; // Импортируем логику компонента

export default {
    ...FooterComponentLogic, // Распространяем логику в основной компонент
};
</script>

<style scoped>
/* Стили для подвала */
</style>
