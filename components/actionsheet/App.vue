<template>
    <div class="zg-actionsheet__container">
        <div class="zg-overlay" :class="{'zg-overlay__active': visible}" @click.prevent="handleCancel"></div>
        <div class="zg-popup zg-popup__bottom" :class="{'zg-popup__active': visible}">
            <div class="zg-actionsheet">
                <div class="zg-actionsheet__menu">
                    <div v-for="item of list" class="zg-actionsheet__item" @click="handleCallback(item)">{{ getLabel(item) }}</div>
                </div>
                <div class="zg-actionsheet__action" v-if="cancel">
                    <div class="zg-actionsheet__item" @click="handleCancel">{{ cancelText }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            label: String,
            list: {
                type: Array,
                default: () => {
                    return []
                },
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            cancel: {
                type: Boolean,
                default: true
            },
            onCancel: Function,
            onClick: Function

        },
        data(){
            return {
                visible: false,
                close: () => {}
            }
        },

        methods: {
            getLabel(item) {
                if (this.label && item[this.label]) {
                    return item[this.label]
                } else if (item['label']) {
                    return item['label']
                }
            },
            handleCallback(item) {
                if (this.onClick) {
                    this.onClick(item)
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
