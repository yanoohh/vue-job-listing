import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css' //Prime Icons
import App from './App.vue'
import router from '@/router'
// Toast
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(Toast)

app.mount("#app")