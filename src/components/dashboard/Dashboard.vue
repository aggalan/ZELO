<template>
  <v-container fluid class="bg-white pa-4">
    <h1 class="text-h4 mb-6 mt-6 ml-2">Inicio</h1>
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
        <RecentTransactions :max-transactions="5" class="mb-4 mt-2">
          <ActionButton @click="router.push({path:'/movements'})" color="var(--primary)" variant="text" size="small">Ver todas</ActionButton>
        </RecentTransactions>
      </v-col>
      <v-col cols="12" lg="4">
        <InvestmentSummary class="mb-4" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BalanceCard from '@/components/dashboard/BalanceCard.vue'
import QuickActions from '@/components/dashboard/QuickActions.vue'
import RecentTransactions from '@/components/dashboard/RecentTransactions.vue'
import Analytics from "@/components/dashboard/Analytics.vue"
import InvestmentSummary from "@/components/dashboard/InvestmentSummary.vue"
import router from "@/router/router";
import ActionButton from "@/components/generalComponents/ActionButton.vue";
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
