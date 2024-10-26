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
              <v-alert
                v-if="successMessage"
                type="success"
                dismissible
                class="mb-4"
              >
                {{ successMessage }}
              </v-alert>
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
              <v-text-field
                v-model="user.alias"
                label="Alias"
                :aria-label="'Alias'"
                type="Alias"
                :error-messages="aliasError"
              ></v-text-field>
              <v-btn type="submit" color="primary" class="mt-4">Actualizar información</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUsersStore } from '@/store/usersStore'

const router = useRouter()
const snackbar = ref(false)
const aliasError = ref('')
const successMessage = ref('')
const userStore = useUsersStore();
const user = ref({
  name: '',
  surname: '',
  email: '',
  alias: ''
});

onMounted(() => {
  const fetchedUser = userStore.getUserById(userStore.userId);
  if (fetchedUser) {
    user.value = fetchedUser;
  }
});

const validateInput = (input) => {
  const regex = /^(?:\w+)(?:\.\w+){0,2}$/;
  return regex.test(input);
};

const updatePersonalInfo = () => {
  if (!validateInput(user.value.alias)) {
    aliasError.value = 'Alias inválido. Debe ser palabra, palabra.palabra2 o palabra.palabra2.palabra3';
    return;
  }
  aliasError.value = '';
  userStore.updateUser({
    name: user.value.name,
    surname: user.value.surname,
    email: user.value.email,
    alias: user.value.alias,
  });
  successMessage.value = 'Información actualizada con éxito';
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
