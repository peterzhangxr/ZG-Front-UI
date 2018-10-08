<template>
    <div class="zg-cell zg-cell__form" :class="{'zg-cell__none': none}">
        <div v-if="label" class="zg-cell__hd">{{ label }}</div>
        <div class="zg-cell__bd">
            <slot></slot>
        </div>
        <slot name="ft"></slot>
    </div>
</template>
<script>
    export default{
        props: {
            label: String,
            none: {
                type: Boolean,
                default: false
            },
        }
    }
</script>
