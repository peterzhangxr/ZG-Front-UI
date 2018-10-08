<template>
    <div class="zg-panel__ft" :class="{'zg-panel__ft__none': none}">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        props: {
            none: Boolean
        }
    }
</script>
