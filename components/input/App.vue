<template>
    <div>
        <label v-if="label" class="su-cell__label">{{ label }}</label>
        <input :type="type"
               v-model.trim="current"
               class="zg-input"
               :readonly="readonly"
               :disabled="disabled"
               :placeholder="placeholder"
               :pattern="pattern"
               :style="styles"
               :accept="accept"/>
    </div>
</template>
<script>
    export default{
        props: {
            value: [String, Number],
            label: String,
            placeholder: String,
            type: {
                type: String,
                default: 'text'
            },
            readonly: Boolean,
            disabled: Boolean,
            pattern: String,
            accept: String,
            align: {
                type: String,
                default: 'left'
            }
        },
        computed: {
            styles() {
                return {
                    textAlign: this.align
                }
            }
        },
        data() {
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
    }
</script>
