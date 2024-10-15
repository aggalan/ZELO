<template>
  <v-card class="mt-4 transactions-card">
    <v-card-title class="text-grey-darken-3">Movimientos</v-card-title>
    <v-list two-line class = "transactions-card">
      <v-list-item v-for="(transaction, i) in transactions" :key="i">
        <v-row class="d-flex flex-row w-100 justify-end align-center pa-3" cols="12">
          <v-col cols="12" md="2">
            <v-icon v-if="transaction.icon" :color="transaction.color">{{ transaction.icon }}</v-icon>
            <v-img v-else :src="transaction.image" alt="Transaction"></v-img>
          </v-col>
          <v-col md="5">
            <v-list-item-title class="text-black">{{ transaction.name }}</v-list-item-title>
            <v-list-item-subtitle class="text-grey">{{ transaction.description }}</v-list-item-subtitle>
            <router-link to="/Dashboard" class="link-text">
              Detalles
            </router-link>
          </v-col>
        <v-col md="5" class="d-flex justify-end">
          <v-list-item-action class="text-grey ">{{ transaction.time }}</v-list-item-action>
        </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const transactions = ref([
  { name: 'Jose', description: 'Te transfirió $10.000', time: 'Ahora', icon: 'mdi-account', color: '#8B5CF6' },
  { name: 'Open 25', description: 'Pagaste $3000', time: '15m', image: '/placeholder.svg?height=40&width=40', icon:'mdi-account' },
  { name: 'Miguel', description: 'Enviaste $3.000', time: '6h', icon: 'mdi-account', color: '#8B5CF6' },
])
</script>

<style scoped>
.transactions-card {
  background: #fAfBfC;
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
.link-text {
  color: #8B5CF6; /* Cambia el color del texto */
  text-decoration: underline; /* Subraya el texto */
  cursor: pointer; /* Cambia el cursor al pasar sobre el texto */
}
</style>
