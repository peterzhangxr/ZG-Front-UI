<template>
    <div class="page">
        <div class="page__hd">
            <h1>Popup{{visible}}</h1>
        </div>
        <div class="page__bd">
            <z-button @click.native="visible = true">打开</z-button>
        </div>
        <z-popup v-model="visible" right>
            popup的内容
        </z-popup>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                visible: false
            }
        }
    }
</script>
