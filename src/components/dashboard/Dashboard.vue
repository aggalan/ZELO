<template>
  <v-container fluid class="dashboard-container pa-4">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold mb-6 text-grey-darken-3">Dashboard</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <BalanceCard class="mb-4" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <QuickActions class="mb-4" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <Analytics class="mb-4" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="8">
        <RecentTransactions :max-transactions="5" class="mb-4" />
      </v-col>
      <v-col cols="12" lg="4">
        <SpendingGoals class="mb-4" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BalanceCard from '@/components/dashboard/BalanceCard.vue'
import QuickActions from '@/components/dashboard/QuickActions.vue'
import RecentTransactions from '@/components/dashboard/RecentTransactions.vue'
import Analytics from "@/components/dashboard/Analytics.vue"
import SpendingGoals from "@/components/dashboard/SpendingGoals.vue"
</script>

<style scoped>
.dashboard-container {
  background-color: #f3f4f6;
  height: 100%;
  max-width: 100%;
}

@media (min-width: 1904px) {
  .dashboard-container {
    max-width: 1785px;
    margin: 0 auto;
  }
}
</style>
