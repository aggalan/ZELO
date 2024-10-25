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
          <h1 class="text-h4 mb-6">Datos de tu cuenta</h1>
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
  </div>
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
