<template>
    <div class="zg-dialog__container">
        <div class="zg-overlay" :class="{'zg-overlay__active': visible}" @click="handleTagClose"></div>
        <div class="zg-dialog" :class="{'zg-dialog__active': visible}">
            <div class="zg-card">
                <div class="zg-card__title">{{ title }}</div>
                <div class="zg-card__content" v-html="content"></div>
                <div class="zg-card__actions zg-card__actions__right">
                    <button v-if="cancel" @click.prevent.stop="handleCancel" class="zg-btn zg-btn__default zg-btn__block zg-btn__square">{{ cancelText }}</button>
                    <button v-if="ok" @click.prevent.stop="handleOk" class="zg-btn zg-btn__primary zg-btn__block">{{ okText }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: '提示'
            },
            content: {
                type: String,
                default: '这里是提示内容'
            },
            cancel: {
                type: Boolean,
                default: false
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            onCancel: {
                type: Function,
                default: () => {}
            },
            ok: {
                type: Boolean,
                default: true
            },
            okText: {
                type: String,
                default: '知道了'
            },
            onOk: {
                type: Function,
                default: () => {}
            },
            tagClose: Boolean
        },
        data(){
            return {
                visible: false,
                close: () => {}
            }
        },
        methods: {
            handleOk() {
                this.close()
                this.onOk()
            },
            handleCancel() {
                this.close()
                this.onCancel()
            },
            handleTagClose() {
                this.tagClose && this.close()
            }
        }
    }
</script>
