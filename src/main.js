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
    defaultTheme: 'light', // Define el tema por defecto
    themes: {
      light: {
        dark: false, // Define si el tema es oscuro o claro
        colors: {
          primary: '#8B5CF6', // Color primario (violeta)
          secondary: '#03DAC6', // Color secundario (verde menta)
          background: '#FFFFFF', // Fondo general (gris claro)
          surface: '#F3F4F6', // Color de superficie (blanco)
          error: '#B00020', // Color de error (rojo)
          textPrimary: '#000000', // Texto principal (negro)
          textSecondary: '#757575', // Texto secundario (gris oscuro)
          buttonDefault: '#E0E0E0', // Botón por defecto (gris claro)
          buttonHover: '#C0C0C0', // Botón al hacer hover (gris intermedio)
          selectedButtonBackground: '#D3D3D3', // Botón seleccionado (gris oscuro)
          selectedButtonText: '#6200EE', // Texto del botón seleccionado (violeta)
        },
      },
    },
  },
})

createApp(App).use(router).use(vuetify).mount('#app')
