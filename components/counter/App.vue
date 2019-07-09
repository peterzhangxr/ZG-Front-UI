<template>
    <div class="zg-number">
        <div class="zg-number__btn simulate-ui su-minus" :class="{'zg-number__btn__primary': current > this.min}" @click="minus"></div>
        <div v-if="input" class="zg-number__input">
            <input type="tel" v-model="current" @input="handleInput" @blur="handleBlur"/>
        </div>
        <div v-else class="zg-number__input zg-number__input__readonly">
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
            input: {
                type: Boolean,
                default: false
            },
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
                current: this.value,
                tt: null,
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
            handleInput(e) {
                let value = Number(e.target.value)
                if (Number.isNaN(value) || value < this.min) {
                    this.current = ''
                    return
                } else if (value > this.max) {
                    this.current = this.max
                } else {
                    this.current = value
                }
                this.$emit('input', this.current)
                this.$emit('change', this.current)
            },
            handleBlur(e) {
                if (e.target.value === '') {
                    this.current = this.min
                    this.$emit('input', this.current)
                    this.$emit('change', this.current)
                }
            },
            plus() {
                if (this.current === '') {
                    this.current = this.min
                }
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
                if (this.current === '') {
                    this.current = this.min
                }
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
