<template>
    <div v-if="data" class="swiper-slide zg-calendar__day">
        <div v-for="day of items" class="zg-calendar__day__cell" :class="{'opacity': day == 0}" >
            <div class="zg-calendar__day__text">
                <div class="zg-calendar__day__title">{{day}}</div>
                <!--<div class="zg-calendar__day__subtitle">初一</div>-->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            data: {
                type: Object,
                default: null
            }
        }
    }
</script>
