<template>
  <v-card class="rounded-lg elevation-3 mt-5">
    <v-card-title class="text-h6 pa-4 bg-primary white--text">Transacciones Relacionadas</v-card-title>
    <v-list two-line>
      <v-list-item v-for="transaction in transactions" :key="transaction.id" class="py-3">
        <v-list-item-avatar>
          <v-icon :color="transaction.type === 'ingreso' ? 'success' : 'error'" size="32">
            {{ transaction.type === 'ingreso' ? 'mdi-arrow-down-circle' : 'mdi-arrow-up-circle' }}
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium">
            {{ transaction.to }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ transaction.time }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text :class="transaction.type === 'ingreso' ? 'success--text' : 'error--text'">
            <span class="text-h6 font-weight-bold">{{ transaction.type === 'ingreso' ? '+' : '-' }}${{ transaction.amount.toFixed(2) }}</span>
          </v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>

const props = defineProps({
  transactions: {
    type: Array,
    required: true
  }
})
</script>
