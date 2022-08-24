import axios from 'axios'
import {getCookie} from './cookie'

let instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000
});

instance.interceptors.request.use(config => {
    let accessToken = getCookie('Token');
    if (accessToken && accessToken !== "") {
        config.headers = {
            'Authorization': getCookie('Token')
        }
    }
    return config
}, function (error) {
    Promise.reject(error)
})


export default instance;

