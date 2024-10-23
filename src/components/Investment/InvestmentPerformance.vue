<template>
  <v-card class="my-card">
    <v-card-title  class = "ml-4 mt-4">Rendimiento de tus inversiones</v-card-title>
    <v-card-text class = "mb-5">
      <v-chart class="chart" :option="useInvestmentsStore().currentInvestment.chartOption" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import  VChart  from 'vue-echarts'; // Asegúrate de importar el componente ECharts
import { useInvestmentsStore } from '@/store/investmentStore'

use([CanvasRenderer, LineChart, GridComponent, TooltipComponent])


onMounted(() => {
  // Any additional setup if needed
})
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
