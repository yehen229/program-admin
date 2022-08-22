<template>
    <div>
        <div></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getMoneyData } from '@/api/data';
export default {
    name: 'MoneyList',

    data() {
        return {
            tableData: [],
            tableHead: [
                '姓名',
                '创建日期',
                '收入',
                '支出',
                '账户现金',
                '地址',
                '操作'
            ]
        };
    },
    computed: {
    },
    created() {
        getMoneyData().then(res => {
            console.log(res.data);
            this.tableData = res.data;
        })
    },
    mounted() {
    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
</style>