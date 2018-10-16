<template>
    <div class="zg-grids" :class="classes">
        <div class="zg-grid" v-for="picture of list">
            <div class="zg-grid__square">
                <div class="zg-grid__box zg-grid__flex">
                    <img v-if="getThumb(picture)" :src="getThumb(picture)" />
                </div>
            </div>
        </div>
        <div class="zg-grid" v-if="upload">
            <div class="zg-grid__square">
                <div class="zg-grid__box zg-grid__input text-light">
                    <img width="31" src="../../assets/images/picture.png" />
                    图片
                    <input type="file" @change="handleUpload($event.target)"/>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import cx from 'classnames'
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
            upload: Boolean
            onUpload: {
                type: Function,
                default: () => {}
            }
        },
        data(){
            return {
                list: this.value
            }
        },

        watch: {
            value(val) {
                console.log(val)
                this.list = val
            },
            list(val) {
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
            handleUpload(files) {
                this.onUpload(files)
            }
        }
    }
</script>
