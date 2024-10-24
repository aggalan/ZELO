<template>
  <v-card class="elevation-2">
    <v-card-title class="d-flex justify-space-between align-center pa-4">
      <span class="text-h6 font-weight-bold">Evolución de la Inversión</span>
      <v-chip :color="trendColor" :text-color="trendTextColor">
        <v-icon start :icon="trendIcon"></v-icon>
        {{ trendPercentage }}%
      </v-chip>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="4">
          <v-list>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-currency-usd</v-icon>
              </template>
              <v-list-item-title>Monto Actual</v-list-item-title>
              <v-list-item-subtitle class="text-h6 font-weight-bold">
                ${{ currentInvestment.amount }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-chart-line</v-icon>
              </template>
              <v-list-item-title>Rendimiento</v-list-item-title>
              <v-list-item-subtitle class="text-h6 font-weight-bold">
                {{ calculateReturn(currentInvestment.trend) }}%
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="8">
          <v-sheet class="pa-4 rounded">
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
        </v-col>
      </v-row>
      <v-row class="negative-margin">
        <v-col cols="12">
          <v-chart class="chart" :option="chartOption" autoresize />
        </v-col>
      </v-row>
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
  return calculateReturn(currentInvestment.value.trend)
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
