<template>
    <div class="page">
        <div class="page__hd">
            <h1>Components</h1>
        </div>
        <div class="page__bd">
            <z-cell-container>
                <z-cell icon :to="{name: 'switch'}">
                    <z-cell-bd>开关控件</z-cell-bd>
                    <z-cell-ft></z-cell-ft>
                </z-cell>
                <z-cell icon :to="{name: 'form'}">
                    <z-cell-bd>表单控件</z-cell-bd>
                    <z-cell-ft></z-cell-ft>
                </z-cell>
                <z-cell icon :to="{name: 'button'}">
                    <z-cell-bd>按钮控件</z-cell-bd>
                    <z-cell-ft></z-cell-ft>
                </z-cell>
                <z-cell icon :to="{name: 'tabbar'}">
                    <z-cell-bd>Tabbar</z-cell-bd>
                    <z-cell-ft></z-cell-ft>
                </z-cell>
            </z-cell-container>
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
