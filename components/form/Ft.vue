<template>
    <div class="zg-cell__ft" :class="{'zg-cell__ft__none': none}">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        props: {
            none: {
                type: Boolean,
                default: true
            }
        }
    }
</script>
