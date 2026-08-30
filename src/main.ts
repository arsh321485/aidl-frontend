import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
  console.error('[App] Vue errorHandler caught:', err, 'info:', info)
}

app.use(createPinia())
app.use(router)

router.onError((err) => {
  console.error('[Router] navigation error:', err)
})

app.mount('#app')
console.log('[App] mounted #app')
