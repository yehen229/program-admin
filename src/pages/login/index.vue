<template>
    <div>
        登录页面
        <input type="text" v-model="username" placeholder="输入用户名">
        <input type="text" v-model="password" placeholder="输入密码">
        <button @click="loginCheck">登录</button>
    </div>
</template>

<script>
import { getLoginData } from '@/api/data';
import { getCookie } from '@/util/cookie';
import { initRole } from '@/util/permission'
export default {
    name: 'Login',

    data() {
        return {
            username: '',
            password: ''
        };
    },

    mounted() {

    },

    methods: {
        loginCheck: function () {
            if (this.username != '' && this.password != '') {
                getLoginData({
                    username: this.username,
                    password: this.password
                }).then(res => {
                    if (res.data.data.name == false) alert('查无此人')
                    else if (res.data.data.name == true && res.data.data.pass == false) alert('密码错误');
                    else {
                        console.log(res.data)
                        this.$store.commit('SET_USER', this.username);
                        this.$store.commit('SET_CURRENTROLE', res.data.data.role);
                        this.$store.commit('SET_TOKEN', res.data.data.token);
                        console.log(this.$store.state.user, 'USER');
                        this.$router.push('/index/index');
                        console.log(document.cookie, 'TOKEN加入');
                    }
                })
            }
            else {
                alert('请输入用户名和密码')
            }
        }
    },
};
</script>

<style lang="scss" scoped>
</style>