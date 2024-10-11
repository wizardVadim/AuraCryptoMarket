<template>

    <section class="account-section">
        <div class="container">
            <div class="tabs">
            <div class="tabs__buttons">
                <button v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)" class="btn btn--blue">
                {{ tab }}
                </button>
            </div>
            <div class="tabs__content">
                <slot :name="`tab${currentTab + 1}`"></slot>
            </div>
            </div>
        </div>
    </section>

</template>

<script>
    import TabsComponentLogic from './scripts/TabsComponent.js'; // Импортируем логику компонента

    export default {
        ...TabsComponentLogic, // Распространяем логику в основной компонент
    };
</script>

<style src="./assets/TabsComponent.css">
</style>