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
export default {
    name: 'SubComponent',
    data() {
        return {
            name: '',
            email: '',
            consent: false,
            message: '',
        };
    },
    methods: {
        handleSubmit() {
            // Проверка валидности данных
            if (!this.name || !this.email || !this.consent) {
                this.message = 'Пожалуйста, заполните все поля и согласитесь на обработку данных.';
                return;
            }

            // Здесь добавьте логику для отправки данных на сервер
            console.log('Name:', this.name);
            console.log('Email:', this.email);
            console.log('Consent:', this.consent);

            // Отправка данных на сервер (например, через API)
            // После успешной отправки можно очистить поля
            this.message = 'Спасибо за подписку! Вы будете получать новости на ваш e-mail.';
            this.name = '';
            this.email = '';
            this.consent = false;
        },
    },
};
</script>

<style scoped>
/* Стили для subscription */
.subscription-message {
    margin-top: 10px;
    color: green; /* Или другой цвет для сообщения об успехе */
}
</style>
