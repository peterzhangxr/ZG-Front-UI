<template>
    <div class="zg-calendar__container">
        <div class="zg-overlay" :class="{'zg-overlay__active': visible}" @click.prevent="handleCancel"></div>
        <div class="zg-popup zg-popup__bottom" :class="{'zg-popup__active': visible}">
            <div class="zg-calendar zg-calendar__primary">
                <div class="zg-calendar__hd">
                    <div class="zg-picker__hd">
                        <button class="zg-btn zg-btn__default zg-btn__flat text-default">取消</button>
                        <div class="zg-picker__spacer text-default">选择日期</div>
                        <button class="zg-btn zg-btn__primary zg-btn__flat">确定</button>
                    </div>
                    <!--
                    <div class="zg-navbar">
                        <div class="zg-navbar__item">
                            <div class="zg-navbar__text">开始日期</div>
                        </div>
                        <div class="zg-navbar__item zg-navbar__item__active">
                            <div class="zg-navbar__text">结束日期</div>
                        </div>
                    </div>
                    -->
                    <div class="zg-calendar__title">
                        <div class="zg-calendar__title__bd">
                            <div class="zg-calendar__arrow">
                                <div class="zg-calendar__arrow__btn"><i class="simulate-ui su-prev-s"></i></div>
                                <div class="zg-calendar__arrow__text">2018年4月</div>
                                <div class="zg-calendar__arrow__btn"><i class="simulate-ui su-next-s"></i></div>
                            </div>
                        </div>
                        <!--
                        <div class="zg-calendar__title__ft">
                            <div class="text-primary">今天</div>
                        </div>
                        -->
                    </div>
                </div>
                <div class="zg-calendar__bd">
                    <div class="zg-calendar__week">
                        <div class="zg-calendar__week__cell">日</div>
                        <div class="zg-calendar__week__cell">一</div>
                        <div class="zg-calendar__week__cell">二</div>
                        <div class="zg-calendar__week__cell">三</div>
                        <div class="zg-calendar__week__cell">四</div>
                        <div class="zg-calendar__week__cell">五</div>
                        <div class="zg-calendar__week__cell">六</div>
                    </div>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide zg-calendar__day">
                                <div v-for="day of items" class="zg-calendar__day__cell" :class="{'opacity': day == 0}" >
                                    <div class="zg-calendar__day__text">
                                        <div class="zg-calendar__day__title">{{day}}</div>
                                        <!--<div class="zg-calendar__day__subtitle">初一</div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import utils from './utils'
    import Element from './Element.vue'
    export default{
        data(){
            return {
                items: [],
                day: 0,
                year: 0,
                month:0,
                visible: false,
                close: () => {}
            }
        },
        mounted() {
            let date = new Date()
            this.year = date.getFullYear()
            this.month = date.getMonth() + 1
            this.day = date.getDate()

            utils.getDataOfMonth(this.year, this.month, this.day)
        },
        methods: {
            handleCancel() {
                this.close()
            }
        },
        components: {
            Element
        }
    }
</script>
