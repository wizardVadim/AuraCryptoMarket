<template>
    <section class="section">
        <div class="container">
            <div class="auctions">
                <CurrentAuctionComponent 
                auctionName="Witcherrr_3(xml_t5)"
                authorName="Serge_VM222"
                currentBet="0.10"
                currency="ETH"
                dollarsEquivalent="351.24"
                :endTime="new Date(Date.now() + 3600 * 1000)"  
                />

                <div class="auctions__others">
                    <div class="section__subtitle section__subtitle--black">
                        <p>Другие аукционы</p>
                    </div>

                    <div class="auctions__row">
                        <div class="auctions__item" v-for="auction in auctions" :key="auction.id">
                            <img :src="auction.image" alt="">
                            <div class="auctions__describe">
                                <div class="auctions__item__author">
                                    <img :src="auction.authorImage" alt="">
                                    <p class="auctions__item__author__name">
                                        {{ auction.authorName }}
                                    </p>
                                </div>
                                <p class="auctions__item__name">{{ auction.name }}</p>
                                <div class="auctions__item__sum">
                                    <p class="auction__item__sum__value">{{ auction.currentBid }}</p>
                                    <p class="auction__item__sum__type">ETH</p>
                                </div>
                                <div class="auctions__item__time">
                                    <p class="auctions__item__time__element">{{ auction.timeLeft.hours }}</p>
                                    <p class="auctions__item__time__element">час</p>
                                    <p class="auctions__item__time__element">{{ auction.timeLeft.minutes }}</p>
                                    <p class="auctions__item__time__element">мин</p>
                                    <p class="auctions__item__time__element">{{ auction.timeLeft.seconds }}</p>
                                    <p class="auctions__item__time__element">сек</p>
                                </div>
                            </div>
                        </div>
                    </div> <!-- ./auctions__row -->

                    <button class="btn btn--blue btn--items">Все аукционы</button>
                </div>
            </div>
        </div> <!-- ./container -->
    </section> <!-- ./section -->
</template>

<script>
import AuctionsComponentLogic from './scripts/AuctionsComponent.js'; // Импортируем логику компонента

export default {
    ...AuctionsComponentLogic, // Распространяем логику в основной компонент
};
</script>

<style scoped>
/* Стили для auctions */
</style>
