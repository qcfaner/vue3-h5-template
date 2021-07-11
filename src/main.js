import { createApp } from 'vue'
import App from './App.vue'
import autoImport from "@/utils/autoImport"
import store from "@/store";
import router from "@/router";


const app = createApp(App);

async function Bootstrap(){
    autoImport(app);
    app.use(store).use(router).mount('#app');
}
Bootstrap();