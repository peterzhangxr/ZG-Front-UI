<template>
    <div class="zg-guide__container" @click.prevent="close">
        <div class="zg-overlay" :class="{'zg-overlay__active': visible}" @click.prevent="handleCancel"></div>
        <div class="zg-guide" :class="{'zg-guide__active': visible}">
            <div class="zg-guide__share" v-if="type == 'share'">
                <div class="zg-guide__share__box"></div>
            </div>
            <div class="zg-guide__share__out" v-if="type == 'share_out'">
                <div class="zg-guide__share__out__box"></div>
            </div>
            <div class="zg-guide__share__merchant" v-if="type == 'share_merchant'">
                <div class="zg-guide__share__merchant__box"></div>
            </div>
            <div class="zg-guide__share__upgrade" v-if="type == 'share_upgrade'">
                <div class="zg-guide__share__upgrade__box"></div>
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
