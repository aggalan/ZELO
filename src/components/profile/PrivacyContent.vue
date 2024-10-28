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
        <h1 class="text-h4 mb-6 mt-5">Privacidad</h1>
      </v-card>
      <v-card class="settings-container pa-4">
        <v-row>
          <v-col cols="12">
            <v-form @submit.prevent="updatePersonalInfo">
              <v-list>
                <v-list-item>
                  <v-list-item-title>Perfil público</v-list-item-title>
                  <v-switch v-model="publicProfile" color="primary" :aria-label="'Hacer perfil público'"></v-switch>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Compartir datos de uso</v-list-item-title>
                  <v-switch v-model="shareUsageData" color="primary" :aria-label="'Compartir datos de uso'"></v-switch>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Recibir notificaciones</v-list-item-title>
                  <v-switch v-model="receiveNotifications" color="primary" :aria-label="'Recibir notificaciones'"></v-switch>
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
const publicProfile = ref(false)
const shareUsageData = ref(true)
const receiveNotifications = ref(true)



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
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.settings-card {
  border-radius: 12px;
  background-color: white;
  transition: all 0.3s ease;
}

.v-car-align {
  max-width: 900px;
  box-shadow: none;
}

.v-tab {
  text-transform: none;
  font-weight: 500;
}
</style>



