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
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import router from './router/router'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

createApp(App).use(router).use(vuetify).mount('#app')
