<template>
    <div class="zg-calendar__element">
        <div class="zg-calendar__title">
            <div class="zg-calendar__title__bd">
                <div class="zg-calendar__arrow">
                    <div v-if="!(swiper && swiper.isBeginning)" @click="handlePrev" class="zg-calendar__arrow__btn"><i class="simulate-ui su-prev-s"></i></div>
                    <div class="zg-calendar__arrow__text">{{ data.year }}年{{ data.month }}月</div>
                    <div v-if="!(swiper && swiper.isEnd)" @click="handleNext" class="zg-calendar__arrow__btn"><i class="simulate-ui su-next-s"></i></div>
                </div>
            </div>
            <!--
            <div class="zg-calendar__title__ft">
                <div class="text-primary">今天</div>
            </div>
            -->
        </div>
        <div class="zg-calendar__week">
            <div class="zg-calendar__week__cell">日</div>
            <div class="zg-calendar__week__cell">一</div>
            <div class="zg-calendar__week__cell">二</div>
            <div class="zg-calendar__week__cell">三</div>
            <div class="zg-calendar__week__cell">四</div>
            <div class="zg-calendar__week__cell">五</div>
            <div class="zg-calendar__week__cell">六</div>
        </div>
        <div class="zg-calendar__day">
            <div v-for="item of data.children" class="zg-calendar__day__cell" :class="{'zg-calendar__day__disabled': item.disabled, 'opacity': item.day == 0, 'zg-calendar__today': value.indexOf(item.date) > -1}" >
                <div @click="handleClick(item)" class="zg-calendar__day__text">
                    <div class="zg-calendar__day__title">{{item.day}}</div>
                    <!--<div class="zg-calendar__day__subtitle">初一</div>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            value: {
                type: Array,
                default: () => {
                    return []
                }
            },
            data: {
                type: Object,
                default: null
            },
            swiper: {
                type: Object,
                default: null
            }
        },
        data() {
            return {
                current: []
            }
        },
        watch: {
            current(val) {
                let index = this.value.indexOf(val)
                let value = this.value
                if (index == -1) {
                    value.push(val)
                } else {
                    value.splice(index, 1)
                }

                this.$emit('input', value)
            }
        },
        methods: {
            handleClick(item) {
                if (item.disabled) {
                    return
                }

                let index = this.value.indexOf(item.date)
                let value = this.value
                if (index == -1) {
                    value.push(item.date)
                } else {
                    value.splice(index, 1)
                }

                this.$emit('input', value.sort())

            },
            handleNext() {
                if (this.swiper) {
                    this.swiper.slideNext()
                }
            },
            handlePrev() {
                if (this.swiper) {
                    this.swiper.slidePrev()
                }
            }
        }
    }
</script>
