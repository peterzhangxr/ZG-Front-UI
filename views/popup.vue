<template>
    <div class="page">
        <div class="page__hd">
            <h1>Popup{{visible}}</h1>
        </div>
        <div class="page__bd">
            <z-button @click.native="handleClick">打开</z-button>
        </div>
        <z-popup v-model="visible" right>
            <div style="width: 200px;height: 400px;background: #fff">
                popup的内容</div>
        </z-popup>
        <z-tools>
            <z-tools-item label="我的图标"></z-tools-item>
        </z-tools>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                visible: false
            }
        },
        methods: {
            handleClick() {
                this.$guide('share')
            }
        }
    }
</script>
