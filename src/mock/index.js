/*
    Mock用于模拟请求后端返回的数据
    文档：https://github.com/nuysoft/Mock/wiki
*/

import Mock from 'mockjs';      //引入Mock.js
const Random = Mock.Random;   //Mock.Random()是一个工具类，用于生成各种随机数据
Mock.setup({
    timeout: '300-600'  //设置全局延时  没有延时有时会检测不到数据变化
})
let testToken = "TestToken"
let data = {
    template: [],
};                  //左侧menu数据
let List = [];      //money页page数据
let user = [{
    username: 'ljl',
    password: '666'
},
    {
        username: 'zhangsan',
        password: '999'
    }

]


const count = 60;

for (let i = 0; i < 10; i++) {
    let template = {
        name: Random.name(),            //随机名字
        string: Random.string(2, 10),   //随机字符串
        date: Random.date()             //随机日期
    };
    
    data.template.push(template);
}

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
Mock.mock(/\/data\/info\/add/, "post", (params) => {
    let newData = JSON.parse(params.body);
    /*
        后端对newData进行处理
    */
    List.push(newData);
    return {
        code: '0',
        message: 'success',
        data: List
    }
})
Mock.mock(/\/data\/login\/check/, "post", (params) => {
    let newData = JSON.parse(params.body);
    let name = false;
    let pass = false;
    user.forEach(item => {
        if (item.username == newData.username) {
            name = true;
            if (item.password == newData.password) {
                pass = true;
            }
        }
    })
    return {
        code: '0',
        message: 'success',
        data: {
            name,
            pass,
            token: testToken
        }
    }
})

Mock.mock(/\/data\/logout/, "get", () => {
    return {
        code: 200,
        data: ""
    }
})

