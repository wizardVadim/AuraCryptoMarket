<template>

    <div class="authors__modal">

        <div class="authors__modal-content">

            <button @click="closeModal" class="btn--close">x</button>
            <div class="authors__header">Авторы</div>
            <div class="authors__list">
                <a href="https://github.com/wizardVadim" class="author" target="_blank">
                    <div class="author__name">wizardVadim</div>
                    <div class="image-container">
                        <img src="../assets/images/AuthorsImages/wizardVadim.jpeg" alt="" class="author__image">
                    </div>
                </a>
            </div>
        </div>

    </div>
    
</template>

<script>
import AuthorsComponentLogic from './scripts/AuthorsComponent.js'; // Импортируем логику компонента

export default {
    ...AuthorsComponentLogic, // Распространяем логику в основной компонент
};
</script>

<style src="./assets/AuthorsComponent.css">
</style>