<template>
  <v-card class="spending-goals-card">
    <v-card-text>
      <h2 class="text-h6 font-weight-bold mb-4">Metas de Gasto</h2>
      <v-list>
        <v-list-item v-for="(goal, index) in spendingGoals" :key="index" class="mb-3">
          <template v-slot:prepend>
            <v-icon :color="goal.color" size="24">{{ goal.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ goal.name }}</v-list-item-title>
          <v-list-item-subtitle>
            ${{ goal.current.toLocaleString() }} / ${{ goal.target.toLocaleString() }}
          </v-list-item-subtitle>
          <template v-slot:append>
            <v-progress-linear
              :model-value="(goal.current / goal.target) * 100"
              :color="goal.color"
              height="8"
              rounded
            ></v-progress-linear>
          </template>
        </v-list-item>
      </v-list>
      <v-btn color="primary" block class="mt-4" @click="addNewGoal">
        Agregar Nueva Meta
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'

const spendingGoals = ref([
  {name: 'Ahorros', current: 5000, target: 10000, color: 'success', icon: 'mdi-piggy-bank'},
  {name: 'Vacaciones', current: 2000, target: 5000, color: 'info', icon: 'mdi-airplane'},
  {name: 'Tecnología', current: 800, target: 1500, color: 'warning', icon: 'mdi-laptop'},
])

const addNewGoal = () => {
  // Implement logic to add a new spending goal
  console.log('Add new spending goal')
}
</script>

<style scoped>
.spending-goals-card {
  background-color: white;
  border-radius: 16px;
}
</style>
