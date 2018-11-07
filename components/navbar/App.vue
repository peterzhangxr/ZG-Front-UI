<template>
    <div class="zg-navbar__container">
        <div class="zg-navbar zg-navbar__fixed" :class="{'zg-navbar__fixed': fixed, 'zg-navbar__redpacket': redpacket}">
            <div v-for="(item, index) of items" class="zg-navbar__item" :class="{'zg-navbar__item__active': index == current }" @click="handleClick(item, index)">
                <slot v-bind:item="item">
                    <div class="zg-navbar__text">
                        {{item.label ? item.label : item}}
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            activeIndex: {
                type: Number,
                default: 0
            },
            items: {
                type: Array,
                default: () => {
                    return []
                }
            },
            fixed: {
                type: Boolean,
                default: true
            },
            onClick: {
                type: Function,
                default: () => {}
            },
            redpacket: Boolean
        },
        data(){
            return {
                current: this.activeIndex
            }
        },
        methods: {
            handleClick(item, index) {
                this.current = index
                this.onClick(item, index)
            }
        }
    }
</script>
