<template>
  <v-container fluid class="pa-4 bg-surface">
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

const transactionsStore = useTransactionsStore()
const usersStore = useUsersStore()

const relatedTransactions = computed(() => {
  const selectedTransaction = transactionsStore.getSelectedTransaction()
  if (!selectedTransaction) return []

  return transactionsStore.getTransactionsByUserId(usersStore.userId)
    .filter(transaction => transaction.id !== selectedTransaction.id)
    .slice(0, 2) // Limit to 2 related transactions
})
</script>

<style>
.bg-surface {
  background-color: #f5f5f5;
}
</style>
