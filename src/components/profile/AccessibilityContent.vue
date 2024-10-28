<template>
  <v-container fluid class="settings-page">
    <v-container color="#Ffffff" fluid class="d-flex flex-column">
      <v-btn
        icon
        @click="goBack"
      >
        <v-icon color="#8B5CF6">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-container>

    <v-container class="d-flex flex-column align-center mt-0">
      <v-card class="v-car-align w-100">
        <h1 class="text-h4 mb-6 mt-5">Accesibilidad</h1>
      </v-card>
      <v-card fluid class="settings-container pa-4 w-100">
        <v-row>
          <v-col cols="12">
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
      </v-card>
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
  </v-container>
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
  console.log('Actualizando información personal...')
}


const goBack = () => {
  router.push('/profile')
}

</script>

<style scoped>
.settings-page {
  min-height: 100%;
  background-color: #ffffff;
}

.settings-container {
  max-width: 900px;
  margin: 0 auto;
}

.v-car-align {
  max-width: 900px;
  box-shadow: none;
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

