<template>
    <div v-infinite-scroll="onScroll" infinite-scroll-disabled="loading" class="zg-scroll" infinite-scroll-immediate-check="true">
        <template v-for="(item, index) of data">
            <slot v-bind:item="item"></slot>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: Array,
                default: () => {
                    return []
                }
            },
            onScroll: {
                type: Function,
                default: () => {}
            },

            loading: Boolean,

            distance: 50
        }
    }
</script>
