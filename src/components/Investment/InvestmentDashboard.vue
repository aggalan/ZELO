<template>
  <v-container fluid class="pa-4">
    <h1 class="text-h4 mb-6 mt-6 ml-2">Inversiones</h1>
    <v-row>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <YourPosition />
          </v-col>
          <v-col cols="12">
            <OperateButtons />
          </v-col>
          <v-col cols="12">
            <InvestmentSummary />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12">
            <InvestmentChart />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import YourPosition from './YourPosition.vue'
import InvestmentSummary from './NextInvestment.vue'
import InvestmentChart from './InvestmentChart.vue'
import OperateButtons from './OperateButtons.vue'
</script>
