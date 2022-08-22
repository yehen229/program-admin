<template>
    <footer id="footerMenu">
        <p>Admin</p>
        <p>作者：李佳龙</p>
    </footer>
</template>

<script>
export default {
    name: 'FooterMenu',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
#footerMenu {
    width: 100%;
    min-width: 800px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 2px 5px lightgray;

    >p {
        margin-right: 3rem;
        color: lightgray;
    }
}
</style>