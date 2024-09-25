<template>

    <div class="auctions__main">

        <div class="section__title section__title--black section__title--auctions">
            <p>Аукцион</p>
            <div class="auctions__live">
                <p>
                    &#8226 Live auction
                </p>
            </div>
        </div>

        <div class="auctions__current">

            <div class="auctions__first-block">
                <img src="/images/main-page/460x460Sticker.png" alt="">
            </div>

            <div class="auctions__second-block">

                <div class="auctions__current__author">
                    <img src="/images/main-page/48x48Author.png" alt="">
                    <p class="auctions__current__author__name">Serge_VM222</p>
                </div>


                <p class="auctions__current__name">Witcherrr_3(xml_t5)</p>

                <div class="auctions__current__bet">

                    <div class="auctions__current__sum">
                        <p>Ставка:</p>
                        <div class="auctions__current__sum__value">
                            <a id="auctionsCurrentSumValue">0.10</a>
                            <a> </a>
                            <a id="auctionsCurrentSumType">ETH</a>
                        </div>

                        <div class="auction__current__dollars">
                            <p>$</p>
                            <p>351.24</p>
                        </div>
                    </div>

                    <div class="auctions__current__time">

                        <p>Окончание через: </p>
                        <div class="auctions__current__time__values">
                            <div class="auctions__current__time__piece">
                                <p class="auctions__current__time__value">01</p>
                                <p class="auctions__current__time__name">Час</p>
                            </div>
                            <div class="auctions__current__time__piece">
                                <p class="auctions__current__time__value">48</p>
                                <p class="auctions__current__time__name">Мин</p>
                            </div>
                            <div class="auctions__current__time__piece">
                                <p class="auctions__current__time__value">36</p>
                                <p class="auctions__current__time__name">Сек</p>
                            </div>
                        </div>
                        <img src="/images/main-page/oclock.png" alt="">
                    </div>

                </div>

                <button class="btn btn--blue">Сделать ставку</button>

            </div>

        </div>

    </div>

</template>

<script>
export default {
    name: 'CurrentAuctionComponent',
};
</script>

<style scoped>
/* Стили для label */
</style>