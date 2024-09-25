<template>
    <section class="section section--black">
        <div class="container">
            <div class="top">
                <div class="section__title section__title--white">
                    <p>Топ продаж</p>
                </div>
                <div class="top__row" v-for="(item, index) in topItems" :key="index">
                    <div class="top__item">
                        <div class="top__image-back">
                            <img :src="item.image" alt="" class="top__image">
                        </div>
                        <div class="top__data">
                            <div class="top__author">
                                <img :src="item.authorImage" alt="">
                                <p class="top__author__name">{{ item.authorName }}</p>
                            </div>
                            <div class="top__name">
                                <p>{{ item.name }}</p>
                            </div>
                            <div class="top__sum">
                                <div class="top__crypto">
                                    <div class="top__crypto__value">{{ item.cryptoValue }}</div>
                                    <div class="top__crypto__type">{{ item.cryptoType }}</div>
                                </div>
                                <div class="top__dollars">
                                    <p>(</p>
                                    <p>$</p>
                                    <p class="top__dollars__value">{{ item.dollarValue }}</p>
                                    <p>)</p>
                                </div>
                            </div>
                        </div>
                    </div> <!-- ./top__item-->
                </div> <!-- ./top__row-->
            </div>
        </div> <!-- ./container -->
    </section> <!-- ./section -->
</template>

<script>
import TopComponentLogic from './scripts/TopComponent.js'; // Импортируем логику компонента

export default {
    ...TopComponentLogic, // Распространяем логику в основной компонент
};
</script>

<style scoped>
/* Стили для top */
</style>
