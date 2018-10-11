<template>
    <div class="zg-guide__container" @click.prevent="close">
        <div class="zg-overlay" :class="{'zg-overlay__active': visible}" @click.prevent="handleCancel"></div>
        <div class="zg-guide" :class="{'zg-guide__active': visible}">
            <div class="zg-guide__share" v-if="type == 'share'">
                <div class="zg-guide__share__box"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            type: String
        },
        data(){
            return {
                visible: false,
                close: () => {}
            }
        },
        components:{
        }
    }
</script>
