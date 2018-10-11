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
                    <div ref="firstPicker" class="zg-picker__content">
                        <div class="zg-picker__item">选项1</div>
                        <div class="zg-picker__item">选项2</div>
                        <div class="zg-picker__item">选项3</div>
                        <div class="zg-picker__item">选项4</div>
                        <div class="zg-picker__item">选项5</div>
                        <div class="zg-picker__item">选项6</div>
                        <div class="zg-picker__item">选项6</div>
                        <div class="zg-picker__item">选项6</div>
                        <div class="zg-picker__item">选项6</div>
                        <div class="zg-picker__item">选项6</div>
                        <div class="zg-picker__item">选项6</div>
                        <div class="zg-picker__item">选项6</div>
                        <div class="zg-picker__item">选项6</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import HammerJs from 'hammerjs'
    export default{
        props: {
            labelKey: String,
            labelValue: String,
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
            const Swipe = new HammerJs.Swipe()
            let firstHammer = new HammerJs.Manager(this.$refs.firstPicker)
            firstHammer.on('swipe', (e) => {
                console.log(e)
            })

            firstHammer.on('press', (e) => {
                console.log(e)
            })
        },

        methods: {
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
