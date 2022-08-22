<template>
    <div id="layoutContainer">
        <TopHeader />
        <div id="center">
            <LeftMenu />
            <div class="center-right">
                <router-view class="route"></router-view>
                <FooterMenu />
            </div>
        </div>
    </div>
</template>

<script>
import TopHeader from './TopHeader.vue';
import LeftMenu from './LeftMenu.vue';
import FooterMenu from './FooterMenu.vue';

export default {
    name: "Layout",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { TopHeader, LeftMenu, FooterMenu }
};
</script>

<style lang="less" scoped>
#layoutContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
}

#center {
    display: flex;
    flex-direction: row;
    margin-top: var(--nav-head);
    height: 100%;

    >.route {
        // width: 100%;
    }

    >.center-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
}
</style>