<template>

    <div v-if="isModal" class="login__modal">

        <div class="login__modal-content">

            <button @click="closeModal" class="btn--close">x</button>
            <form @submit.prevent="submitRegister">
                <h2 class="login__header">AURA Cryptomarket</h2>
                <input class="input--login" type="text" v-model="username" placeholder="Введите имя пользователя" />
                <input class="input--login" type="password" v-model="password" placeholder="Введите пароль" />
                <div class="login__buttons">
                    <button class="btn btn--blue btn--auth login__button" type="submit">Зарегистрироваться</button>
                </div>
            </form>

        </div>

    </div>
    
    <div v-else class="login__full">
        <form @submit.prevent="submitRegister">
            <h2 class="login__header">AURA Cryptomarket</h2>
            <input class="input--login" type="text" v-model="username" placeholder="Введите имя пользователя" />
            <input class="input--login" type="password" v-model="password" placeholder="Введите пароль">
            <div class="login__buttons">
                <button class="btn btn--blue btn--auth" type="submit">Зарегистрироваться</button>
            </div>
        </form>
    </div>
    
</template>

<script>
import RegisterComponentLogic from './scripts/RegisterComponent.js'; // Импортируем логику компонента

export default {
    ...RegisterComponentLogic, // Распространяем логику в основной компонент
};
</script>

<style src="./assets/LoginComponent.css">
</style>