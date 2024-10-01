<template>
    <section class="section section--black">
      <div class="container">
        <div class="new__stickers">
          <div class="section__title section__title--white">
            <p>&#128293; Новые стикеры</p>
          </div>
  
          <!-- Рендерим стикеры через v-for -->
          <div class="new__stickers__row">
            <a
              v-for="(sticker, index) in paginatedStickers"
              :key="index"
              :href="sticker.href"
              class="new__stickers__item"
            >
              <img :src="sticker.image" :alt="sticker.altText" />
            </a>
          </div>
  
          <!-- Динамическая пагинация -->
          <div class="new__stickers__pages">
            <button
              v-for="page in totalPages"
              :key="page"
              :class="['btn', 'btn--page', { 'btn--page--active': page === currentPage }]"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>

<script>
import NewStickersComponentLogic from './scripts/NewStickersComponent.js'; // Импортируем логику компонента

export default {
    ...NewStickersComponentLogic, // Распространяем логику в основной компонент
};
</script>

<style scoped>
/* Стили для new stickers */
</style>