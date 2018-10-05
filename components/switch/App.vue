<template>
    <div class="zg-switch">
        <input type="checkbox" :disabled="disabled" class="zg-switch__input" v-model="current"/>
        <div class="zg-switch__box" :class="'zg-switch__' + color"></div>
    </div>
</template>

<script>
    export default{
        props: {
            color: {
                type: String,
                default: 'primary'
            },
            value: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }

        },
        computed: {
            current: {
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input',  val)
                }
            }
        }

    }
</script>
