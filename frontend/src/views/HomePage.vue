<template>
  <div>
    <HeaderComponent :isModalAuth = true />
    <LabelComponent />
    <AuctionsComponent />
    <NewStickersComponent />
    <SubComponent />
    <PublicationComponent />
    <TopComponent />
    <InfoComponent />
  </div>
</template>

<script>
import SubComponent from '@/components/SubComponent.vue';
import TopComponent from '@/components/TopComponent.vue';
import LabelComponent from '@/components/LabelComponent.vue';
import NewStickersComponent from '@/components/NewStickersComponent.vue';
import PublicationComponent from '@/components/PublicationComponent.vue';
import AuctionsComponent from '@/components/AuctionsComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    LabelComponent,
    SubComponent,
    TopComponent,
    NewStickersComponent,
    PublicationComponent,
    AuctionsComponent,
    InfoComponent
  }
};
</script>

<style scoped>
/* Стили для главной страницы, если нужны */
</style>
