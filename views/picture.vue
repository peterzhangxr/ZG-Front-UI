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
                    src: 'https://placekitten.com/600/400',
                    w: 600,
                    h: 400
                }, {
                    src: 'https://placekitten.com/1200/900',
                    w: 1200,
                    h: 900
                }]
            }
        },
        components:{
        }
    }
</script>
