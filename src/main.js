import { createApp } from 'vue'
// import Vue from 'vue'
import router from './routes'
import App from './App.vue'
// import store from './services/store'
// import auth from '@/services/Auth';
// import VueAxios from 'vue-axios'
// import Auth from './services/Auth';
// Vue.prototype.auth = Auth;
// axios.defaults.headers.common['X-Request-With'] = 'XMLHttpRequest'
// Vue.config.productionTip = false;

createApp(App).use(router).mount('#app')    
