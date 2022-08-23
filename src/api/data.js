import request from '@/util/axios.js'

export function getMoneyData() {
    return request({
        url: '/data/info',
        method: 'GET'
    })
}

export function addMoneyData(params) {
    return request({
        url: 'data/info/add',
        method: 'POST',
        data: JSON.stringify(params)
    })
}

