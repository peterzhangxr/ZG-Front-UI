<template>
    <div class="zg-avatar" :class="tileCls" :style="sizeSty">
        <slot>
            <img v-if="url" :src="url" alt="avatar"/>
        </slot>
    </div>
</template>
<script>
    import cx from 'classnames';
    export default{
        props: {
            url: String,
            size: String,
            tile: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            tileCls() {
                return [{
                    'zg-avatar__tile': this.tile
                }]
            },
            sizeSty() {
                return {
                    width: this.size,
                    height: this.size
                }
            }
        }
    }
</script>
