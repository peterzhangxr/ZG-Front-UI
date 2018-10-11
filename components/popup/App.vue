<template>
    <div class="zg-popup__container" v-if="visible">
        <div class="zg-overlay" :class="{'zg-overlay__active': visible}" @click="visible = false"></div>
        <div class="zg-popup" :class="classes"  @click.self.stop="visible = false">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import cx from 'classnames'
    export default{
        props: {
            value: Boolean,
            right: Boolean,
            bottom: Boolean,
            left: Boolean
        },
        data(){
            return {
                visible: false
            }
        },
        computed: {
            classes() {
                return [
                    { 'zg-popup__active': this.visible },
                    { 'zg-popup__bottom': this.bottom },
                    { 'zg-popup__left': this.left },
                    { 'zg-popup__right': this.right },
                ]
            }
        },
        watch: {
            value(val) {
                this.visible = val
            },
            visible(val) {
                this.$emit('input', val)
            }
        }
    }
</script>
