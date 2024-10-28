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
        <h1 class="text-h4 mb-6 mt-5">Informacion Personal</h1>
      </v-card>
      <v-card fluid class="settings-container pa-4 w-100">
        <v-row>
          <v-col cols="12">
            <v-form>
              <v-text-field
                v-model="user.dni"
                label="DNI"
                :aria-label="'DNI'"
                readonly
              ></v-text-field>
              <v-text-field
                v-model="taxId"
                label="Identificación fiscal (cuit/cuil)"
                :aria-label="'Identificación fiscal'"
                readonly
              ></v-text-field>
              <v-text-field
                v-model="country"
                label="País de residencia"
                :aria-label="'País de residencia'"
                readonly
              ></v-text-field>
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
import {useUsersStore} from "@/store/usersStore";

const router = useRouter()

const snackbar = ref(false)
const userStore = useUsersStore();
const user = userStore.getUserById(userStore.userId);

const country = ref('Argentina')
const taxId = ref('ABCD1234567')



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


