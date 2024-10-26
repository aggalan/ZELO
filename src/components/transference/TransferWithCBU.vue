<template>
  <v-container fluid class="pa-6 w-100 ">
    <v-container color="#Ffffff" fluid class="d-flex flex-column mb-10">
      <v-btn
        icon
        @click="goBack"
      >
        <v-icon color="#8B5CF6">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-container>


    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="8" md="8" sm="12">
        <h1 class="text-h4 mb-6">Transferencias</h1>
        <TransferForm :cbu-alias="cbu" :amount="amount" class="transfer-form" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {onBeforeRouteUpdate, useRoute, useRouter} from 'vue-router'
import TransferForm from './TransferForm.vue'
import ContactsList from './ContactsList.vue'

const router = useRouter();

const goBack = () => {
  router.back()
}

const route = useRoute()

const cbu = route.query.cbu
const amount = route.query.amount



</script>

<style scoped>
.v-application {
  font-family: 'Roboto', sans-serif;
  background-color: #f3f4f6;
}

.transfer-form {
  max-width: 100%;
  margin: 0 auto;
}

.contacts-list {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

@media (max-width: 959px) {
  .contacts-list {
    max-height: 400px;
  }
}
</style>
