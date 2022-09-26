import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import axios from 'axios'

axios.defaults.headers.common['X-Request-With'] = 'XMLHttpRequest'

createApp(App).use(router, axios).mount('#app')    
