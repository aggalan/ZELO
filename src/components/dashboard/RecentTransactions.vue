<template>
  <v-card class="my-card">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-row v-for="(transaction, index) in displayedTransactions" :key="index" class="transaction-row align-center ">
        <v-col cols="2">
          <v-list-item>
            <v-icon :color="transaction.color || purple">{{ transaction.icon || 'mdi-account' }}</v-icon>
          </v-list-item>
        </v-col>
        <v-col cols="2">{{ transaction.to }}</v-col>
        <v-col cols="3">{{ `${transaction.type === 'pago'? 'Pagaste':'Recibiste'} $${transaction.amount}` }}</v-col>
        <v-col cols="2">{{ transaction.timeSince }}</v-col>
        <v-col cols="3">
          <action-button @click="viewDetails(transaction)">Ver Detalles</action-button>
        </v-col>
      </v-row>
      <v-pagination v-if="showPagination" v-model="page" :length="pageCount" class="mt-4"></v-pagination>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {ref, computed} from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import {useTransactionsStore} from "@/store/transactionStore";
import {useUsersStore} from "@/store/usersStore";

const props = defineProps({
  title: {type: String, default: 'Transacciones Recientes'},
  maxTransactions: {type: Number, default: Infinity}
})
const purple = '#7E57C2'

const userStore = useUsersStore()
const transactions = useTransactionsStore().getTransactionsByUserId(userStore.userId)

const itemsPerPage = computed(() => props.maxTransactions === Infinity ? 8 : props.maxTransactions)
const page = ref(1)

const displayedTransactions = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return transactions.slice(start, end)
})

const pageCount = computed(() => {
  return Math.ceil(transactions.length / itemsPerPage.value)
})

const showPagination = computed(() => {
  return props.maxTransactions === Infinity && transactions.length > itemsPerPage.value
})

const viewDetails = (transaction) => {
  // Implement the logic to view details of the transaction
  console.log('Viewing details for:', transaction)
}
</script>

<style scoped>
.transaction-header {
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
}

.transaction-row {
  border-bottom: 1px solid #eee;
  padding: 8px 0;
}

.v-list-item__avatar {
  background-color: #EDE9FE;
}

.v-list-item__avatar .v-icon {
  font-size: 20px;
}
</style>
