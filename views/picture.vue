<template>
    <div class="page">
        <div class="page__hd">
            <h1>Picture{{images.length}}</h1>
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
                images: [{
                    src: 'https://placehold.it/600x400',
                    width: 600,
                    height: 400
                }, {
                    src: 'https://placehold.it/1200x900',
                    width: 1200,
                    height: 900
                }]
            }
        },
        components:{
        }
    }
</script>
