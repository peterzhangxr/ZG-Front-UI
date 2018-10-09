<template>
    <z-tabbar :list="list">

    </z-tabbar>
</template>
<script>
    export default{
        data(){
            return{
                list: [{
                    title: '测试',
                    to: {name: 'button'},
                    icon: 'https://placehold.it/24x24',
                    iconSelected: 'https://placehold.it/24x24'
                }, {
                    title: '测试',
                    to: {name: 'button'},
                    icon: 'https://placehold.it/24x24',
                    iconSelected: 'https://placehold.it/24x24'
                }, {
                    title: '测试',
                    to: {name: 'button'},
                    icon: 'https://placehold.it/24x24',
                    iconSelected: 'https://placehold.it/24x24'
                }]
            }
        },
        components:{
        }
    }
</script>
