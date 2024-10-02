<template>
  <div>

    <HeaderComponent />

    <div class="section">
      <div class="container">
        <RegisterComponent />
      </div>
    </div>

  </div>
</template>

<script>
import RegisterComponent from '@/components/RegisterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'LoginPage',
  components: {
    RegisterComponent,
    HeaderComponent,
  }
};
</script>

<style scoped>
/* Стили для главной страницы, если нужны */
</style>
