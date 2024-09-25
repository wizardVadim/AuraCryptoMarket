<template>
    <section class="section">
        <div class="container">
            <div class="auctions">
                <CurrentAuctionComponent />

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

<script src="./scripts/AuctionsComponent.js"></script>

<style scoped>
/* Стили для auctions */
</style>
