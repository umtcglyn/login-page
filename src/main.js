import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import "@/assets/style.css"
import store from './store';
import { appAxios } from './utils/appAxios';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
