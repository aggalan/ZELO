<template>
  <v-card class="my-card">
    <v-card-title class="d-flex justify-space-between align-center pa-4">
      <span class="text-h6 font-weight-bold">Evolución</span>
    </v-card-title>
    <v-card-text>
      <v-row v-if="currentInvestment">
        <v-sheet class="pa-4 rounded mt-16">
          <v-sparkline
            :value="currentInvestment.trend"
            :gradient="['#8B5CF6', '#8B5CF6']"
            :smooth="10"
            stroke-linecap="round"
            line-width="3"
            auto-draw
            height="100"
          ></v-sparkline>
        </v-sheet>
      </v-row>
      <v-row v-if="currentInvestment" class="negative-margin">
        <v-col cols="12">
          <v-chart class="chart" :option="chartOption" autoresize />
        </v-col>
      </v-row>
      <v-sheet v-else class="d-flex flex-column align-center justify-center pa-6">
        <v-icon icon="mdi-chart-line" size="64" color="grey" class="mb-4"></v-icon>
        <p v-if="!useInvestmentsStore().hasInvestments" class="text-h6 text-center">No hay datos de inversión disponibles</p>
        <p v-else class="text-h6 text-center">Seleccione una inversión para ver su evolución</p>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {computed} from 'vue'
import {use} from 'echarts/core'
import {CanvasRenderer} from 'echarts/renderers'
import {LineChart} from 'echarts/charts'
import {GridComponent, TooltipComponent, LegendComponent} from 'echarts/components'
import VChart from 'vue-echarts'
import {useInvestmentsStore} from '@/store/investmentStore'

use([CanvasRenderer, LineChart, GridComponent, TooltipComponent, LegendComponent])

const investmentStore = useInvestmentsStore()
const currentInvestment = computed(() => investmentStore.currentInvestment)

const chartOption = computed(() => {
  if (!currentInvestment.value || !currentInvestment.value.chartOption) {
    return {}
  }
  return currentInvestment.value.chartOption
})

const calculateReturn = (trend) => {
  if (trend.length < 2) return 0
  const firstValue = trend[0]
  const lastValue = trend[trend.length - 1]
  return ((lastValue - firstValue) / firstValue * 100).toFixed(2)
}

const trendPercentage = computed(() => {
  return calculateReturn(currentInvestment.value?.trend || [])
})

const trendColor = computed(() => {
  const trend = parseFloat(trendPercentage.value)
  return trend > 0 ? 'success' : trend < 0 ? 'error' : 'info'
})

const trendTextColor = computed(() => {
  return trendColor.value === 'success' ? 'white' : 'white'
})

const trendIcon = computed(() => {
  const trend = parseFloat(trendPercentage.value)
  return trend > 0 ? 'mdi-trending-up' : trend < 0 ? 'mdi-trending-down' : 'mdi-trending-neutral'
})
</script>

<style scoped>
.chart {
  height: 436px;
  width: 100%;
}

.negative-margin {
  margin-top: -130px;
}
</style>
