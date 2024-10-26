<template>
  <v-container fluid class="bg-white pa-4">
    <v-container color="#Ffffff" fluid class="d-flex flex-column">
      <v-btn
        icon
        @click="goBack"
      >
        <v-icon color="#8B5CF6">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-container>

    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" md="8" sm="7">
        <h1 class="text-h4 mb-6 mt-4 ml-2">Ingresar dinero</h1>
        <BankTransferSection class="ma-2 mb-5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import { useRouter } from 'vue-router';
import BankTransferSection from './BankTransferSection.vue';

const router = useRouter();

const goBack = () => {
  router.push('/dashboard');
}

</script>

<style>
.d-flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}
</style>
