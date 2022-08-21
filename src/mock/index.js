/*
    Mock用于模拟请求后端返回的数据
    文档：https://github.com/nuysoft/Mock/wiki
*/

import Mock from 'mockjs';      //引入Mock.js
const Random = Mock.Random;   //Mock.Random()是一个工具类，用于生成各种随机数据
let data = {
    template: [],
};                  //用于接受生成的数据的数组
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
        }
    ]
}
data.menulist = menulist;
Mock.mock("/data/index", "get", data);
