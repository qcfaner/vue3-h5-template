import axios from 'axios'
import NProgress from 'nprogress'
// import router from "@/router"
// import store from "@/store";
//
// import {useRoute} from "vue-router";
import { getToken } from "@/utils/jsCookie";
// import { addPending, removePending } from "@/utils/requestCancel"

import 'nprogress/nprogress.css'

NProgress.configure({easing: 'ease', speed: 500, showSpinner: false})


// 不需要认证
const whiteList = ['/login']
// export const pendingRequests = new Map()

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/api-dev' : '/api-prod',
    // baseURL:'/',// process.env.NODE_ENV === 'development'? '/api-lwj': '/prod-api',‘’
    headers: {'Content-Type': 'application/json;charset=UTF-8'},
    timeout: 25 * 1000
})

/**
 * @description 请求拦截器
 */
instance.interceptors.request.use(
    (config) => {
        config.params = config.params && Object.fromEntries(Object.entries(config.params).filter((o) => typeof o[1] === 'number' && !isNaN(o[1]) ? true : o[1]));
        
        NProgress.start()
        
        // removePending(config);
        // addPending(config);
        if(!whiteList.includes(config.url) && getToken()) {
            // debugger
            config.headers['Authorization'] = getToken();
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

/**
 * @description 响应拦截器
 */
instance.interceptors.response.use(
    (response) => {
        NProgress.done();
        
        let {data, code} = response
        // let {data, code, config, headers} = response
        // console.log(config, headers);
        // removePending(config);、
        
        switch (code || data.code) {
            case 40003:
            case 40010:
            case 40015:
                // store.dispatch("user/clearUserInfo");
                break;
            default:
                break
        }
        return data
    }, (error) => {
        NProgress.done();
        
        if (axios.isCancel(error)) {
            return new Promise(() => {
            })
        } else {
            const {response} = error;
            
            if (response?.status === 403) {
                // store.dispatch("user/clearUserInfo").then(() => {
                //     const route = useRoute();
                //     router.push(`/login?redirect=${route.path}`)
                // })
            }
            
            return Promise.reject(error)
        }
    }
)

export default instance