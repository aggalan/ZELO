<template>
  <v-card class="my-card">
    <v-card-title  class = "ml-4 mt-4">Rendimiento de tus inversiones</v-card-title>
    <v-card-text class = "mb-5">
      <v-chart class="chart" :option="chartOption" />
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

use([CanvasRenderer, LineChart, GridComponent, TooltipComponent])

const chartOption = ref({
  xAxis: {
    type: 'category',
    data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    axisLine: {show: false},
    axisTick: {show: false},
  },
  yAxis: {
    type: 'value',
    axisLine: {show: false},
    axisTick: {show: false},
    splitLine: {show: false},
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320, 1450, 1600, 1800],
    type: 'line',
    smooth: true,
    showSymbol: false,
    areaStyle: {
      opacity: 0.8,
      color: '#8B5CF6'
    },
    lineStyle: {
      color: '#8B5CF6'
    }
  }],
  tooltip: {
    trigger: 'axis'
  }
})

onMounted(() => {
  // Any additional setup if needed
})
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
