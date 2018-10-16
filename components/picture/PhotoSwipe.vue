<template>
    <!-- Root element of PhotoSwipe. Must have class pswp. -->
    <div ref="pswp" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

        <!-- Background of PhotoSwipe.
             It's a separate element as animating opacity is faster than rgba(). -->
        <div class="pswp__bg"></div>

        <!-- Slides wrapper with overflow:hidden. -->
        <div class="pswp__scroll-wrap">

            <!-- Container that holds slides.
                PhotoSwipe keeps only 3 of them in the DOM to save memory.
                Don't modify these 3 pswp__item elements, data is added later on. -->
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>

            <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
            <div class="pswp__ui pswp__ui--hidden">

                <div class="pswp__top-bar">

                    <!--  Controls are self-explanatory. Order can be changed. -->

                    <div class="pswp__counter"></div>


                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                    <button class="pswp__button pswp__button--share" title="Share"></button>

                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>


                    <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                    <!-- element will get class pswp__preloader--active when preloader is running -->
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div>
                </div>

                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                </button>

                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                </button>

                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>

            </div>

        </div>
        <div v-if="remove" @click="handleRemove" class="zg-pswp__button zg-pswp__button--delete zg-elevation-3"></div>

    </div>
</template>

<script>
    import PhotoSwipe from '../../assets/photoswipe/photoswipe.js'
    import PhotoSwipeUI_Default from '../../assets/photoswipe/photoswipe-ui-default.js'
    export default {
        props: {
            current: 0,
            value: Boolean,
            remove: Boolean,
            images: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        watch: {
            value(val) {
                console.log(val)
                this.visible = val
                if (val) {
                    this.init()
                }
            },

            visible(val) {
                this.$emit('input', val)
            }
        },
        data(){
            return {
                pswp: null,
                visible: this.value,
            }
        },
        mounted() {

        },
        methods: {
            handleRemove() {
                if (this.images.length > 1) {
                    this.images.splice(this.pswp.getCurrentIndex(), 1)
                    this.init()
                } else {
                    this.pswp.close()
                    this.images.splice(this.pswp.getCurrentIndex(), 1)
                }
            },
            init () {
               let pswpElement = this.$refs.pswp;

                // define options (if needed)
                let options = {
                    index: this.current, // start at first slide
                    closeEl: true,
                    captionEl: false,
                    fullscreenEl: false,
                    zoomEl: false,
                    shareEl: true,
                    counterEl: true,
                    arrowEl: false,
                    preloaderEl: false,
                    isClickableElement: function(el) {
                        return el.tagName === 'IMG';
                    },

                    tapToClose: true,

                    tapToToggleControls: false,
                    bgOpacity: 0.9,
                    shareButtons: []

                }
                let items = []
                for (let item of this.images) {
                    items.push({
                        src: item.src,
                        w: item.width,
                        h: item.height
                    })
                }

                // Initializes and opens PhotoSwipe
                let pswp = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

                pswp.listen('close', () => {
                    this.visible = false
                })

                pswp.init();

                this.pswp = pswp
            }
        }
    }
</script>
<style lang="less" scped>
    @import "../../assets/photoswipe/photoswipe.css";
    @import "../../assets/photoswipe/default-skin/default-skin.css";
    .pswp__button--trushed {
        background-image: url("../../assets/photoswipe/default-skin/trushed.png")!important;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px 24px;
    }
    .zg-pswp__button {
        &--delete {
            width: 64px;
            height: 64px;
            background: url("../../assets/photoswipe/default-skin/trushed.png") no-repeat center;
            background-size: 32px 32px;
            position: absolute;
            left: 50%;
            margin-left: -32px;
            bottom: 32px;
            opacity: 0.75;
        }
    }
</style>
