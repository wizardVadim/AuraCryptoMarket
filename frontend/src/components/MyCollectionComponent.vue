<template>

    <section class="section">
        <div class="container">

            <div class="my-collections">
                <div class="section__title">
                Моя коллекция
                </div>

                <!-- Кнопка для создания нового стикера, пока отключим -->
                <!-- <button @click="uploadSticker" class="btn btn--blue">Загрузить свой стикер</button> -->

                <!-- Список стикеров -->
                <div v-if="displayedStickers.length" class="collections-grid">
                <div v-for="sticker in displayedStickers" :key="sticker.id" class="collection-item">
                    <div class="sticker-details">
                    <p>Название: {{ sticker.name }}</p>
                    <img :src="sticker.imagePath">
                    <p>Описание: {{ sticker.description }}</p>
                    </div>
                </div>
                </div>

                <!-- Если коллекций нет -->
                <div v-else>
                <p>У вас пока нет стикеров.</p>
                </div>

                <!-- Кнопка "Еще", если коллекций больше, чем отображается -->
                <button v-if="collections.length > displayedStickers.length" @click="loadMoreStickers" class="btn btn--other">Показать ещё</button>

            </div>

        </div>     
    </section>

</template>

<script>
    import MyCollectionComponentLogic from './scripts/MyCollectionComponent.js'; // Импортируем логику компонента

    export default {
        ...MyCollectionComponentLogic, // Распространяем логику в основной компонент
    };
</script>

<style src="./assets/MyCollectionComponent.css">
</style>