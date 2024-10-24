<template>

      <v-container fluid class="pa-6">
        <h1 class="text-h4 mb-6">Transferencias</h1>
        <v-row>
          <v-col cols="12" md="8">
            <TransferForm @cancel="goToTransference"/>
          </v-col>
          <v-col cols="12" md="4">
            <ContactsList />
          </v-col>
        </v-row>
      </v-container>
</template>

<script setup>

import TransferForm from './TransferForm.vue'
import ContactsList from './ContactsList.vue'
import router from '@/router/router'

const goToTransference = () => {
  router.push({path: '/transference'});
}
</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
  background-color: #f3f4f6;
}
</style>
