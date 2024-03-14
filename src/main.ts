import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
const app = createApp(App)

app.use(router)
app.use(ElementPlus, { size: 'default', zIndex: 3000 })

app.mount('#app')
