<template>
    <div class="zg-picker__container">
        <div class="zg-overlay" :class="{'zg-overlay__active': visible}" @click="handleCancel"></div>
        <div class="zg-popup zg-popup__bottom" :class="{'zg-popup__active': visible}">
            <div class="zg-picker">
                <div class="zg-picker__hd">
                    <button class="zg-btn zg-btn__default zg-btn__flat" @click.prevent="handleCancel">取消</button>
                    <div class="zg-picker__spacer"></div>
                    <button class="zg-btn zg-btn__primary zg-btn__flat" @click="handleConfirm">确定</button>
                </div>
                <div class="zg-picker__bd">
                    <!--<div class="zg-picker__select"></div>-->
                    <!--<div  class="zg-picker__content">-->
                        <div ref="picker" class="swiper-container">
                            <div class="swiper-wrapper">
                                <div v-for="option of items" class="swiper-slide zg-picker__item" v-html="getLabel(option)"></div>
                            </div>
                        </div>
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    export default{
        props: {
            labelKey: {
                type: String,
                default: 'label'
            },
            labelValue: {
                type: String,
                default: 'value'
            },
            labelChild: String,
            items: {
                type: Array,
                default: () => {
                    return []
                },
            },
            confirmText: {
                type: String,
                default: '确定'
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            defaultValue: {
                type: [String, Number],
                default: ''
            },

            onCancel: Function,
            onConfirm: Function

        },
        watch: {
            visible(val) {
                this.slide = 0
                if (val) {
                    if (this.defaultValue) {
                        for (let [index, item] of this.items.entries()) {
                            if (this.defaultValue == this.getValue(item)) {
                                this.slide = index
                            }
                        }
                    }
                    this.$nextTick(() => {
                        let swiper = new Swiper(this.$refs.picker, {
                            initialSlide: this.slide,
                            slideActiveClass: 'zg-picker__item__active',
                            direction: 'vertical',
                            autoHeight: true,
                            slidesPerView: 1,
                            effect: 'coverflow',
                            centeredSlides: true,
                            slidesPerView: 'auto',
                            loop: false,
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows : false,
                            }
                        })
                        swiper.on('slideChange', () => {
                            this.slide = swiper.activeIndex
                        })
                    })
                }
            }
        },
        data(){
            return {
                visible: false,
                close: () => {},
                swiper: null,
                slide: 0
            }
        },
        mounted() {

        },

        methods: {
            getLabel(option) {
                if (option[this.labelKey]) {
                    return option[this.labelKey]
                }

                return option
            },

            getValue(option) {
                if (option[this.labelValue]) {
                    return option[this.labelValue]
                }

                return option
            },

            handleConfirm() {
                if (this.onConfirm) {
                    this.onConfirm(this.items[this.slide])
                }

                this.close()
            },
            handleCancel() {
                if (this.onCancel) {
                    this.onCancel()
                }
                this.close()
            }
        }
    }
</script>
