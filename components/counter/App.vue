<template>
    <div class="zg-number">
        <div class="zg-number__btn simulate-ui su-minus" :class="{'zg-number__btn__primary': current > this.min}" @click="minus"></div>
        <div class="zg-number__input zg-number__input__readonly">
            {{ current }}
        </div>
        <div class="zg-number__btn  simulate-ui su-plus" :class="{'zg-number__btn__primary': current < this.max}" @click="plus"></div>
    </div>
</template>
<script>
    import cx from 'classnames'
    export default{
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            value: Number,
            min: Number,
            max: Number,
            step: {
                type: Number,
                default: 1
            },
            color: {
                type: String,
                default: 'primary'
            }
        },
        data(){
            return {
                current: this.value
            }
        },
        watch: {
            value(val) {
                this.current = val
            },
            current(val) {
                this.$emit('input', val)
            }
        },
        computed: {
            classes() {
                return cx({
                    [`zg-number__btn__${this.color}`]: true
                })
            }
        },
        methods: {
            plus() {
                const val = this.current + this.step
                if ( typeof this.max != 'undefined' && val > this.max ) {
                    this.current = this.max
                } else {
                    this.current += this.step
                }

                this.$emit('input', this.current)
                this.$emit('change', this.current)
            },
            minus() {
                const val = this.current - this.step
                if ( typeof this.min != 'undefined' && val < this.min) {
                    this.current = this.min
                } else {
                    this.current -= this.step
                }

                this.$emit('input', this.current)
                this.$emit('change', this.current)
            }
        }
    }
</script>
