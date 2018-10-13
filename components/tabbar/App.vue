<template>
    <div class="zg-tabbar__container">
        <div class="zg-tabbar__content">
            <slot></slot>
        </div>
        <div class="zg-tabbar" :class="{'zg-tabbar__fixed': fixed}">
            <template v-for="(bar, index) of list">
                <div v-if="active == index" class="zg-tabbar__item zg-tabbar__item__active">
                    <div class="zg-tabbar__icon">
                        <img :src="bar.iconSelected"/>
                    </div>
                    <div class="zg-tabbar__text">{{ bar.title }}</div>
                </div>
                <div v-else-if="bar.redirect" @click="handleClick(bar)" class="zg-tabbar__item">
                    <div class="zg-tabbar__icon">
                        <img :src="bar.iconSelected"/>
                    </div>
                    <div class="zg-tabbar__text">{{ bar.title }}</div>
                </div>
                <router-link v-else :to="bar.to" class="zg-tabbar__item ">
                    <div class="zg-tabbar__icon">
                        <img :src="bar.icon"/>
                    </div>
                    <div class="zg-tabbar__text">{{ bar.title }}</div>
                </router-link>
            </template>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            active: {
                type: Number,
                default: 0
            },
            list: {
                type: Array,
                required: true
            },
            fixed: Boolean
        },
        methods: {
            handleClick(bar) {
                bar.onClick()
            }
        }
    }
</script>
