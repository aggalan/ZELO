<template class="d-flex">
  <v-card class="mb-4 my-card align-center">
    <v-card-text class="align-center">
      <v-row class="d-flex align-center ml-4">
        <v-col cols="12" md="2">
          <span class="text-h6 mr-2">Tasa de Interes</span>
        </v-col>
        <v-col md="5">
          <v-sparkline
          :model-value="currentInvestment.trend"
          :gradient="['#8B5CF6', '#8B5CF6']"
          :smooth="true"
          stroke-linecap="round"
          padding="8"
          line-width="3"
          auto-draw
        ></v-sparkline></v-col>
        <v-col md="2">
          <span class="text-h6">${{ currentInvestment.amount }}</span>
        </v-col>

      </v-row>

    </v-card-text>
  </v-card>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useInvestmentsStore } from '@/store/investmentStore'
const investmentStore = useInvestmentsStore()
const currentInvestment = computed(() => investmentStore.currentInvestment)
</script>

<style scoped>
</style>
