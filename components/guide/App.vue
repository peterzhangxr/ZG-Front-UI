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
            <div class="zg-guide__share__text" v-if="type == 'share_text'">
                <div class="zg-guide__share__text__box">
                    <div class="text" v-html="content">请点击右上角</div>
                </div>
                <div class="zg-guide__share__text__tip">
                    点击右上角<br/>
                    分享至好友或朋友圈
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            type: String,
            content: String
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
