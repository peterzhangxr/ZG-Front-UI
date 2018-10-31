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
                    <div class="zg-picker__select"></div>
                    <div ref="picker" class="zg-picker__content">
                        <div v-for="option of items" class="zg-picker__item" v-html="getLabelText(option)"></div>
                    </div>

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

            onCancel: Function,
            onConfirm: Function

        },
        data(){
            return {
                visible: false,
                close: () => {},
                firstList: [],
                secondList: [],
                thirdList: []
            }
        },
        mounted() {
            let swiper = new Swiper(this.$refs.picker, {
                direction: 'vertical'
            })
        },

        methods: {
            getLabelText(option) {
                if (option[this.labelKey]) {
                    return option[this.labelKey]
                }

                return option
            },
            handleConfirm() {
                if (this.onConfirm) {
                    this.onConfirm()
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
