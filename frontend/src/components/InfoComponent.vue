<template>

    <div class="section section--grey">

        <div class="container">

            <div class="help">

                <div class="help__block">
                    <div class="section__subtitle section__subtitle--white">
                        <p>Для попадания в топ необходимо:</p>
                    </div>

                    <div class="help__requirement">
                        <i class="fa fa-picture-o" aria-hidden="true"></i>
                        <p>Минимум пять опубликованных работ</p>
                    </div>
                    <div class="help__requirement">
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <p>Инвайт трём коллегам по цеху</p>
                    </div>
                    <div class="help__requirement">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <p>Верифицированный аккаунт</p>
                    </div>
                </div>

                <div class="help__block help__block--second">
                    <div class="help__img">
                        <img src="../assets/images/main-page/helpImage.png" alt="">
                    </div>
                </div>

            </div>

        </div> <!-- ./container -->

    </div> <!-- ./section -->

</template>

<script>
import InfoComponentLogic from './scripts/InfoComponent.js'; // Импортируем логику компонента

export default {
    ...InfoComponentLogic, // Распространяем логику в основной компонент
};
</script>

<style scoped>
/* Стили для info */
</style>