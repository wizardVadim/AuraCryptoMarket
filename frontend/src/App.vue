<template>
    <div id="app">

        <router-view />  <!-- Здесь будет отображаться контент страниц -->
        <FooterComponent /> <!-- Footer -->

    </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
  },
};


</script>

<style scoped>
</style>
