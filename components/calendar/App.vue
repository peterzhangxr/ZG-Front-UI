<template>
    <div class="zg-calendar__container">
        <div class="zg-overlay" :class="{'zg-overlay__active': visible}" @click.prevent="handleCancel"></div>
        <div class="zg-popup zg-popup__bottom" :class="{'zg-popup__active': visible}">
            <div class="zg-calendar zg-calendar__primary">
                <div class="zg-calendar__hd">
                    <div class="zg-picker__hd">
                        <button @click="handleCancel" class="zg-btn zg-btn__default zg-btn__flat text-default">取消</button>
                        <div class="zg-picker__spacer text-default">选择日期</div>
                        <button @click="handleSave" class="zg-btn zg-btn__primary zg-btn__flat">确定</button>
                    </div>
                </div>
                <div class="zg-calendar__bd">
                    <div ref="calendar" class="swiper-container">
                        <div class="swiper-wrapper">
                            <div v-for="item of items" class="swiper-slide">
                                <Element v-model="current" :data="item" :swiper="swiper"></Element>
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
    import Swiper from 'swiper'
    export default{
        props: {
            onConfirm: {
                type: Function,
                default: () => {}
            }
        },
        data(){
            return {
                visible: false,
                close: () => {},
                swiper: null
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.swiper = new Swiper(this.$refs.calendar, {

                })
            })
        },
        methods: {
            handleCancel() {
                this.close()
            },
            handleSave() {
                this.onConfirm(current)
                this.close()
            }
        },
        components: {
            Element
        }
    }
</script>
