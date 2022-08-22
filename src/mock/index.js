/*
    Mock用于模拟请求后端返回的数据
    文档：https://github.com/nuysoft/Mock/wiki
*/

import Mock from 'mockjs';      //引入Mock.js
const Random = Mock.Random;   //Mock.Random()是一个工具类，用于生成各种随机数据
let data = {
    template: [],
};                  //用于接受生成的数据的数组
let List = [];
const count = 60;
Mock.setup({
    timeout: '300-600'  //设置全局延时  没有延时有时会检测不到数据变化
})
for (let i = 0; i < 10; i++) {
    let template = {
        name: Random.name(),            //随机名字
        string: Random.string(2, 10),   //随机字符串
        date: Random.date()             //随机日期
    };
    
    data.template.push(template);
}

/*
    id
    username
    address
    createTime
    income
    pay
    accoutCash
*/

for (let i = 0; i < count; i++){
    List.push(Mock.mock({
        id: Mock.Random.guid(),
        username: Mock.Random.cname(),
        address: Mock.Random.province(),
        createTime: Mock.Random.datetime(),
        income: Mock.Random.integer(0, 9999),
        pay: Mock.Random.integer(0, 9999),
        accoutCash: Mock.Random.integer(0,9999)
    }))
}
let menulist = {
    list: [
        {
            name: 'DashBoard',
            route: '/index/index',
        },
        {
            name: 'Share',
            route: '/share/share'
        },
        {
            name: 'User',
            route: '/user',
            children: [
                {
                    name: 'Admin',
                    route: '/admin'
                },
                {
                    name: 'Visitor',
                    route: '/visitor'
                }
            ]
        },
        {
            name: 'test',
            route: '/index/index'
        },
        {
            name: 'Money',
            route: '/money/moneyList'
        }
    ]
}
data.menulist = menulist;
Mock.mock("/data/index", "get", data);
Mock.mock("/data/info", "get", List);