<template>
    <div class="topHeader">
        <div id="leftHeader">
            <img src="../assets/logo.png" />
        </div>
        <div id="rightHeader">
            <li v-for="(item, index) in linkList" :key="index" class="linkList">
                <a :href="item.linkHref" target="_blank">
                    <img :src="item.imgSrc" alt="">
                </a>
            </li>
            <li @click.stop="logout">登出</li>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'topheader',

    data() {
        return {
            linkList: [
                {
                    linkHref: "https://github.com/yehen229",
                    imgSrc: require("../assets/Github.jpg")
                },
                {
                    linkHref: "https://www.baidu.com/",
                    imgSrc: require("../assets/baidu.png")
                }
            ]
        };
    },

    mounted() {

    },

    methods: {
        async logout() {
            await this.$store.dispatch('userLogOut');
            console.log(document.cookie);
        }
    },
};
</script>

<style lang="less" scoped>
.topHeader {
    position: fixed;
    width: 100%;
    min-width: 800px;
    height: var(--nav-head);
    background-color: skyblue;
}

#leftHeader {
    float: left;
    height: 100%;
    display: flex;

    img {
        width: 3rem;
        object-fit: contain;
    }
}

#rightHeader {
    height: 100%;
    width: 10rem;
    float: right;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
}

.linkList {
    margin-right: 3rem;

    img {
        width: 2rem;
        border-radius: 50%;
    }
}
</style>