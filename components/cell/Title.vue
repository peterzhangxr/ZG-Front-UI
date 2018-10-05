<template>
    <div class="zg-cells__title" :class="{'zg-cells__title__warning': warning}">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        props: {
            warning: Boolean
        }
    }
</script>
