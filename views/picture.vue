<template>
    <div class="page">
        <div class="page__hd">
            <h1>Picture</h1>
        </div>
        <div class="page__bd" style="background: #fff">
            <z-picture v-model="images"></z-picture>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                images: ['https://placehold.it/84x84', 'https://placehold.it/84x84']
            }
        },
        components:{
        }
    }
</script>
