import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";
import store from './Store';
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
