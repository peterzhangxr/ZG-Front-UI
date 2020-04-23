<template>
    <div v-infinite-scroll="onScroll" infinite-scroll-disabled="loading" class="zg-scroll" infinite-scroll-immediate-check="true">
        <slot name="single"></slot>
        <template v-for="(item, index) of data">
            <slot v-bind:item="item" v-bind:index="index"></slot>
        </template>
        <div v-if="loading && !loaded" class="zg-scroll__spinner">
            <Spinner :size="size" color="light"></Spinner>
            <div class="zg-scroll__spinner--text">{{ text }}</div>
        </div>

        <div v-if="!loading && !loaded && data.length >= 15" @click="onScroll" class="loadmore">
            <slot name="loadmore">点击加载更多</slot>
        </div>
    </div>
</template>

<script>
    import Spinner from '../spinner'
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

            loading: {
                type: Boolean,
                default: false
            },

            distance: {
                type: Number,
                default: 50
            },
            size: {
                type: String,
                default: '18px',
            },
            loaded: {
                type: Boolean,
                default: false,
            },

            text: {
                type: String,
                default: '努力加载中...'
            }

        },
        components: {
            Spinner
        }
    }
</script>
<style lang="less" scoped>
    .loadmore {
        color: #c3c3c3;
        font-size: 14px;
        padding: 16px 0;
        text-align: center;
    }
</style>
