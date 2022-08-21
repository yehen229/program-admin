<template>
    <div id="leftMenu">
        <div class="MenuContianer">
            <li v-for="(item, index) in menuData.menulist.list" :key="index">
                <router-link v-if='!item.children' :to="item.route" class="routeTop">{{ item.name }}</router-link>
                <div v-else @click="showMenu(item)">
                    {{ item.name }}
                    <div v-if="hidden == false">
                        <router-link v-for="(child, ind) in item.children" :key="ind" :to='item.route + child.route'
                            class="route">
                            {{ child.name }}
                        </router-link>
                    </div>
                </div>
            </li>
        </div>
    </div>
</template>

<script>
import { getTestData } from '@/api/menu';
export default {
    name: 'LeftMenu',

    data() {
        return {
            menuData: {
                menulist: {},

            },
            hidden: true
        };
    },
    computed: {
    },
    created() {

    },
    mounted() {
        this.getMenuData();
        console.log(this.menuList, 'menu');
    },

    methods: {
        getMenuData() {
            getTestData().then(res => {
                this.menuData = res.data;
                console.log(this.menuData)
            })
        },
        showMenu(item) {
            this.hidden = !this.hidden
        }
    },
};
</script>

<style lang="less" scoped>
#leftMenu {
    height: 100%;
    width: 180px;
    box-shadow: 0px 0px 5px rgba(200, 200, 200, 0.5);

    >.MenuContianer {

        >li {
            width: 100%;
            line-height: 3rem;
            display: block;
        }
    }

    .route {
        padding-left: 3rem;
        display: block;
    }
}
</style>