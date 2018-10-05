<template>
    <div class="page">
        <div class="page__hd">
            <h1>Form {{mobile}}</h1>
        </div>
        <div class="page__bd">
            <z-cell-title warning>请绑定持卡人本人的银行卡</z-cell-title>
            <z-form>
                <z-form-item label="电话号码">
                    <z-input type="text" v-model="mobile" placeholder="这是提示文字"></z-input>
                </z-form-item>
                <z-form-item label="电话号码">
                    <z-input type="text" v-model="mobile" placeholder="这是提示文字"></z-input>
                </z-form-item>
                <z-form-item label="电话号码">
                    <z-input type="text" placeholder="这是提示文字"></z-input>
                </z-form-item>
                <z-form-item label="电话号码">
                    <z-form-item-ft slot="ft">
                        <z-switch></z-switch>
                    </z-form-item-ft>
                </z-form-item>
                <z-form-item label="选择框">
                    <z-select :options="['男', '女']" v-model="select" placeholder="请选择"></z-select>
                    <z-form-item-ft slot="ft" :none="false"></z-form-item-ft>
                </z-form-item>
                <z-form-item label="验证码">
                    <z-input type="text" placeholder="这是提示文字"></z-input>
                    <z-form-item-ft slot="ft">
                        <z-button color="primary" xs disabled>获取</z-button>
                    </z-form-item-ft>
                </z-form-item>
                <z-form-item>
                    <z-button color="primary" block @click.native="test">保存</z-button>
                </z-form-item>
            </z-form>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                select: '',
                mobile: '170'
            }
        },
        components:{
        },
        methods: {
            test() {
                this.$indicator.open()
                setTimeout(() => {
                    this.$indicator.close()
                }, 3000)
            }
        }
    }
</script>
