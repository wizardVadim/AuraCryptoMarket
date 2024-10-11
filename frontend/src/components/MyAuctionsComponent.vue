<template>

    <section class="section">

            <div class="my-auctions">
                <div class="section__title">
                Мои аукционы
                </div>

                <!-- Кнопка для создания нового аукциона -->
                <button @click="createAuction" class="btn btn--blue">Создать новый аукцион</button>

                <!-- Список аукционов -->
                <div v-if="displayedAuctions.length" class="auctions-grid">
                <div v-for="auction in displayedAuctions" :key="auction.id" class="auction-item">
                    <div class="auction-details">
                    <p>Название: {{ auction.name }}</p>
                    <p>Текущая ставка: {{ auction.currentBid }} ETH</p>
                    <p>Статус: {{ auction.status }}</p>
                    <p>Окончание: {{ auction.endTime }}</p>
                    </div>
                </div>
                </div>

                <!-- Если аукционов нет -->
                <div v-else>
                <p>У вас пока нет активных аукционов.</p>
                </div>

                <!-- Кнопка "Еще", если аукционов больше, чем отображается -->
                <button v-if="auctions.length > displayedAuctions.length" @click="loadMoreAuctions" class="btn btn--other">Показать ещё</button>

            </div>

    </section>

</template>

<script>
    import MyAuctionsComponentLogic from './scripts/MyAuctionsComponent.js'; // Импортируем логику компонента

    export default {
        ...MyAuctionsComponentLogic, // Распространяем логику в основной компонент
    };
</script>

<style src="./assets/MyAuctionsComponent.css">
</style>