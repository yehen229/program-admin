import request from '@/util/axios.js'
import { setCookie } from '@/util/cookie'

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

export function getLoginData(data) {
    return request({
        url: 'data/login/check',
        method: 'POST',
        data: JSON.stringify(data)
    }).then(res => {
        setCookie('Token', res.data.data.token, 3);
        return res
    })
}

export function logOut(data) {
    return request({
        url: 'data/logout',
        method: 'GET',
        data: JSON.stringify(data)
    })
}
