<template>
  <v-card class="investment-analytics-card my-card">
    <v-card-text>
      <div class="d-flex justify-space-between align-center mb-4">
        <h2 class="text-h6 font-weight-bold">Análisis de Inversiones</h2>
        <v-select
          v-if="investmentOptions.length > 0"
          v-model="selectedInvestment"
          :items="investmentOptions"
          item-title="name"
          item-value="id"
          density="compact"
          hide-details
          class="investment-select"
        ></v-select>
      </div>
      <div v-if="investmentOptions.length > 0" class="chart-container">
        <v-chart class="chart" :option="currentChartOption" autoresize />
      </div>
      <v-sheet v-else class="d-flex flex-column align-center justify-center" height="200">
        <v-icon size="64" color="grey lighten-1">mdi-chart-line</v-icon>
        <p class="text-body-1 text-center mt-4">No hay inversiones disponibles</p>
        <p class="text-caption text-center">Las inversiones se mostrarán aquí una vez que realices alguna</p>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useInvestmentsStore } from '@/store/investmentStore'
import { useUsersStore } from '@/store/usersStore'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'

use([CanvasRenderer, LineChart, GridComponent, TooltipComponent])

const investmentsStore = useInvestmentsStore()
const userStore = useUsersStore()

const userInvestments = investmentsStore.getInvestmentsByUserId(userStore.userId)
const investmentOptions = computed(() => userInvestments.value.map(inv => ({id: inv.id, name: inv.name})))

const selectedInvestment = ref(userInvestments.value[0]?.id)

const currentInvestment = computed(() =>
  userInvestments.value.find(inv => inv.id === selectedInvestment.value) || userInvestments.value[0]
)

const currentChartOption = computed(() => currentInvestment.value?.chartOption || {})

watch(selectedInvestment, (newValue) => {
  if (newValue) {
    investmentsStore.setCurrentInvestment(newValue)
  }
})
</script>

<style scoped>
.investment-analytics-card {
  height: 320px;
}

.chart-container {
  height: 200px;
}

.chart {
  height: 230px;
  width: 100%;
}

.investment-select {
  max-width: 200px;
}
</style>
