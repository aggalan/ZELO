<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <h1 class="text-h4 mb-6 text-grey-darken-3">Inversiones</h1>
        <v-row>
          <v-col cols="12" md="8">
            <YourPosition />
            <InvestmentChart />
            <InvestmentPerformance />
          </v-col>
          <v-col cols="12" md="4">
            <NextInvestment />
            <OperateButtons />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue'
import TopBarDashboard from '@/components/TopBarDashboard.vue'
import YourPosition from '@/components/investment/YourPosition.vue'
import InvestmentPerformance from '@/components/investment/InvestmentPerformance.vue'
import NextInvestment from '@/components/investment/NextInvestment.vue'
import OperateButtons from '@/components/investment/OperateButtons.vue'
import InvestmentChart from "@/components/Investment/InvestmentChart.vue";

</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
  background-color: #f3f4f6;
}
</style>
