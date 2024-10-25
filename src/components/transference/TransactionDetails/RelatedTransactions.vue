<template>
  <v-card class="rounded-lg elevation-3 mt-5">
    <v-card-title class="text-h6 pa-4 bg-secondary white--text">Transacciones Relacionadas</v-card-title>
    <v-list two-line>
      <v-list-item v-for="transaction in transactions" :key="transaction.id" class="py-3">
        <v-list-item-avatar>
          <v-icon :color="transaction.type === 'incoming' ? 'success' : 'error'" size="32">
            {{ transaction.type === 'incoming' ? 'mdi-arrow-down-circle' : 'mdi-arrow-up-circle' }}
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium">
            {{ transaction.type === 'incoming' ? transaction.sender : transaction.recipient }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ formatDate(transaction.date) }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text :class="transaction.type === 'incoming' ? 'success--text' : 'error--text'">
            <span class="text-h6 font-weight-bold">{{ transaction.type === 'incoming' ? '+' : '-' }}${{ transaction.amount.toFixed(2) }}</span>
          </v-list-item-action-text>
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
