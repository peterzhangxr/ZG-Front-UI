<template>
    <div class="zg-calendar__container">
        <div class="zg-overlay" :class="{'zg-overlay__active': visible}" @click.prevent="handleCancel"></div>
        <div class="zg-popup zg-popup__bottom" :class="{'zg-popup__active': visible}">
            <div class="zg-calendar zg-calendar__primary">
                <div class="zg-calendar__hd">
                    <div class="zg-picker__hd">
                        <button @click="handleCancel" class="zg-btn zg-btn__default zg-btn__flat text-default">取消</button>
                        <div class="zg-picker__spacer"></div>
                        <button @click="handleConfirm" class="zg-btn zg-btn__primary text-purple bold zg-btn__flat">确定</button>
                    </div>

                </div>
                <div class="zg-calendar__bd">
                    <div class="zg-calendar__day">
                        <div v-for="item of items" class="zg-calendar__day__cell" @click="toggleDay(item)" :class="{'opacity': item == 0, 'zg-calendar__today': item == day}">
                            <div class="zg-calendar__day__text">
                                <div class="zg-calendar__day__title">{{ item }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            defaultValue: {
                type: String,
                default: ''
            },
            onConfirm: {
                type: Function,
                default: () => {}
            }
        },
        data(){
            return {
                visible: false,
                close: () => {},
                items: [],
                day: ''
            }
        },
        mounted() {
            let data = Array.from({length: 35}).map(x => '0')
            let start = 1
            for (let i = 1; i <= 31; i++) {
               data[start + i] = i < 10 ? '0' + i : i.toString()
            }
            this.items = data

            this.$nextTick(() => {
                this.day = this.defaultValue
            })

        },
        methods: {
            toggleDay(day) {
                this.day = day
            },
            handleCancel() {
                this.close()
            },
            handleConfirm() {
                if (this.day) {
                    this.onConfirm(this.day)
                }

                this.close()
            }
        }
    }
</script>
<style lang="less" scoped>
    .zg-calendar__day {
        display: flex;
        align-items: center;
    }
</style>
