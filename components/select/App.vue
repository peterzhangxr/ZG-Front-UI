<template>
    <select class="zg-input" v-model="current">
        <option value="" selected disabled>{{ placeholder }}</option>
        <option v-for="option of options" :value="getValue(option)">{{getLabel(option)}}</option>
    </select>
</template>
<script>
    export default{
        props: {
            value: [String, Number],
            placeholder: String,
            options: {
                type: Array,
                default: () => {
                    return []
                }
            },
            labelKey: String,
            valueKey: String
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
            },
        },
        methods: {
            getLabel(option) {
                if (this.labelKey && option[this.labelKey]) {
                    return option[this.labelKey]
                }

                return option
            },

            getValue(option) {
                if (this.valueKey && option[this.valueKey]) {
                    return option[this.valueKey]
                }

                return option
            }
        }
    }
</script>
