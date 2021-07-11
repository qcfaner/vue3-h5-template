/**
 * @description 全局公共 state
 */

export default {
    state: () => ({
        routerTransName: "fade",
        routerDepth: ['/']
    }),
    getters: {},
    mutations: {
        initRouterDepth(state, initRouterData) {
            state.routerDepth = initRouterData
            state.routerTransName = state.routerDepth.length <= 1 ?"fade": "page-go";
            console.log('routerDepth list 查看结果：', state.routerDepth)
        },
        setRouterDepth(state, path) {
            console.log('执行了：++++++++++++++ setRouterDepth', path)
            if(state.routerDepth.includes(path)) {
                state.routerTransName = "page-back";
                state.routerDepth.splice(state.routerDepth.indexOf(path)+1,1 )
            } else {
                state.routerTransName = "page-go";
                state.routerDepth.push(path)
            }
    
            console.log('routerDepth list 查看结果：', state.routerDepth)
        },
    },
    actions: {
        setRouterDepth({commit}, [to, from]) {
            if(to.path === from.path) {
                commit('initRouterDepth', [from.path]);
            } else {
                commit('setRouterDepth', to.path);
            }
        }
    }
}