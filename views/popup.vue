<template>
    <div class="page">
        <div class="page__hd">
            <h1>Popup{{visible}}</h1>
        </div>
        <div class="page__bd">
            <z-button @click.native="close">打开</z-button>
        </div>
        <z-popup v-model="visible" right>
            <div style="width: 200px;height: 400px;background: #fff">
                popup的内容</div>
        </z-popup>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                visible: false
            }
        },
        methods: {
            close() {
                this.$toast.open({
                    text: 'abjaobjab',
                    onClose
                    : () => {
                        console.log(this.visible)
                    }
                })
            }
        }
    }
</script>
