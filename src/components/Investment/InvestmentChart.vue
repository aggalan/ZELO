<template class="d-flex">
  <v-card class="mb-4 my-card align-center">
    <v-card-text class="align-center">
      <v-row class="d-flex align-center ml-4">
        <v-col cols="12" md="1"><v-icon left color="#F7931A">{{currentInvestment.icon}}</v-icon>
        </v-col>
        <v-col cols="12" md="2">
          <span class="text-h6 mr-2">{{currentInvestment.name}}</span>
        </v-col>
        <v-col md="4">
          <v-sparkline
          :model-value="currentInvestment.trend"
          :gradient="['#FF5252']"
          :smooth="true"
          stroke-linecap="round"
          padding="8"
          line-width="3"
          auto-draw
        ></v-sparkline></v-col>
        <v-col md="2">  <span class="text-subtitle-1 grey--text">{{currentInvestment.description}}</span>
        </v-col>
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
