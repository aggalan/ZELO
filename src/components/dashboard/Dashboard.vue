<template>
      <v-container fluid class="bg-white main-container">
        <v-row>
          <v-col cols="12" md="5">
            <BalanceCard />
            <QuickActions />
            <RecentTransactions />
          </v-col>
          <v-col cols="12" md="7">
            <InvestmentPrices />
            <ServicesAndBalances />
          </v-col>
        </v-row>
      </v-container>
</template>

<script setup>
import BalanceCard from '@/components/dashboard/BalanceCard.vue'
import QuickActions from '@/components/dashboard/QuickActions.vue'
import RecentTransactions from '@/components/dashboard/RecentTransactions.vue'
import InvestmentPrices from './InvestmentPrices.vue'
import ServicesAndBalances from './ServicesAndBalances.vue'

</script>

<style>

.main-container {
  margin-top: 10px; /* Ajusta este valor según tus necesidades */
}

.v-application {
  font-family: 'Roboto', sans-serif;
  background-color: #f0f0f0;
}

</style>
