<template>
    <div class="zg-box__ft" :class="{'zg-box__ft__center': center}">
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
