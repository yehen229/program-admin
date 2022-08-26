import request from '@/util/axios.js'

export function getTestData() {
    return request({
        method: 'get',
        url: '/data/index',
    }).then((res) => {
        console.log(res)
        res.data.menulist.list.map((item) => {
            if (item.hasOwnProperty('children')) {
                Object.defineProperty(item, 'hidden', { value: true });
            }
        })   
        return res
    })
}

export function getAdminMenu() {
    return request({
        method: 'get',
        url: '/data/admin'
    })
}
