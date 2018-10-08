<template>
    <div class="zg-panel__bd" :class="{'zg-panel__bd__padding': padding, 'zg-panel__bd__padding-left': paddingLeft}">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        props: {
            padding: Boolean,
            paddingLeft: Boolean
        }
    }
</script>
