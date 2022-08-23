<template>
    <div>
        <table>
            <tr>
                <th v-for="headItem, headIndex in tableHead" :key="headIndex">{{ headItem }}</th>
            </tr>
            <tr v-for="dataItem, dataIndex in currentTableData" :key="dataIndex">
                <td>{{ dataItem.username }}</td>
                <td>{{ dataItem.createTime }}</td>
                <td>{{ dataItem.income }}</td>
                <td>{{ dataItem.pay }}</td>
                <td>{{ dataItem.accoutCash }}</td>
                <td>{{ dataItem.address }}</td>
                <td>操作</td>
            </tr>
        </table>
        <ul>
            <li @click="changePage" v-for="count in pageNumber">{{ count }}</li>
        </ul>
        <button @click="showForm = !showForm">显示表单</button>
        <Form formName="Money" ref="moneyform" v-if="showForm" @updateMoneyData="addMoneyList"></Form>
    </div>
</template>

<script>
import { getMoneyData } from '@/api/data';
import Form from '@/components/Form.vue'
export default {
    name: 'MoneyList',
    components: {
        Form
    },
    data() {
        return {
            currentPage: 1,
            limit: 20,
            currentTableData: [],
            tableData: [],
            tableHead: [
                '姓名',
                '创建日期',
                '收入',
                '支出',
                '账户现金',
                '地址',
                '操作'
            ],
            showForm: false
        };
    },
    computed: {
        pageNumber: function () {
            return Math.ceil(this.tableData.length / this.limit);
        }
    },
    created() {
        getMoneyData().then(res => {
            this.tableData = res.data;
            this.currentTableData = this.tableData.slice((this.currentPage - 1) * this.limit, this.limit);
        })
    },

    methods: {
        changePage(event) {
            this.currentPage = event.target.textContent;
            this.currentTableData.length = 0;
            this.updateCurrentTableData();
        },
        updateCurrentTableData() {
            let temp = (this.currentPage - 1) * this.limit;
            this.currentTableData = this.tableData.slice(temp, temp + this.limit);
        },
        addMoneyList(params) {
            this.tableData = params;
            this.updateCurrentTableData();
        }
    },
    watch: {

    }
};
</script>

<style lang="scss" scoped>
</style>