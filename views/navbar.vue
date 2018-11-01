<template>
    <z-navbar redpacket :items="list"></z-navbar>
</template>
<script>
    export default{
        data(){
            return{
                list: ['推荐管理','微关系', '代理关系']
            }
        },
        components:{
        }
    }
</script>
