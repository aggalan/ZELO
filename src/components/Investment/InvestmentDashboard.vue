<template>
      <v-container fluid class="bg-white">
        <h1 class="text-h4 mb-3 text-grey-darken-3 mt-3">Inversiones</h1>
        <v-row>
          <v-col cols="12" md="7">
            <YourPosition class="ma-3"/>
            <InvestmentChart />
            <InvestmentPerformance />
          </v-col>
          <v-col cols="12" md="5">
            <NextInvestment />
            <OperateButtons />
          </v-col>
        </v-row>
      </v-container>
</template>

<script setup>
import YourPosition from '@/components/investment/YourPosition.vue'
import InvestmentPerformance from '@/components/investment/InvestmentPerformance.vue'
import NextInvestment from '@/components/investment/NextInvestment.vue'
import OperateButtons from '@/components/investment/OperateButtons.vue'
import InvestmentChart from "@/components/Investment/InvestmentChart.vue";

</script>

<style>

</style>
