<template>
  <v-card class="elevation-2">
    <v-card-title class="pa-4">Rendimientos</v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="performanceData"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item.yield="{ item }">
          <v-chip
            :color="item.yield > 0 ? 'success' : 'error'"
            :text-color="item.yield > 0 ? 'white' : 'white'"
            size="small"
          >
            {{ item.yield }}%
          </v-chip>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useInvestmentsStore } from '@/store/investmentStore'

const investmentsStore = useInvestmentsStore()
const currentInvestment = computed(() => investmentsStore.currentInvestment)

const headers = [
  { title: 'Fecha', align: 'start', key: 'date' },
  { title: 'Monto', align: 'end', key: 'amount' },
  { title: 'Rendimiento', align: 'end', key: 'yield' },
]

const performanceData = computed(() => {
  if (!currentInvestment.value || !currentInvestment.value.chartOption) {
    return []
  }
  const dates = currentInvestment.value.chartOption.xAxis.data
  const values = currentInvestment.value.chartOption.series[0].data
  return dates.map((date, index) => ({
    date,
    amount: `$${values[index].toLocaleString()}`,
    yield: ((values[index] - values[index - 1]) / values[index - 1] * 100).toFixed(2) || 0,
  }))
})
</script>
