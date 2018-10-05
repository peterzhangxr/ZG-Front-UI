<template>
    <a :href="link" class="zg-cell" :class="classes">
        <slot></slot>
    </a>
</template>
<script>
    import cx from 'classnames'
    export default {
        props: {
            to: [String, Object],
            none: Boolean,
            icon: Boolean
        },
        computed: {
            classes() {
                return cx({
                    ['zg-cell__none']: this.none,
                    ['zg-cell__icon']: this.icon
                })
            },
            link() {
                if (this.to && this.$router) {
                    const resolved = this.$router.match(this.to)
                    if (resolved.matched.length > 0) {
                        this.$nextTick(() => {
                            this.$el.addEventListener('click', (event) => {
                                event.preventDefault()
                                this.$router.push(this.to)
                            });
                        })

                        return resolved.fullPath || resolved.path
                    }
                }

                return 'javascript:;'

            }
        }
    }
</script>
