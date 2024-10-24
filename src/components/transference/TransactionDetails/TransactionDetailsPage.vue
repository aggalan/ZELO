<template>
      <v-container fluid class="pa-6">
        <v-row>
          <v-col cols="12" md="8">
            <TransactionDetails :transaction="selectedTransaction" />
          </v-col>
          <v-col cols="12" md="4">
            <RelatedTransactions :transactions="relatedTransactions" />
          </v-col>
        </v-row>
      </v-container>

</template>

<script setup>
import { ref } from 'vue'

import TransactionDetails from './TransactionDetails.vue'
import RelatedTransactions from './RelatedTransactions.vue'

const selectedTransaction = ref({
  id: '1234567890',
  type: 'incoming',
  amount: 1500.00,
  date: '2023-05-15T14:30:00',
  status: 'completed',
  sender: {
    name: 'Juan Perez',
    account: '1234-5678-9012-3456'
  },
  recipient: {
    name: 'Maria Rodriguez',
    account: '9876-5432-1098-7654'
  },
  description: 'Pago de servicios',
  category: 'Servicios',
})

const relatedTransactions = ref([
  {
    id: '0987654321',
    type: 'outgoing',
    amount: 500.00,
    date: '2023-05-10T10:15:00',
    status: 'completed',
    recipient: 'Juan Perez',
  },
  {
    id: '1357924680',
    type: 'incoming',
    amount: 2000.00,
    date: '2023-05-05T09:00:00',
    status: 'completed',
    sender: 'Juan Perez',
  },
])
</script>

<style>
</style>
