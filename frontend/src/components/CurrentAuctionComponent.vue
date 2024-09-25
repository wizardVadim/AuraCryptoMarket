<template>

    <div class="auctions__main container">
      <div class="section__title section__title--black section__title--auctions">
        <p>Аукцион</p>
        <div class="auctions__live">
          <p>&bull Live auction</p>
        </div>
      </div>
  
      <div class="auctions__current">
        <div class="auctions__first-block">
          <img :src="imageSrc" alt="">
        </div>
  
        <div class="auctions__second-block">
          <div class="auctions__current__author">
            <img :src="authorImageSrc" alt="">
            <p class="auctions__current__author__name">{{ authorName }}</p>
          </div>
  
          <p class="auctions__current__name">{{ auctionName }}</p>
  
          <div class="auctions__current__bet">
            <div class="auctions__current__sum">
              <p>Ставка:</p>
              <div class="auctions__current__sum__value">
                <a id="auctionsCurrentSumValue">{{ currentBet }}</a>
                <a> </a>
                <a id="auctionsCurrentSumType">{{ currency }}</a>
              </div>
  
              <div class="auction__current__dollars">
                <p>$</p>
                <p>{{ dollarsEquivalent }}</p>
              </div>
            </div>
  
            <div class="auctions__current__time">
              <p>Окончание через: </p>
              <div class="auctions__current__time__values">
                <div class="auctions__current__time__piece">
                  <p class="auctions__current__time__value">{{ hours }}</p>
                  <p class="auctions__current__time__name">Час</p>
                </div>
                <div class="auctions__current__time__piece">
                  <p class="auctions__current__time__value">{{ minutes }}</p>
                  <p class="auctions__current__time__name">Мин</p>
                </div>
                <div class="auctions__current__time__piece">
                  <p class="auctions__current__time__value">{{ seconds }}</p>
                  <p class="auctions__current__time__name">Сек</p>
                </div>
              </div>
              <img src="/images/main-page/oclock.png" alt="">
            </div>
          </div>
  
          <button class="btn btn--blue" @click="placeBid">Сделать ставку</button>
        </div>
      </div>
    </div>
  </template>

 <script>
    import CurrentAuctionComponentLogic from './scripts/CurrentAuctionComponent.js'; // Импортируем логику компонента

    export default {
        ...CurrentAuctionComponentLogic, // Распространяем логику в основной компонент
    };
</script>
  
  <style scoped>
  /* Стили для аукциона */
  </style>
  