<template>
  <v-card class="my-card">
    <v-card-title class="text-h6">Transacciones Relacionadas</v-card-title>
    <v-list two-line class="list-body">
      <v-list-item v-for="transaction in transactions" :key="transaction.id">
        <v-list-item>
          <v-icon :color="transaction.type === 'incoming' ? 'success' : 'error'">
            {{ transaction.type === 'incoming' ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
          </v-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            {{ transaction.type === 'incoming' ? transaction.sender : transaction.recipient }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ formatDate(transaction.date) }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item-action>
          <v-list-item-action :class="transaction.type === 'incoming' ? 'success--text' : 'error--text'">
            {{ transaction.type === 'incoming' ? '+' : '-' }}${{ transaction.amount.toFixed(2) }}
          </v-list-item-action>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  transactions: {
    type: Array,
    required: true
  }
})

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('es-ES', options)
}
</script>
