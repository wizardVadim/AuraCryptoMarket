<template>

    <section class="section section--label">
        <div class="container">

            <div class="label">

                <div class="section__title section__title--white section__title--label">
                    <p>Площадка для реализации криптостикеров</p>
                </div>

                <div class="label__buttons">
                    <button class="btn btn--green-blue">Купить</button>
                    <button class="btn btn--green-blue">Стать автором</button>
                </div>

            </div>

        </div> <!-- ./container -->
    </section> <!-- ./section -->

</template>

<script>
import LabelComponentLogic from './scripts/LabelComponent.js'; // Импортируем логику компонента

export default {
    ...LabelComponentLogic, // Распространяем логику в основной компонент
};
</script>

<style scoped>
/* Стили для label */
</style>