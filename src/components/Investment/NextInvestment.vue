<template>
  <v-card class="elevation-2">
    <v-card-title class="pa-4">Resumen de Inversión</v-card-title>
    <v-card-text>
      <v-row align="center" no-gutters class="mb-4">
        <v-col cols="12" sm="6" class="text-center pa-2">
          <div class="text-overline">Inversión Total</div>
          <div class="text-h5 font-weight-bold">${{ currentInvestment.amount }}</div>
        </v-col>
        <v-col cols="12" sm="6" class="text-center pa-2">
          <div class="text-overline">Rendimiento</div>
          <div class="text-h5 font-weight-bold" :class="{'text-success': currentYield > 0, 'text-error': currentYield < 0}">
            {{ currentYield }}%
          </div>
        </v-col>
      </v-row>
      <v-row align="center" no-gutters>
        <v-col cols="12" sm="6" class="text-center pa-2">
          <div class="text-overline">Plazo</div>
          <div class="text-h5 font-weight-bold">{{ currentInvestment.description }}</div>
        </v-col>
        <v-col cols="12" sm="6" class="text-center pa-2">
          <div class="text-overline">Vencimiento</div>
          <div class="text-h5 font-weight-bold">{{ maturityDate }}</div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useInvestmentsStore } from '@/store/investmentStore'

const investmentStore = useInvestmentsStore()
const currentInvestment = computed(() => investmentStore.currentInvestment)

const currentYield = computed(() => {
  const trend = currentInvestment.value.trend
  if (trend.length < 2) return 0
  const firstValue = trend[0]
  const lastValue = trend[trend.length - 1]
  return ((lastValue - firstValue) / firstValue * 100).toFixed(2)
})

const maturityDate = computed(() => {
  // This is a placeholder. You should calculate the actual maturity date based on your data
  const date = new Date()
  date.setMonth(date.getMonth() + 6)
  return date.toLocaleDateString()
})
</script>
