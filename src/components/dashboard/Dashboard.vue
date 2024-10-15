<template>
  <v-app>
    <SideBar />
    <TopBarDashBoard />
    <v-main>
      <v-container fluid class="bg-white">
        <v-row>
          <v-col cols="12" md="6">
            <BalanceCard />
            <QuickActions />
            <RecentTransactions />
          </v-col>
          <v-col cols="12" md="6">
            <InvestmentPrices />
            <ServicesAndBalances />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import TopBarDashBoard from '@/components/TopBarDashboard.vue'
import BalanceCard from '@/components/dashboard/BalanceCard.vue'
import QuickActions from '@/components/dashboard/QuickActions.vue'
import RecentTransactions from '@/components/dashboard/RecentTransactions.vue'
import InvestmentPrices from './InvestmentPrices.vue'
import ServicesAndBalances from './ServicesAndBalances.vue'
import SideBar from "@/components/SideBar.vue";

// defineComponent({
//   name: 'Dashboard',
//   components: {
//     SideNavigation,
//     TopBar,
//     BalanceCard,
//     QuickActions,
//     RecentTransactions,
//     CryptoPrices,
//     ServicesAndBalances,
//   },
// })
</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
  background-color: #f0f0f0;
}
</style>
