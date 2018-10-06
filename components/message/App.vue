<template>
    <div class="zg-message" :class="classes">
        <div class="zg-message__text">
            <i class="simulate-ui" :class="iconCls"></i>
            {{ text }}
        </div>
        <div class="zg-message__spacer"></div>
        <div v-if="close" @click="onClose" class="zg-message__close simulate-ui su-close"></div>
    </div>
</template>
<script>
    import cx from 'classnames'
    export default{
        props: {
            text: String,
            duration: {
                type: Number,
                default: 1000
            },
            type: String,
            close: Boolean,
            onClose: {
                type: Function,
                default: () => {}
            }
        },
        computed: {
            classes() {
                return cx([
                    { 'zg-message__active': this.visible },
                    { 'zg-message__error': this.type == 'error' },
                    { 'zg-message__success': this.type == 'success' },
                    { 'zg-message__primary': this.type == 'info' },
                    { 'zg-message__warning': this.type == 'warning' },

                ])
            },
            iconCls() {
                return cx([
                    {'su-error': this.type == 'error'},
                    {'su-info': this.type == 'info' || this.type == 'warning'},
                    {'su-right-circle': this.type == 'success'}
                ])
            }
        },
        data(){
            return {
                visible: false
            }
        }
    }
</script>
