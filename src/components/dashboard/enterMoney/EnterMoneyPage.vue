<template>
  <v-container fluid class="bg-white pa-4">
    <h1 class="text-h4 mb-6 mt-6 ml-2">Ingresar dinero</h1>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" md="8" sm="7">
        <BankTransferSection class="ma-2 mb-5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import BankTransferSection from './BankTransferSection.vue'

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
