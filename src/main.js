import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import axios from 'axios'



createApp(App).use(router, axios).mount('#app')    
