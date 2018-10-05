<template>
    <div class="page">
        <div class="page__hd">
            <h1>Switch</h1>
        </div>
        <div class="page__bd">
            <div>
                {{open}}
            </div>
            <z-switch v-model="open"></z-switch>
            <z-switch color="success" v-model="open"></z-switch>
            <z-switch color="error" v-model="open"></z-switch>
            <z-switch color="warning" v-model="open"></z-switch>
            <z-switch color="info" v-model="open"></z-switch>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                open: true
            }
        },
        components:{
        }
    }
</script>
