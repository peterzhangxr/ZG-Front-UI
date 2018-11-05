<template>
    <div>
    </div>
</template>
<script>
    export default{
        data() {
            return{
                msg:'hello vue'
            }
        },
        components:{
        },
        mounted() {
            this.$dayPicker({
                defaultValue: '10'
            })
            //this.$dialog()
            /*
            this.$actionsheet([{
                label: '退出登录',
                color: 'danger'
            }])*/
        }
    }
</script>
