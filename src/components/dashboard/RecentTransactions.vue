<template>
  <v-card class="mt-4 transactions-card">
    <v-card-title class="text-grey-darken-3">Movimientos</v-card-title>
    <v-list two-line class = "transactions-card">
      <v-list-item v-for="(transaction, i) in transactions" :key="i">
        <v-list-item-avatar>
          <v-icon v-if="transaction.icon" :color="transaction.color">{{ transaction.icon }}</v-icon>
          <v-img v-else :src="transaction.image" alt="Transaction"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-black">{{ transaction.name }}</v-list-item-title>
          <v-list-item-subtitle class="text-grey">{{ transaction.description }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text class="text-grey">{{ transaction.time }}</v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const transactions = ref([
  { name: 'Jose', description: 'Te transfirió $10.000', time: 'Ahora', icon: 'mdi-account', color: '#8B5CF6' },
  { name: 'Open 25', description: 'Pagaste $3000', time: '15m', image: '/placeholder.svg?height=40&width=40' },
  { name: 'Miguel', description: 'Enviaste $3.000', time: '6h', icon: 'mdi-account', color: '#8B5CF6' },
])
</script>

<style scoped>
.transactions-card {
  background: #f3f4f6;
  border-radius: 12px;
}
.v-list-item__action-text {
  color: rgba(0, 0, 0, 0.6);
}
.v-list-item__avatar {
  background-color: #EDE9FE;
}
.v-list-item__avatar .v-icon {
  font-size: 20px;
}
</style>
