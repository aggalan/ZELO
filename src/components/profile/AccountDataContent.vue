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
        <h1 class="text-h4 mb-6 mt-5">Datos de tu cuenta</h1>
      </v-card>
      <v-card fluid class="settings-container pa-4 w-100">
        <v-row>
          <v-col cols="12">
            <v-form @submit.prevent="updatePersonalInfo">
              <v-text-field
                v-model="user.name"
                label="Nombre"
                :aria-label="'Nombre'"
              ></v-text-field>
              <v-text-field
                v-model="user.surname"
                label="Apellido"
                :aria-label="'Apellido'"
              ></v-text-field>
              <v-text-field
                v-model="user.email"
                label="Correo Electrónico"
                :aria-label="'Correo Electrónico'"
              ></v-text-field>
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
      ¡Configuración guardada con éxito!
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useUsersStore} from '@/store/usersStore'

const router = useRouter()
const snackbar = ref(false)
const userStore = useUsersStore();
const user = userStore.getUserById(userStore.userId);

const updatePersonalInfo = () => {
  userStore.updateUser({
    name: user.value.name,
    surname: user.value.surname,
    email: user.value.email,
  });
  snackbar.value = true;
}

const goBack = () => {
  router.push('/profile')
}
</script>

<style scoped>
.settings-page {
  min-height: 100vh;
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
