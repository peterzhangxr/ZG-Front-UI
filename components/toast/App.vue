<template>
    <div class="zg-toast " :class="classes">
        <div v-if="type" class="zg-toast__icon"></div>
        <div class="zg-toast__content">{{ text }}</div>
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
            type: String
        },
        computed: {
            classes() {
                return cx([
                    { 'zg-toast__active': this.visible },
                    { 'zg-toast__error': this.type == 'error' },
                    { 'zg-toast__success': this.type == 'success' }
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
