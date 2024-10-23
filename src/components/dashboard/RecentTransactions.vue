<template>
  <v-card class="my-card">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-row v-for="(transaction, index) in displayedTransactions" :key="index" class="transaction-row align-center ">
        <v-col cols="2">
          <v-list-item>
            <v-icon :color="transaction.color">{{ transaction.icon }}</v-icon>
          </v-list-item>
        </v-col>
        <v-col cols="2">{{ transaction.name }}</v-col>
        <v-col cols="3">{{ transaction.description }}</v-col>
        <v-col cols="2">{{ transaction.time }}</v-col>
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

const props = defineProps({
  title: {type: String, default: 'Transacciones Recientes'},
  maxTransactions: {type: Number, default: Infinity}
})

const transactions = ref([
  {name: 'Jose', description: 'Te transfirió $10.000', time: 'Ahora', icon: 'mdi-account', color: '#8B5CF6'},
  {name: 'Open 25', description: 'Pagaste $3000', time: '15m', image: '/placeholder.svg', icon: 'mdi-account'},
  {name: 'Miguel', description: 'Enviaste $3.000', time: '6h', icon: 'mdi-account', color: '#8B5CF6'},
  {name: 'Jose', description: 'Te transfirió $10.000', time: 'Ahora', icon: 'mdi-account', color: '#8B5CF6'},
  {name: 'Open 25', description: 'Pagaste $3000', time: '15m', image: '/placeholder.svg', icon: 'mdi-account'},
  {name: 'Miguel', description: 'Enviaste $3.000', time: '6h', icon: 'mdi-account', color: '#8B5CF6'},
  {name: 'Jose', description: 'Te transfirió $10.000', time: 'Ahora', icon: 'mdi-account', color: '#8B5CF6'},
  {name: 'Open 25', description: 'Pagaste $3000', time: '15m', image: '/placeholder.svg', icon: 'mdi-account'},
  {name: 'Miguel', description: 'Enviaste $3.000', time: '6h', icon: 'mdi-account', color: '#8B5CF6'},
])

const itemsPerPage = computed(() => props.maxTransactions === Infinity ? 8 : props.maxTransactions)
const page = ref(1)

const displayedTransactions = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return transactions.value.slice(start, end)
})

const pageCount = computed(() => {
  return Math.ceil(transactions.value.length / itemsPerPage.value)
})

const showPagination = computed(() => {
  return props.maxTransactions === Infinity && transactions.value.length > itemsPerPage.value
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
