<template>
  <v-card class="my-card">
    <v-card-text>
      <h2 class="text-h6 font-weight-bold mb-4">Gastos recientes</h2>
      <v-row v-if="totalSpent > 0" justify="center" align="center" class="mb-4">
        <v-col cols="12" sm="6" class="text-center">
          <v-progress-circular
            :rotate="270"
            :size="100"
            :width="15"
            :model-value="spendingPercentage"
            color="primary"
          >
            {{ spendingPercentage }}%
          </v-progress-circular>
        </v-col>
        <v-col cols="12" sm="6" class="text-center text-sm-left">
          <div class="text-subtitle-2 mb-1">Total Gastado</div>
          <div class="text-h5 font-weight-bold">${{ totalSpent.toLocaleString() }}</div>
          <div class="text-caption">de ${{ budget.toLocaleString() }} presupuestados</div>
        </v-col>
      </v-row>
      <v-sheet v-else class="d-flex flex-column align-center justify-center" height="200">
        <v-icon size="64" color="grey lighten-1">mdi-chart-arc</v-icon>
        <p class="text-body-1 text-center mt-4">No hay datos de gastos disponibles</p>
        <p class="text-caption text-center">Los gastos se mostrarán aquí una vez que realices transacciones</p>
      </v-sheet>
      <v-row v-if="categories.length > 0">
        <v-col cols="12">
          <h3 class="text-subtitle-2 font-weight-medium mb-2">Categorías principales</h3>
          <v-chip
            v-for="category in categories"
            :key="category.name"
            :color="getCategoryColor(category.name)"
            class="mr-2 mb-2"
            label
            size="small"
          >
            <v-icon start :icon="getCategoryIcon(category.name)" size="16"></v-icon>
            {{ category.name }}
          </v-chip>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTransactionsStore } from "@/store/transactionStore"
import { useUsersStore } from "@/store/usersStore"

const transactionsStore = useTransactionsStore()
const usersStore = useUsersStore()

const transactions = computed(() => transactionsStore.getPaymentsByUserId)

const totalSpent = computed(() => {
  return transactions.value.reduce((total, transaction) => total + transaction.amount, 0)
})

const budget = ref(100000)

const spendingPercentage = computed(() => {
  if (budget.value === 0) return 0
  return Math.min(Math.round((totalSpent.value / budget.value) * 100), 100)
})

const categories = computed(() => {
  const categoryMap = new Map()
  transactions.value.forEach(transaction => {
    if (categoryMap.has(transaction.category)) {
      categoryMap.set(transaction.category, categoryMap.get(transaction.category) + transaction.amount)
    } else {
      categoryMap.set(transaction.category, transaction.amount)
    }
  })

  return Array.from(categoryMap, ([name, amount]) => ({name, amount}))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 4)
})

const getCategoryColor = (categoryName) => {
  const colors = {
    'Alquiler': 'blue',
    'Ropa': 'pink',
    'Servicios': 'green',
    'Comida': 'orange',
    'default': 'grey'
  }
  return colors[categoryName] || colors.default
}

const getCategoryIcon = (categoryName) => {
  const icons = {
    'Alquiler': 'mdi-home',
    'Ropa': 'mdi-hanger',
    'Servicios': 'mdi-lightning-bolt',
    'Comida': 'mdi-food',
    'default': 'mdi-cash'
  }
  return icons[categoryName] || icons.default
}
</script>

<style scoped>
.v-progress-circular {
  font-weight: bold;
}

.v-chip {
  font-weight: 500;
}
</style>
