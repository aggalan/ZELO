<template>
  <v-container fluid class="dashboard-container pa-4">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold mb-6 text-grey-darken-3">Dashboard</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <BalanceCard class="mb-6" />
        <QuickActions class="mb-6" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <RecentTransactions :max-transactions="5" class="mb-6" />
      </v-col>
      <v-col cols="12" md="12" lg="4">
        <Analytics class="mb-6" />
        <SpendingGoals class="mb-6" />
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
}

.v-col {
  transition: all 0.3s ease;
}

@media (max-width: 960px) {
  .v-col {
    padding: 8px;
  }
}
</style>
