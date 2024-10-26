<template>
  <v-container fluid class="pa-4 bg-surface d-flex flex-column">
    <v-container color="#Ffffff" fluid class="d-flex flex-column">
      <v-btn
        icon
        @click="goBack"
      >
        <v-icon color="#8B5CF6">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-container>
    <v-row>
      <v-col cols="12" lg="8">
        <TransactionDetails />
      </v-col>
      <v-col cols="12" lg="4">
        <RelatedTransactions :transactions="relatedTransactions" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useTransactionsStore } from '@/store/transactionStore'
import { useUsersStore } from '@/store/usersStore'
import TransactionDetails from './TransactionDetails.vue'
import RelatedTransactions from './RelatedTransactions.vue'
import { useRouter } from 'vue-router'

const transactionsStore = useTransactionsStore()
const usersStore = useUsersStore()
const router = useRouter()

const relatedTransactions = computed(() => {
  const selectedTransaction = transactionsStore.getSelectedTransaction()
  if (!selectedTransaction) return []

  return transactionsStore.getTransactionsByUserId
    .filter(transaction => transaction.id !== selectedTransaction.id)
    .slice(0, 2) // Limit to 2 related transactions
})
const goBack = () => {
  router.back();
}
</script>

<style>
.bg-surface {
  background-color: #f5f5f5;
}
</style>
