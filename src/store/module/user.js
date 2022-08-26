import { logOut } from "@/api/data";
import { deleteCookie } from "@/util/cookie";
import { totalRoutes } from "@/router"
const user = {
    state: {
        user: '',
        token: '',
        currentRole: '',
        addRouter: [],
        routers: totalRoutes,
        isAddRouter: false
    },
    getters: {
        user: state => state.username,
        token: state => state.token,
        currentRole: state => state.currentRole,
        addRouter: state => state.addRouter,
        routers: state => state.totalRoutes,
        isAddRouter: state => state.isAddRouter
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_CURRENTROLE: (state, role) => {
            state.currentRole = role;
        },
        SET_ISADDROUTER: (state, isAddRouter) => {
            state.isAddRouter = isAddRouter
        },
    },
    actions: {
        userLogOut({ commit,reqData }) {
            return new Promise((resolve, reject) => {
                logOut(reqData).then(res => {
                    commit('SET_TOKEN', '');
                    commit('SET_USER', '');
                    commit('SET_CURRENTROLE', '')
                    deleteCookie('Token');
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            })
        }
    }
}

export default user
