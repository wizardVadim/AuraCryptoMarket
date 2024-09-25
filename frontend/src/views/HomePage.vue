<template>
  <div>
    <LabelComponent />
    <CurrentAuctionComponent 
      auctionName="Witcherrr_3(xml_t5)"
      authorName="Serge_VM222"
      currentBet="0.10"
      currency="ETH"
      dollarsEquivalent="351.24"
      :endTime="new Date(Date.now() + 3600 * 1000)"  
    />
    <SubComponent />
    <TopComponent />
  </div>
</template>

<script>
import SubComponent from '@/components/SubComponent.vue';
import TopComponent from '@/components/TopComponent.vue';
import CurrentAuctionComponent from '@/components/CurrentAuctionComponent.vue';
import LabelComponent from '@/components/LabelComponent.vue';

export default {
  name: 'HomePage',
  components: {
    LabelComponent,
    SubComponent,
    TopComponent,
    CurrentAuctionComponent
  }
};
</script>

<style scoped>
/* Стили для главной страницы, если нужны */
</style>
