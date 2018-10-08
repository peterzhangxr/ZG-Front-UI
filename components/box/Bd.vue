<template>
    <div class="zg-box__bd" :class="{'zg-box__bd__center': center}">
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
