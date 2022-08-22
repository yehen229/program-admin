import { getMoneyData } from "@/api/data"
/*
    id
    username
    address
    createTime
    income
    pay
    accoutCash
*/
const money = {
    state: {
        id: '',
        username: '',
        address: '',
        createTime: '',
        income: 0,
        pay: 0,
        accoutCash: 0
    },
    getters: {
        id: state => state.id,
        username: state => state.username,
        address: state => state.address,
        createTime: state => state.createTime,
        income: state => state.income,
        pay: state => state.pay,
        accoutCash: state => state.accoutCash,
    },
    mutations: {
        SET_ID: (state, id) => {
            state.id = id
        },
        SET_USERNAME: (state, username) => {
            state.username = username
        },
        SET_ADDRESS: (state, address) => {
            state.address = address
        },
        SET_CREATETIME: (state, createTime) => {
            state.createTime = createTime
        },
        SET_INCOME: (state, income) => {
            state.income = income
        },
        SET_PAY: (state, pay) => {
            state.pay = pay
        },
        SET_ACCOUTCASH: (state, accoutCash) => {
            state.accoutCash = accoutCash
        },
    },
    actions: {
        GetMoneyIncomeData() {
            return new Promise(resolve => {
                getMoneyData().then(res => {
                    const data = res.data;
                    console.log(data, '取到MoneyData');
                    resolve(data);
                })
            })
        }
    }
}

export default money

