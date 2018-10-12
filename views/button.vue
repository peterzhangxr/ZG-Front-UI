<template>
    <div class="">
        <div class="page__hd">
            <h1>Button</h1>
        </div>
        <div class="page__bd">
            <z-button color="primary" lg>button lg</z-button>
            <z-button color="default" block outline>button normal</z-button>
            <z-button color="primary" md>button md</z-button>
            <z-button color="primary" xs>button xs</z-button>
            <z-button color="primary" sm>button sm</z-button>
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
