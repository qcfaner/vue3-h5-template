/**
 * @description 全局公共 state
 */

import {getDeviceInfo} from "@/api/bridge-nativeApi";
import {setToken} from "@/utils/jsCookie";
import {getLoginInfo, login} from "@/api/app";

export default {
    state: () => ({
        token: "",
        isLogin: false,
        userInfo: null,
        routerTransName: "fade",
        routerDepth: ['/home'],
        deviceInfo: {}
    }),
    getters: {},
    mutations: {
        LOGIN_SUCCESS: (state, data) => {
            setToken(data.token);
            state.token = data.token;
            state.isLogin = true;
        },
        SET_USER_INFO: (state, data) => {
            state.userInfo = data;
        },
        initRouterDepth(state, initRouterData) {
            state.routerDepth = initRouterData
            state.routerTransName = state.routerDepth.length <= 1 ? "fade" : "page-go";
            console.log('routerDepth list 查看结果：', state.routerDepth)
        },
        setRouterDepth(state, { path, transition }) {
            if (state.routerDepth.includes(path)) {
                state.routerTransName = transition || "page-back";
                state.routerDepth.splice(state.routerDepth.indexOf(path) + 1, 1)
            } else {
                state.routerTransName = transition ||  "page-go";
                state.routerDepth.push(path)
            }
            console.log('执行了：动画 ----》 ', state.routerTransName)
            
            console.log('routerDepth list 查看结果：', state.routerDepth)
        },
        setDeviceInfo(state, data={}) {
            state.deviceInfo = JSON.parse(data);
        }
    },
    actions: {
        // 登录认证
        login({commit}, form) {
            return new Promise((resolve, reject) => {
                login(form).then(res => {
                    if (res.code === 20000) {
                        commit('LOGIN_SUCCESS', res.data);
                        resolve(res)
                    } else {
                        reject(new Error(res.message ?? '登录认证失败！'))
                    }
                })
            })
        },
    
        // 获取当前登录用户信息
        getLoginInfo({ commit }) {
            return new Promise((resolve, reject)=> {
                getLoginInfo().then(res => {
                    if(Number(res.code) === 20000) {
                        commit('SET_USER_INFO', res.data);
                        resolve(res);
                    } else {
                        reject(new Error(res.message || '获取用户信息失败！'))
                    }
                })
            })
        },
        setRouterDepth({commit}, data) {
            const [to, from] = data.route;
            const transition = data.transition;
            if (to.path === from.path) {
                commit('initRouterDepth', [from.path]);
            } else {
                commit('setRouterDepth', { path: to.path, transition });
            }
        },
        async getDeviceInfo({commit}) {
            const deviceInfo = await getDeviceInfo({name: "张三", age: 18});
            commit("setDeviceInfo", JSON.parse(deviceInfo))
        }
    }
}