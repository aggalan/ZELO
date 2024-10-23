<template>
  <v-card class="my-card" elevation="2">
    <v-card-title class="text-h5">Transacciones Recientes</v-card-title>
    <v-list two-line>
      <v-list-item v-for="(transaction, index) in recentTransactions" :key="index">
        <v-list-item-avatar>
          <v-icon :color="transaction.type === 'incoming' ? 'green' : 'red'">
            {{ transaction.type === 'incoming' ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ transaction.description }}</v-list-item-title>
          <v-list-item-subtitle>{{ transaction.date }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text :class="transaction.type === 'incoming' ? 'green--text' : 'red--text'">
            {{ transaction.type === 'incoming' ? '+' : '-' }}${{ transaction.amount }}
          </v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-btn text color="#8B5CF6" block>
        Ver todas las transacciones
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const recentTransactions = ref([
  { type: 'incoming', description: 'Transferencia de Juan', amount: 500, date: '2023-05-15' },
  { type: 'outgoing', description: 'Pago de servicios', amount: 100, date: '2023-05-14' },
  { type: 'incoming', description: 'Depósito en efectivo', amount: 1000, date: '2023-05-13' },
  { type: 'incoming', description: 'Link de pago', amount: 250, date: '2023-05-12' },
  { type: 'outgoing', description: 'Transferencia a María', amount: 300, date: '2023-05-11' },
])
</script>
