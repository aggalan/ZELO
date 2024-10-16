<template>
  <v-card>
    <v-card-title>Comida</v-card-title>
    <v-list two-line>
      <v-list-item v-for="(expense, index) in foodExpenses" :key="index">
        <v-list-item-avatar>
          <v-icon>mdi-food</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ expense.name }}</v-list-item-title>
          <v-list-item-subtitle>Gastaste ${{ expense.amount }}</v-list-item-subtitle>
          <v-btn text x-small color="#8B5CF6" class="pl-0">Detalles</v-btn>
        </v-list-item-content>
        <v-list-item-action class="text-right">
          <v-list-item-action-text>{{ expense.date }}</v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const foodExpenses = ref([
  { name: 'McDonalds', amount: '10,000', date: 'Hoy' },
  { name: 'Atuel Cafe', amount: '5,000', date: 'Ayer' },
])
</script>

<style scoped>
.v-list-item__avatar {
  background-color: #EDE9FE;
}
.v-btn {
  text-transform: none;
}
</style>
