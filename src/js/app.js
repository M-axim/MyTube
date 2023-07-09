import bootstrap from './bootstrap'
import { createApp } from 'vue';

const app = createApp({});

import header from './components/Header.vue';
import content from './components/Content.vue';

app.component('v-header', header).default;
app.component('v-content', content).default;

app.mount('#app');
