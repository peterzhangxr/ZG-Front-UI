<template>
    <div class="zg-dialog__container">
        <div class="zg-overlay zg-overlay__active"></div>
        <div class="zg-dialog zg-dialog__active zg-dialog__scroll">
            <div class="zg-card">
                <div class="zg-card__title">提示</div>
                <div class="zg-card__content">
                    确定删除吗
                </div>
                <div class="zg-card__actions zg-card__actions__right">
                    <button class="zg-btn zg-btn__default zg-btn__xs">取消</button>
                    <button class="zg-btn zg-btn__primary zg-btn__xs">确定</button>
                </div>
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
