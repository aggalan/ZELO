<template>
  <v-card class="recent-transactions-card">
    <v-card-text>
      <h2 class="text-h6 font-weight-bold mb-4">{{ title }}</h2>
      <v-list>
        <v-list-item v-for="(transaction, index) in displayedTransactions" :key="index" class="mb-2 transaction-item">
          <template v-slot:prepend>
            <v-avatar :color="transaction.color || 'primary'" size="40">
              <v-icon :color="transaction.iconColor || 'white'" size="24">{{ transaction.icon || 'mdi-account' }}</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>{{ transaction.to }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ `${transaction.type === 'pago' ? 'Pagaste' : 'Recibiste'} $${transaction.amount}` }}
          </v-list-item-subtitle>
          <template v-slot:append>
            <v-btn @click="viewDetails(transaction)" variant="text" color="primary" size="small">
              Ver Detalles
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
      <v-pagination
        v-if="showPagination"
        v-model="page"
        :length="pageCount"
        class="mt-4"
        rounded="circle"
      ></v-pagination>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTransactionsStore } from "@/store/transactionStore";
import { useUsersStore } from "@/store/usersStore";
import { useRouter } from 'vue-router';

const props = defineProps({
  title: { type: String, default: 'Transacciones Recientes' },
  maxTransactions: { type: Number, default: Infinity }
})

const userStore = useUsersStore()
const transactionsStore = useTransactionsStore()
const router = useRouter()

const transactions = computed(() => transactionsStore.getTransactionsByUserId(userStore.userId))

const itemsPerPage = computed(() => props.maxTransactions === Infinity ? 5 : props.maxTransactions)
const page = ref(1)

const displayedTransactions = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return transactions.value.slice(start, end)
})

const pageCount = computed(() => Math.ceil(transactions.value.length / itemsPerPage.value))

const showPagination = computed(() => props.maxTransactions === Infinity && transactions.value.length > itemsPerPage.value)

const viewDetails = (transaction) => {
  transactionsStore.setSelectedTransaction(transaction.id)
  router.push({path: '/movements/details'})
}
</script>

<style scoped>
.recent-transactions-card {
  background: white;
  border-radius: 16px;
}

.transaction-item {
  transition: background-color 0.3s ease;
}

.transaction-item:hover {
  background-color: #f5f5f5;
}
</style>
