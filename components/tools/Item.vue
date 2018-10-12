<template>
    <div class="zg-tools__item">
        <div class="zg-tools__icon">
            <slot></slot>
        </div>
        <div class="zg-tools__label">{{ label }}</div>
    </div>
</template>
<script>
    export default{
        props: {
            label: String
        }
    }
</script>
