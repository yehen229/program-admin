import request from '@/util/axios.js'

export function getTestData() {
    return request({
        method: 'get',
        url: '/data/index',
    }).then((res) => {
        res.data.menulist.list.map((item) => {
            if (item.hasOwnProperty('children')) {
                Object.defineProperty(item, 'hidden', { value: true });
            }
        })   
        return res
    })
}

