<template>
    <div class="page">
        <div class="page__hd">
            <h1>短信</h1>
        </div>
        <div class="page__bd" style="background: #fff;padding: 40px 16px">
            <z-sms-code v-model="code"></z-sms-code>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                code: ''
            }
        },
        components:{
        }
    }
</script>
