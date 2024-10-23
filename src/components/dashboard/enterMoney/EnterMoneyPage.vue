<template>
      <v-container fluid class="pa-6">
        <h1 class="text-h4 mb-6">Ingresar Dinero</h1>
        <v-row>
          <v-col cols="12" md="8">
            <BankTransferSection class="ma-2 mb-5" />
            <PaymentLinkSection class="ma-2"/>
          </v-col>
          <v-col cols="12" md="4">
            <RecentTransactions />
          </v-col>
        </v-row>
      </v-container>
</template>

<script setup>
import { defineComponent } from 'vue'

import BankTransferSection from './BankTransferSection.vue'
import PaymentLinkSection from './PaymentLinkSection.vue'
import RecentTransactions from '../RecentTransactions.vue'

defineComponent({
  name: 'EnterMoneyPage',
})
</script>

<style>
</style>
