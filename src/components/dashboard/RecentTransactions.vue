<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useTransactionsStore } from "@/store/transactionStore"
import { useUsersStore } from "@/store/usersStore"
import { useRouter } from 'vue-router'
import ActionButton from "@/components/generalComponents/ActionButton.vue"

const props = defineProps({
  title: { type: String, default: 'Transacciones Recientes' },
  maxTransactions: { type: Number, default: Infinity }
})

const userStore = useUsersStore()
const transactionsStore = useTransactionsStore()
const router = useRouter()
const search = ref('')
const searchInput = ref(null);

const focus = () => {
  searchInput.value.focus();
}

const transactions = ref([])
const page = ref(1)

const itemsPerPage = computed(() => props.maxTransactions === Infinity ? 8 : props.maxTransactions)

const displayedTransactions = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredMovements.value.slice(start, end)
})

const pageCount = computed(() => Math.ceil(filteredMovements.value.length / itemsPerPage.value))
const showPagination = computed(() => props.maxTransactions === Infinity && filteredMovements.value.length > itemsPerPage.value)

watchEffect(() => {
  transactions.value = transactionsStore.getTransactionsByUserId
})

watchEffect(() => {
  if (search.value !== '') {
    page.value = 1
  }
})

const viewDetails = (transaction) => {
  transactionsStore.setSelectedTransaction(transaction.id)
  router.push({ path: '/movements/details' })
}

const filteredMovements = computed(() => {
  return transactions.value.filter(transaction =>
    transaction.name.toLowerCase().includes(search.value.toLowerCase()) ||
    transaction.description.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <v-card class="recent-transactions-card my-card">
    <v-card-text>
      <div class="d-flex justify-space-between align-center mb-4">
        <h2 class="text-h6 font-weight-bold">{{ title }}</h2>
        <slot/>
      </div>
      <v-text-field v-if="maxTransactions === Infinity"
                    v-model="search"
                    prepend-icon="mdi-magnify"
                    @click:prepend="focus"
                    label="Buscar"
                    single-line
                    hide-details
                    filled
                    rounded
                    ref="searchInput"
                    dense
                    class="custom-text-field mb-4"
      ></v-text-field>
      <v-list v-if="displayedTransactions.length > 0">
        <v-list-item v-for="(transaction, index) in displayedTransactions" :key="index" class="mb-3 transaction-item">
          <template v-slot:prepend>
            <v-avatar :color="'var(--primary)'" size="40">
              <v-icon :color="transaction.iconColor || 'white'" size="24">{{ transaction.icon || 'mdi-account' }}</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="text-subtitle-2">{{ transaction.name }}</v-list-item-title>
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
      <v-sheet v-else-if="transactions.length === 0" class="d-flex flex-column align-center justify-center" height="200">
        <v-icon size="64" color="grey lighten-1">mdi-cash-remove</v-icon>
        <p class="text-body-1 text-center mt-4">No hay transacciones recientes</p>
        <p class="text-caption text-center">Las transacciones aparecerán aquí una vez que realices alguna</p>
      </v-sheet>
      <v-alert v-else color="background" class="ma-3" outlined>
        No se encontraron transacciones que coincidan con la búsqueda.
      </v-alert>
    </v-card-text>
    <v-pagination
      v-if="showPagination && displayedTransactions.length > 0"
      v-model="page"
      :length="pageCount"
      class="mt-4"
      rounded="circle"
    ></v-pagination>
  </v-card>
</template>

<style scoped>
.recent-transactions-card {
  background: white;
  border-radius: 16px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
}

.transaction-item {
  transition: background-color 0.3s ease;
}

.transaction-item:hover {
  background-color: #f5f5f5;
}

.custom-text-field :deep(.v-field__outline) {
  display: none;
}
</style>
