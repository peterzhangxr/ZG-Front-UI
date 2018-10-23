<template>
    <div class="zg-sms-code">
        <template v-for="(el, index) of list">
            <div class="zg-sms-code__input" :class="{'zg-sms-code__input__focus': el.focus}">
                <input ref="input" type="number"
                       v-model="el.value"
                       @keyup="handleInput(el, index)"
                       @focus="handleFocus(el)"
                       @blur="handleFocus(el)"/>
            </div>
        </template>
    </div>
</template>
<script>
    export default {
        props: {
            num: {
                type: Number,
                default: 6
            }
        },

        mounted() {
            let list = []
            for (let i = 0; i< this.num; i++) {
                list.push({
                    focus: false,
                    value: ''
                })
            }

            this.list = list
            this.$nextTick(() => {
                this.$refs.input[0].focus()
            })
        },
        data(){
            return {
                list: []
            }
        },
        methods: {
            handleFocus(input) {
                input.focus = !input.focus
            },

            handleInput(el, index) {
                this.$refs.input[index + 1].focus()
            }
        }
    }
</script>
