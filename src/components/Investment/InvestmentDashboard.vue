<template>
  <v-container fluid class="bg-white pa-4">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold text-grey-darken-3 mb-6">Inversiones</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="120">
        <YourPosition class="mb-6" />
      </v-col>
    </v-row>

    <v-row align="center" class = "ml-3">
        <OperateButtons class="mb-6" />
        <InvestmentChart class="chart" />
    </v-row>

    <v-row>
      <v-col cols="10">
        <InvestmentPerformance />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import YourPosition from '@/components/investment/YourPosition.vue'
import InvestmentPerformance from '@/components/investment/InvestmentPerformance.vue'
import OperateButtons from '@/components/investment/OperateButtons.vue'
import InvestmentChart from "@/components/Investment/InvestmentChart.vue";
</script>

<style scoped>
.v-row {
  margin: 0;
}

.chart {
  height: 100px;
  width: 700px;
  display: flex;
  margin-left: 20px;
}


.v-col {
  padding: 12px;
}
</style>
