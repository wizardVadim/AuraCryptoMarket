<template>
  <div>

    <HeaderComponent />

    <div class="section">
      <div class="container">
        <LoginComponent />
      </div>
    </div>

  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginComponent,
    HeaderComponent,
  }
};
</script>

<style scoped>
/* Стили для главной страницы, если нужны */
</style>
