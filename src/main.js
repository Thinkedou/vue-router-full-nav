import './assets/css/grid-base.css'
import './assets/css/home.css'
import './assets/css/testimonials.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
