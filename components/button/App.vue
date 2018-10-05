<template>
    <button :class="classes" :disabled="disabled || loading" :style="styles">
        <spinner v-if="loading"></spinner>
        <slot>Button</slot>
    </button>
</template>
<script>
    import cx from 'classnames'
    import Spinner from '../spinner'
    export default{
        props: {
            color: {
                type: String,
                default: 'default'
            },
            block: Boolean,
            lg: Boolean,
            md: Boolean,
            sm: Boolean,
            xs: Boolean,
            disabled: Boolean,
            outline: Boolean,
            size: String,
            flat: Boolean,
            circle: Boolean,
            round: Boolean,
            loading: Boolean
        },
        computed: {
            classes() {
                return cx([
                    'zg-btn',
                    'zg-btn__' + this.color,
                    { 'zg-btn__block': this.block },
                    { 'zg-btn__lg': this.lg },
                    { 'zg-btn__md': this.md },
                    { 'zg-btn__xs': this.xs },
                    { 'zg-btn__sm': this.sm },
                    { 'zg-btn__disabled': this.disabled || this.loading },
                    { 'zg-btn__outline': this.outline },
                    { 'zg-btn__flat': this.flat},
                    { 'zg-btn__circle': this.circle },
                    { 'zg-btn__round': this.round },
                    { 'zg-btn__loading': this.loading }
                ])
            },
            styles() {
                return  {
                    width: this.size,
                    height: this.size
                }
            }
        },
        components: {
            Spinner
        }
    }
</script>
