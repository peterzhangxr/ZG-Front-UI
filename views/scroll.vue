<template>
    <z-scroll :data="list" @scrollToEnd="getList">
        <z-box v-for="(item, index) of list" :key="index">
            <z-box-hd>
                <z-avatar size="40px" url="https://placehold.it/84x84"></z-avatar>
            </z-box-hd>
            <z-box-bd>
                <z-box-title>{{index}}撒旦的表妹是男人HOHO</z-box-title>
                <z-box-sub-title>计划行程：泰国清迈 、曼谷</z-box-sub-title>
            </z-box-bd>
            <z-box-ft>
                <z-box-title>0.01</z-box-title>
            </z-box-ft>
        </z-box>
    </z-scroll>
</template>

<script>
    export default{
        data(){
            return{
                list: []
            }
        },
        mounted() {
            this.getList()
        },
        methods: {
            getList() {
                for(let i = 0; i < 15; i++) {
                    this.list.push({
                        id: i
                    })
                }
            },
            onScroll(pos) {
                console.log(pos)
            }

        }
    }
</script>
