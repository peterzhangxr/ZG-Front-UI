<template>
    <div class="zg-navbar__container">
        <div class="zg-navbar zg-navbar__fixed">
            <div class="zg-navbar__item">
                <div class="zg-navbar__text">选项1</div>
            </div>
            <div class="zg-navbar__item zg-navbar__item__active">
                <div class="zg-navbar__text">选项2</div>
            </div>
            <div class="zg-navbar__item">
                <div class="zg-navbar__text">选项3</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
