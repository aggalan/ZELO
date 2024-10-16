<template>
  <v-card class="mb-4">
    <v-card-title>
      <v-text-field
        v-model="search"
        prepend-icon="mdi-magnify"
        label="Busca tu siguiente inversión"
        single-line
        hide-details
        filled
        rounded
        dense
      ></v-text-field>
    </v-card-title>
    <v-list>
      <v-list-item v-for="(investment, index) in investments" :key="index">
        <v-list-item-avatar>
          <v-icon :color="investment.iconColor">{{ investment.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium">{{ investment.name }}</v-list-item-title>
          <v-list-item-subtitle>${{ investment.price }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn text small color="#8B5CF6" class="text-none">Más información</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
const investments = ref([
  { name: 'Ripple', price: '503.12', icon: 'mdi-currency-xrp', iconColor: '#23292F' },
  { name: 'Litecoin', price: '503.12', icon: 'mdi-litecoin', iconColor: '#345D9D' },
  { name: 'Amazon', price: '503.12', icon: 'mdi-amazon', iconColor: '#FF9900' },
  { name: 'Bitcoin', price: '503.12', icon: 'mdi-bitcoin', iconColor: '#F7931A' },
  { name: 'Ethereum', price: '503.12', icon: 'mdi-ethereum', iconColor: '#627EEA' },
])
</script>

<style scoped>
.v-list-item__avatar {
  background-color: #EDE9FE;
}
.v-list-item__avatar .v-icon {
  font-size: 24px;
}
</style>
