<template>
    <div class="auctions__item">
      <img :src="stickerImage" alt="">
      <div class="auctions__describe">
        <div class="auctions__item__author">
          <img :src="authorImage" alt="">
          <p class="auctions__item__author__name">{{ authorName }}</p>
        </div>
        <p class="auctions__item__name">{{ stickerName }}</p>
        <div class="auctions__item__sum">
          <p class="auction__item__sum__value">{{ price }}</p>
          <p class="auction__item__sum__type">ETH</p>
        </div>
        <div class="auctions__item__time">
          <p class="auctions__item__time__element">{{ timeLeft.hours }}</p>
          <p class="auctions__item__time__element">час</p>
          <p class="auctions__item__time__element">{{ timeLeft.minutes }}</p>
          <p class="auctions__item__time__element">мин</p>
          <p class="auctions__item__time__element">{{ timeLeft.seconds }}</p>
          <p class="auctions__item__time__element">сек</p>
        </div>
      </div>
    </div>
  </template>
  
<script>
import AuctionItemLogic from './scripts/AuctionItem.js'; // Импортируем логику компонента

export default {
    ...AuctionItemLogic, // Распространяем логику в основной компонент
};
</script>
  
  <style scoped>
  /* Стили для AuctionItem */
  </style>
  