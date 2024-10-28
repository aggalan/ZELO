<template>
  <v-container fluid class="bg-white pa-4">
    <h1 class="text-h4 mb-6 mt-6 ml-2">Inicio</h1>
    <v-row>
      <v-col cols="12" lg="8">
        <v-row>
          <v-col cols="12" md="6">
            <BalanceCard class="mb-4" />
          </v-col>
          <v-col cols="12" md="6">
            <QuickActions class="mb-4" />
          </v-col>
          <v-col cols="12">
            <RecentTransactions :max-transactions="5" class="mb-4">
              <ActionButton @click="router.push({path:'/movements'})" color="primary" variant="text" size="small">
                Ver todas
              </ActionButton>
            </RecentTransactions>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="4">
        <v-row>
          <v-col cols="12">
            <Analytics class="mb-4" />
          </v-col>
          <v-col cols="12">
            <InvestmentSummary class="mb-4" />
          </v-col>
        </v-row>
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
import ActionButton from "@/components/generalComponents/ActionButton.vue"
import {useRouter} from 'vue-router'

const router = useRouter()
</script>

<style scoped>

</style>
