<template>
    
    <section class="section">
        <div class="container">

            <div class="publication">

                <div class="publication__block">
                    <div class="section__title section__title--black">
                        <p>Стать автором</p>
                    </div>
                    <div class="section__subtitle section__subtitle--black section__subtitle--publication">
                        <p>Если ты художник или стремишься им стать - добро пожаловать
                            к нам!
                        </p>
                    </div>
                    <div class="publication__describe">
                        Отправь нам от трёх до пяти своих работ и напиши свой ник в телеграме. Если наши кураторы решат, что нам по пути, то мы обязательно свяжемся с тобой и обговорим условия сотрудничества! Удачи!
                    </div>

                    <img class="publication__image" src="/images/main-page/publicationImage.png" alt="">
                </div>

                <div class="publication__block">

                    <form class="publication__form">

                        <div class="publication__add">
                            <label class="publication__label" for="publicationInput">
                                <p class="publication__icon">+</p>
                                <p class="publication__label__text">Прикрепить работы (.jpeg / .png)</p>
                            </label>
                            <input class="publication__input" type="file" id="publicationInput">
                        </div>

                        <label class="publication__label__telegram" for="publicationTelegram">
                            <input class="publication__input__telegram" type="text" id="publicationTelegram" placeholder="@telegram_nickname">
                        </label>

                        <button class="btn btn--blue btn--publication">Отправить</button>

                    </form>

                </div>

            </div>

        </div> <!-- ./container -->
    </section> <!-- ./section -->

</template>

<script src="./scripts/PublicationComponent.js"></script>

<style scoped>
/* Стили для publication */
</style>