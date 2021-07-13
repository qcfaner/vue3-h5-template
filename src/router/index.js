import * as VueRouter from "vue-router";
import store from "@/store";

const HomeLayout = () => import("@/layout/homeLayout");
const Home = () => import("@/views/home");
const homeSearch = () => import("@/views/home/search");
const mine = () => import("@/views/mine");
const discovery = () => import("@/views/discovery");
const Course = () => import('@/views/course');
const allCourse = () => import('@/views/course/allCourse');
const addGrade = () => import('@/views/course/addGrade');
const createCourse = () => import('@/views/course/createCourse');
const completStatus = () => import('@/views/course/completStatus');
const courseDetails = () => import('@/views/course/courseDetails');
const free = () => import('@/views/free');
const addPlan = () => import('@/views/free/addPlan');


const Demo = () => import("@/views/demo");
const NotFound = () => import("@/views/notFound/404");


const routes = [
    {
        path: '/',
        redirect: '/home',
        component: HomeLayout,
        children: [
            {
                path: "/home",
                component: Home,
                meta: {title: "首页", verifyAuth: true}
            },
            {
                path: "/discovery",
                component: discovery,
                meta: {title: "发现", verifyAuth: true}
            },
            {
                path: "/mine",
                component: mine,
                meta: {title: "首页", verifyAuth: true}
            }
        ]
    },
    {path: "/homeSearch", component: homeSearch, meta: {title: "首页-搜索"}},
    {path: '/course', name: "course", component: Course, meta: {title: "智慧课件", verifyAuth: true}},
    {path: '/course/allCourse', name: "allCourse", component: allCourse, meta: {title: "全部课件"}},
    {path: '/course/addGrade', name: "addGrade", component: addGrade, meta: {title: "选择班级"}},
    {path: '/course/createCourse', name: "createCourse", component: createCourse, meta: {title: "创建课件"}},
    {path: '/course/completStatus', name: "completStatus", component: completStatus, meta: {title: "班级作业完成情况"}},
    {path: '/course/courseDetails', name: "courseDetails", component: courseDetails, meta: {title: "课件详情"}},
    {path: '/free', name: "free", component: free, meta: {title: "随心写", verifyAuth: true}},
    {path: '/free/addPlan', name: "addPlan", component: addPlan, meta: {title: "创建计划"}},
    {path: '/demo', name: "Demo", component: Demo, meta: {title: "示例", verifyAuth: true}},
    {path: '/404', name: "NotFound", component: NotFound, meta: {title: "404", verifyAuth: true}},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // 判断是否需要权限校验
    // if(to.meta.verifyAuth){
    //     console.log('需要权限校验！')
    // }
    document.title = to.meta.title ? `${to.meta.title} - 深i写` : '深i写';
    next();
})

router.afterEach((to, from) => {
    store.dispatch('appStore/setRouterDepth', {route: [to, from], transition: to?.meta?.transition});
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