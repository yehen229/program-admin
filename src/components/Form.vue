<template>
    <div class="formPanel">
        <form>
            <input type="text" value="" v-model="name" placeholder="输入姓名">
            <input type="text" value="" v-model="income" placeholder="输入收入">
            <input type="text" value="" v-model="pay" placeholder="输入支出">
            <input type="text" value="" v-model="accoutCash" placeholder="输入账户现金">
            <input type="text" value="" v-model="address" placeholder="输入地址">
            <button @click="submitMoneyData">提交</button>
        </form>
    </div>
</template>

<script>
import { addMoneyData } from '@/api/data';
export default {
    name: 'Form',
    props: ['FormName'],

    data() {
        return {
            name: '',
            income: 0,
            pay: 0,
            accoutCash: 0,
            address: '',
            container: []
        };
    },

    mounted() {

    },

    methods: {
        submitMoneyData: function (event) {
            event.preventDefault();
            let formdata = {
                username: this.name,
                income: this.income,
                pay: this.pay,
                accoutCash: this.accoutCash,
                address: this.address
            };
            addMoneyData(formdata).then(res => {
                this.container = res.data.data;
                console.log(this.container);
                this.$emit('updateMoneyData', this.container);
            })
        }
    },
};
</script>

<style lang="scss" scoped>
</style>