import request from '@/util/axios.js'

export function getMoneyData() {
    return request({
        url: '/data/info',
        method: 'GET'
    })
}

