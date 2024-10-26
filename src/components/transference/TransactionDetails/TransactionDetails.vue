<template>
  <v-card v-if="transaction" class="mb-6 rounded-lg elevation-3 mt-5">
    <v-card-title class="text-h5 d-flex justify-space-between align-center pa-4 bg-primary">
      <span class="white--text">Detalles de la Transacción</span>
      <v-chip
        :color="chipColor"
        text-color="white"
        class="font-weight-bold transaction-type-chip"
        elevation="2"
      >
        {{ transaction.type === 'ingreso' ? 'INGRESO' : 'PAGO' }}
      </v-chip>
    </v-card-title>
    <v-card-text class="pa-4">
      <v-row>
        <v-col cols="12" sm="6">
          <p class="text-h4 font-weight-bold primary--text">${{ transaction.amount.toFixed(2) }}</p>
          <p class="text-subtitle-1">{{ formatDate(transaction.creationTime) }}</p>
        </v-col>
        <v-col cols="12" sm="6" class="text-sm-right">
          <p class="text-subtitle-1">ID: {{ transaction.id }}</p>
          <p class="text-subtitle-1 font-weight-medium success--text">
            Estado: Completado
          </p>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="12" sm="6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Remitente</h3>
          <p>{{ currentUser.name }}</p>
          <p class="text-caption">CBU: {{ transaction.cbu }}</p>
        </v-col>
        <v-col cols="12" sm="6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Destinatario</h3>
          <p>{{ transaction.to }}</p>
          <p class="text-caption">CBU: N/A</p>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="12" sm="6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Descripción</h3>
          <p>{{ transaction.description }}</p>
        </v-col>
        <v-col cols="12" sm="6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Categoría</h3>
          <v-chip color="secondary" text-color="white">{{ transaction.category }}</v-chip>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="pa-4">
      <ActionButton color="primary" text class="text-capitalize">
        <v-icon left>mdi-download</v-icon>
        Descargar comprobante
      </ActionButton>
      <ActionButton color="secondary" text class="text-capitalize">
        <v-icon left>mdi-alert-circle</v-icon>
        Reportar un problema
      </ActionButton>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useTransactionsStore } from '@/store/transactionStore'
import { useUsersStore } from '@/store/usersStore'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const transactionsStore = useTransactionsStore()
const usersStore = useUsersStore()

const transaction = computed(() => transactionsStore.getSelectedTransaction())
const currentUser = computed(() => usersStore.getUserById(usersStore.userId))

const chipColor = 'white';

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  const options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}
  return date.toLocaleDateString('es-ES', options)
}
</script>

<style scoped>
.transaction-type-chip {
  font-size: 0.9rem;
  padding: 0 12px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.v-chip.v-chip--variant-elevated {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);
}
</style>
