<template>
    <div class="zg-box__hd" :class="{'zg-box__hd__center': center}">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        props: {
            center: Boolean,
        }
    }
</script>
