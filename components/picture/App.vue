<template>
    <div class="zg-grids__container">
        <div class="zg-grids" :class="classes">
            <div class="zg-grid" v-for="(picture, index) of images" @click="handleClick(index)">
                <div class="zg-grid__square">
                    <div class="zg-grid__box zg-grid__flex">
                        <img v-if="picture" :src="picture.src + '/b200'" />
                    </div>
                </div>
            </div>
            <div class="zg-grid" v-if="upload">
                <div class="zg-grid__square">
                    <div class="zg-grid__box zg-grid__input text-light">
                        <img width="31" src="../../assets/images/picture.png" />
                        图片
                        <input type="file" accept="image/*" @change="handleUpload"/>
                    </div>
                </div>
            </div>
        </div>
        <photo-swipe v-model="visible" :remove="upload" :images.sync="images"></photo-swipe>
    </div>
</template>
<script>
    import cx from 'classnames'
    import PhotoSwipe from './PhotoSwipe.vue'
    export default{
        props: {
            value: Array,
            domain: {
                type: String,
                default: ''
            },
            thumb: String,
            origin: String,
            col: {
                type: Number,
                default: 3
            },
            upload: Boolean,
            onUpload: {
                type: Function,
                default: () => {}
            }
        },
        data(){
            return {
                images: this.value,
                visible: false,
                current: 0
            }
        },
        components: {
            PhotoSwipe
        },
        watch: {
            value(val) {
                this.images = val
            },
            images(val) {
                this.$emit('input', val)
            }
        },
        computed: {
            classes() {
                return [
                    {[`col-${this.col}`]: true}
                ]
            }
        },
        methods:{
            getThumb(picture) {
                console.log(picture)
                if (this.thumb && picture[this.thumb])  {
                    return picture[this.thumb]
                } else if (typeof picture === 'string') {
                    //todo
                    //check是否正常的url
                    return picture
                }
            },

            handleUpload(event) {
                this.onUpload(event.target.files)
            },

            handleClick(index) {
                this.current = index
                this.visible = true
            }
        }
    }
</script>
