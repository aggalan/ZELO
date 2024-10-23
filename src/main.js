// /**
//  * main.js
//  *
//  * Bootstraps Vuetify and other plugins then mounts the App`
//  */
// // Plugins
//
// import { registerPlugins } from '@/plugins'
//
// // Components
// import App from './App.vue'
//
// // Composables
// import { createApp } from 'vue'
//
// const app = createApp(App)
//
// registerPlugins(app)
//
// app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import './assets/globals.css'
import router from './router/router'

const vuetify = createVuetify({
  components,
  directives,
})
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount('#app')

