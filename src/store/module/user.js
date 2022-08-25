import { logOut } from "@/api/data";
import { deleteCookie } from "@/util/cookie";

const user = {
    state: {
        username: '',
        token: ''
    },
    getters: {
        username: state => state.username,
        token: state => state.token
    },
    mutations: {
        SET_USERNAME: (state, username) => {
            state.username = username
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        }
    },
    actions: {
        userLogOut({ commit,reqData }) {
            return new Promise((resolve, reject) => {
                logOut(reqData).then(res => {
                    commit('SET_TOKEN', '');
                    commit('SET_USERNAME', '');
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
