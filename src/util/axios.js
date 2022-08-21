import axios from 'axios'

let instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000
});

export default instance;

