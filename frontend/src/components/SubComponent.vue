<template>
    <section class="section section--subscribtion">
        <div class="container">
            <div class="subscribtion">
                <div class="section__subtitle section__subtitle--white">
                    <p>Будь в курсе новинок! Подпишись на рассылку!</p>
                </div>

                <form @submit.prevent="handleSubmit">
                    <ul>
                        <li>
                            <label for="name">
                                <input class="input__text" type="text" id="subscribtionName" v-model="name" placeholder="Имя" required>
                            </label>
                        </li>
                        <li>
                            <label for="email">
                                <input class="input__text" type="email" id="subscribtionEmail" v-model="email" placeholder="E-mail" required>
                            </label>
                        </li>
                        <li>
                            <input class="input__checkbox" type="checkbox" id="personalDataCheckbox" v-model="consent" required>
                            <label class="section__title--white" for="personalDataCheckbox">Согласен на обработку персональных данных</label>
                        </li>
                        <button class="btn btn--blue" type="submit">Подписаться</button>
                    </ul>
                </form>
                <div v-if="message" class="subscription-message">{{ message }}</div>
            </div>
        </div> <!-- ./container -->
    </section> <!-- ./section -->
</template>

<script>
import SubComponentLogic from './scripts/SubComponent.js'; // Импортируем логику компонента

export default {
    ...SubComponentLogic, // Распространяем логику в основной компонент
};
</script>

<style scoped>
/* Стили для subscription */
.subscription-message {
    margin-top: 10px;
    color: green; /* Или другой цвет для сообщения об успехе */
}
</style>
