import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import CascadeSelect from 'primevue/cascadeselect'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

// Register PrimeVue components globally
app.component('CascadeSelect', CascadeSelect)
app.component('Dialog', Dialog)
app.component('Button', Button)

app.mount('#app')
