import './bootstrap';
import { createApp } from 'vue';
import router from "./router"

// Import vue-components
import header from './components/Header.vue';

const app = createApp({});

app.component('v-header', header).default;

app.use(router);
app.mount('#app');
