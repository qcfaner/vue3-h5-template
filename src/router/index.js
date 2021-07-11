import * as VueRouter from "vue-router";
import store from "@/store";

const Home = ()=> import("@/views/home");
const Demo = ()=> import("@/views/demo");
const NotFound = ()=> import("@/views/notFound/404");


const routes = [
    { path: '/', name: "Home", component: Home, meta: { title: "首页",  verifyAuth: true} },
    { path: '/demo', name: "Demo", component: Demo, meta: { title: "示例",  verifyAuth: true} },
    { path: '/404', name: "NotFound", component: NotFound, meta: { title: "404",  verifyAuth: true} },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next)=> {
    // 判断是否需要权限校验
    // if(to.meta.verifyAuth){
    //     console.log('需要权限校验！')
    // }
    document.title = to.meta.title? `${ to.meta.title } - 深i写`: '深i写';
    next();
})

router.afterEach((to, from) => {
    store.dispatch('appStore/setRouterDepth', [to, from]);
    // // 初始化：页面刷新
    // if(from.path === '/') {
    //     console.log(123)
    // }
    // store.state.appStore.routerDepth.push('123');
    // console.log('----------> ',store.state.appStore.routerDepth)
    
    
    // if (!(from.path === '/' && from.name === null)) {
    //     // setLocalRoute(to, from)
    // }
});

export default router;