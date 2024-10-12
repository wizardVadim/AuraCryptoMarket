<template>
    <div class="user-page">
      <!-- Шапка страницы -->
      <HeaderComponent :isModalAuth = true />
  
    <UserInfoComponent />
  
      
        <TabsComponent>
          <template v-slot:tab1>
            <MyAuctionsComponent />
          </template>
          <template v-slot:tab2>
            <MyCollectionComponent />
          </template>
          <template v-slot:tab3>
            <AccountSettingsComponent />
          </template>
        </TabsComponent>
       
    </div>
  </template>
  
  <script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import UserInfoComponent from '@/components/UserInfoComponent.vue';
  import TabsComponent from '@/components/TabsComponent.vue';
  import MyAuctionsComponent from '@/components/MyAuctionsComponent.vue';
  import MyCollectionComponent from '@/components/MyCollectionComponent.vue';
  import AccountSettingsComponent from '@/components/AccountSettingsComponent.vue';
  
  export default {
    name: 'UserPage',
    components: {
      HeaderComponent,
      UserInfoComponent,
      TabsComponent,
      MyAuctionsComponent,
      MyCollectionComponent,
      AccountSettingsComponent,
    },
  };
  </script>
  
  <style src="../assets/UserPage.css">
  </style>