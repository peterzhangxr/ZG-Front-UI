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
            /*
            this.$calendar({
                defaultValue: ['2018-12-01'],
                enableDate: ['2018-12-01', '2018-12-05', '2018-12-07', '2019-01-05']
            })*/
            //this.$dialog()
            /*
            this.$actionsheet([{
                label: '退出登录',
                color: 'danger'
            }])*/
        }
    }
</script>
