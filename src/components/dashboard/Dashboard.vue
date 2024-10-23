<template>
  <v-container fluid class="bg-white pa-4">
    <h1 class="text-h4 mb-6 mt-6 ml-2">Dashboard</h1>
    <v-row>
      <v-col cols="12" md="5">
        <BalanceCard />
        <QuickActions />
        <Analytics />
      </v-col>
      <v-col cols="12" md="7">
        <RecentTransactions :max-transactions="4" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BalanceCard from '@/components/dashboard/BalanceCard.vue'
import QuickActions from '@/components/dashboard/QuickActions.vue'
import RecentTransactions from '@/components/dashboard/RecentTransactions.vue'
import Analytics from "@/components/dashboard/Analytics.vue"
</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
  background-color: #f0f0f0;
}

.pa-4 {
  padding: 16px;
}

.mb-6 {
  margin-bottom: 24px;
}

.mt-6 {
  margin-top: 24px;
}

.ml-2 {
  margin-left: 8px;
}
</style>
