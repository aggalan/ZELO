<template>
  <v-card class="recent-transactions-card">
    <v-card-text>
      <div class="d-flex justify-space-between align-center mb-4">
        <h2 class="text-h6 font-weight-bold">{{ title }}</h2>
        <v-btn color="primary" variant="text" size="small">Ver todas</v-btn>
      </div>
      <v-list>
        <v-list-item v-for="(transaction, index) in displayedTransactions" :key="index" class="mb-2 transaction-item">
          <template v-slot:prepend>
            <v-avatar :color="transaction.color || 'primary'" size="40">
              <v-icon :color="transaction.iconColor || 'white'" size="24">{{ transaction.icon || 'mdi-account' }}</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="text-subtitle-2">{{ transaction.to }}</v-list-item-title>
          <v-list-item-subtitle class="text-caption">
            {{ `${transaction.type === 'pago' ? 'Pagaste' : 'Recibiste'} $${transaction.amount}` }}
          </v-list-item-subtitle>
          <template v-slot:append>
            <action-button @click="viewDetails(transaction)" variant="text">
              Ver
            </action-button>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-pagination
      v-if="showPagination"
      v-model="page"
      :length="pageCount"
      class="mt-4"
      rounded="circle"
    ></v-pagination>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTransactionsStore } from "@/store/transactionStore";
import { useUsersStore } from "@/store/usersStore";
import { useRouter } from 'vue-router';
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const props = defineProps({
  title: { type: String, default: 'Transacciones Recientes' },
  maxTransactions: { type: Number, default: Infinity }
})
const itemsPerPage = computed(() => props.maxTransactions === Infinity ? 5 : props.maxTransactions)
const page = ref(1)
const displayedTransactions = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return transactions.value.slice(start, end)
  })
const pageCount = computed(() => Math.ceil(transactions.value.length / itemsPerPage.value))
const showPagination = computed(() => props.maxTransactions === Infinity && transactions.value.length > itemsPerPage.value)

const userStore = useUsersStore()
const transactionsStore = useTransactionsStore()
const router = useRouter()

const transactions = computed(() => transactionsStore.getTransactionsByUserId(userStore.userId))


const viewDetails = (transaction) => {
  transactionsStore.setSelectedTransaction(transaction.id)
  router.push({ path: '/movements/details' })
}
</script>

<style scoped>
.recent-transactions-card {
  background: white;
  border-radius: 16px;
  height: 100%;
  padding-bottom: 100px;
}
@media (min-width: 1280px) {
  .recent-transactions-card {
    margin-top: -100px;
  }
}
.transaction-item {
  transition: background-color 0.3s ease;
}
.transaction-item:hover {
  background-color: #f5f5f5;
}
</style>
