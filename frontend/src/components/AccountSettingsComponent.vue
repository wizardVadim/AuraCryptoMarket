<template>
    <section class="section">
        <div class="account-settings">
            <div class="section__title">
                Настройки
            </div>

            <form @submit.prevent="saveSettings">

                <!-- Изменение имени и фамилии -->
                <div class="settings__block">
                    <div class="settings__block-title">
                        Личная информация
                    </div>
                    <input class="input--name" type="text" v-model="username" placeholder="Имя" />
                    <input class="input--lastname" type="text" v-model="lastname" placeholder="Фамилия">
                </div>

                <!-- Изменение email -->
                <div class="settings__block">
                    <div class="settings__block-title">
                        Электронная почта
                    </div>
                    <input class="input--email" type="email" v-model="email" placeholder="Email" />
                </div>

                <!-- Изменение пароля -->
                 <div class="settings__block">
                    <div class="settings__block-title">
                        Пароль
                    </div>
                    <input class="input--password" type="password" v-model="currentPassword" placeholder="Текущий пароль" />
                    <input class="input--password" type="password" v-model="newPassword" placeholder="Новый пароль" />
                </div>

                <!-- Уведомления -->
                <div class="settings__block">
                    <div class="settings__block-title">
                        Уведомления
                    </div>
                    <div class="notifications-section">
                        <label>
                            <input type="checkbox" v-model="emailNotifications" /> Уведомления по Email
                        </label>
                    </div>
                </div>

                <!-- Двухфакторная аутентификация -->
                <!-- <div class="settings__block">
                    <div class="security-section">
                        <p>Безопасность</p>
                        <label>
                            <input type="checkbox" v-model="twoFactorAuth" /> Включить 2FA
                        </label>
                    </div>
                </div> -->

                <!-- Кнопки -->
                <div class="settings__buttons">
                    <button class="btn btn--blue btn--auth" type="submit">Сохранить</button>
                </div>

                <div class="delete__block">
                    <button class="btn--delete" @click="deleteAccount">Удалить аккаунт</button>
                </div>

            </form>
        </div>
    </section>
</template>

<script>
    import AccountSettingsComponentLogic from './scripts/AccountSettingsComponent.js'; // Импортируем логику компонента

    export default {
        ...AccountSettingsComponentLogic, // Распространяем логику в основной компонент
    };
</script>

<style src="./assets/AccountSettingsComponent.css">
</style>