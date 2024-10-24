<template>
  <div class="settings-page">
    <v-app-bar flat color= #F3F4F6 class="mb-4">
      <v-btn
        icon
        @click="goBack"
        color="#8B5CF6"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container fluid class="settings-container pa-4">
      <v-row>
        <v-col cols="12">
          <h1 class="text-h4 mb-6">Accesibilidad</h1>
          <v-form @submit.prevent="updatePersonalInfo">
            <v-list>
              <v-list-item>
                <v-list-item-title>Tamaño de fuente</v-list-item-title>
                <v-slider
                  v-model="fontSize"
                  :min="12"
                  :max="24"
                  :step="2"
                  thumb-label
                  :aria-label="'Tamaño de fuente: ' + fontSize + ' píxeles'"
                ></v-slider>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Contraste alto</v-list-item-title>
                <v-switch v-model="highContrast" color="primary" :aria-label="'Activar contraste alto'"></v-switch>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Lector de pantalla</v-list-item-title>
                <v-switch v-model="screenReader" color="primary" :aria-label="'Activar lector de pantalla'"></v-switch>
              </v-list-item>
            </v-list>
            <v-btn type="submit" color="primary" class="mt-4">Actualizar información</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      color="#8B5CF6"
      elevation="24"
      rounded="pill"
    >
      Settings saved successfully!
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import {ref, computed, watch} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const snackbar = ref(false)
const fontSize = ref(16)
const highContrast = ref(false)
const screenReader = ref(false)


const updatePersonalInfo = () => {
  // Here you would implement the logic to update personal information
  console.log('Actualizando información personal...')
}


const goBack = () => {
  router.push('/profile')
}

</script>

<style scoped>
.settings-page {
  min-height: 100vh;
  background-color: #F3F4F6;
}

.settings-container {
  max-width: 1000px;
  margin: 0 auto;
}

.settings-card {
  border-radius: 12px;
  background-color: white;
  transition: all 0.3s ease;
}

.v-tab {
  text-transform: none;
  font-weight: 500;
}
</style>

