<template>
  <v-card class="analytics-card">
    <v-card-text>
      <h2 class="text-h6 font-weight-bold mb-4">Analíticas</h2>
      <v-row justify="center" align="center" class="mb-6">
        <v-col cols="6">
          <v-progress-circular
            :rotate="270"
            :size="120"
            :width="15"
            :model-value="spendingPercentage"
            color="primary"
          >
            {{ spendingPercentage }}%
          </v-progress-circular>
        </v-col>
        <v-col cols="6">
          <div class="text-subtitle-1 mb-1">Total Gastado</div>
          <div class="text-h4 font-weight-bold">${{ totalSpent.toLocaleString() }}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3 class="text-subtitle-1 font-weight-medium mb-2">Categorías principales</h3>
          <v-chip
            v-for="category in categories"
            :key="category.name"
            :color="category.color"
            class="mr-2 mb-2"
            label
          >
            <v-icon start :icon="category.icon"></v-icon>
            {{ category.name }}
          </v-chip>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const totalSpent = ref(50000)
const budget = ref(100000)

const spendingPercentage = computed(() => Math.round((totalSpent.value / budget.value) * 100))

const categories = ref([
  { name: 'Comida', icon: 'mdi-food', color: 'pink' },
  { name: 'Transporte', icon: 'mdi-car', color: 'purple' },
  { name: 'Ocio', icon: 'mdi-gamepad-variant', color: 'blue' },
  { name: 'Servicios', icon: 'mdi-lightning-bolt', color: 'green' },
])
</script>

<style scoped>
.analytics-card {
  background-color: white;
  border-radius: 16px;
}
.v-progress-circular {
  font-weight: bold;
}
.v-chip {
  font-weight: 500;
}
</style>
