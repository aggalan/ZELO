<template>
  <v-card class="mb-4 elevation-2">
    <v-card-title class="d-flex justify-space-between align-center pa-4">
      <span class="text-h6 font-weight-bold">{{ title }}</span>
      <v-btn
        variant="text"
        color="primary"
        :to="'/investment/all'"
        class="text-none"
      >
        Ver todas
        <v-icon right>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item
          v-for="investment in investments"
          :key="investment.id"
          :class="{ 'bg-primary-lighten-5': investment.id === currentInvestmentId }"
          @click="setAsCurrentInvestment(investment)"
        >
          <template v-slot:prepend>
            <v-avatar :color="investment.iconColor + '16'" size="40">
              <v-icon :icon="investment.icon" :color="investment.iconColor"></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-bold">{{ investment.name }}</v-list-item-title>
          <v-list-item-subtitle>${{ investment.amount }}</v-list-item-subtitle>
          <template v-slot:append>
            <v-chip
              :color="getInvestmentTrendColor(investment.trend)"
              :text-color="getInvestmentTrendColor(investment.trend) === 'success' ? 'white' : 'white'"
              size="small"
            >
              {{ calculateReturn(investment.trend) }}%
            </v-chip>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useInvestmentsStore } from "@/store/investmentStore"
import { useUsersStore } from "@/store/usersStore"

const investmentsStore = useInvestmentsStore()
const usersStore = useUsersStore()

const investments = investmentsStore.getInvestmentsByUserId(usersStore.userId)
const currentInvestmentId = computed(() => investmentsStore.currentInvestment?.id)
const title = "Tu posición"

const setAsCurrentInvestment = (investment) => {
  investmentsStore.setCurrentInvestment(investment.id)
}

const calculateReturn = (trend) => {
  if (trend.length < 2) return 0
  const firstValue = trend[0]
  const lastValue = trend[trend.length - 1]
  return ((lastValue - firstValue) / firstValue * 100).toFixed(2)
}

const getInvestmentTrendColor = (trend) => {
  const returnValue = calculateReturn(trend)
  return returnValue > 0 ? 'success' : returnValue < 0 ? 'error' : 'info'
}
</script>
