<template>
    <div class="zg-indicator" :class="{'zg-indicator__active': visible, 'zg-indicator__text': text}">
        <spinner></spinner>
        <div v-if="text" class="zg-indicator__content">
            {{ text }}
        </div>
    </div>
</template>
<script>
    import Spinner from '../spinner'
    export default{
        props: {
            text: String
        },
        data(){
            return{
                visible: false
            }
        },
        components:{
            Spinner
        }
    }
</script>
