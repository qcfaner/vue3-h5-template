import { createApp } from 'vue'
import App from './App.vue'
import autoImport from "@/utils/autoImport"
import store from "@/store";
import router from "@/router";


const app = createApp(App);

async function Bootstrap(){
    // 注册 h5 api
    require("@/api/bridge-h5Api");
    
    autoImport(app);
    
    await store.dispatch('appStore/login', {"username":"admin","password":"123456"});
    await store.dispatch('appStore/getLoginInfo');
    
    app.use(store).use(router).mount('#app');
}
Bootstrap();