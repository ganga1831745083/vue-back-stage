import { createApp, reactive } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import data from './mock/index'
import store from './store/index'


const app = createApp(App)
//使用路由
app.use(router)
app.use(store)
app.mount('#app')
