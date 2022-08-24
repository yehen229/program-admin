import Vue from 'vue'
import Vuex from 'vuex'

import money from './module/money.js'
import user from './module/user.js'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        money,
        user
    }
})
