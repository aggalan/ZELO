<template>
  <v-card v-if="transaction" class="mb-6 my-card">
    <v-card-title class="text-h5 d-flex justify-space-between align-center">
      Detalles de la Transacción
      <v-chip
        :color="transaction.type === 'incoming' ? 'success' : 'error'"
        text-color="white"
      >
        {{ transaction.type === 'incoming' ? 'Ingreso' : 'Egreso' }}
      </v-chip>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <p class="text-h6 font-weight-bold">${{ transaction.amount.toFixed(2) }}</p>
          <p class="text-subtitle-1">{{ formatDate(transaction.time) }}</p>
        </v-col>
        <v-col cols="12" sm="6" class="text-right">
          <p class="text-subtitle-1">ID: {{ transaction.id }}</p>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="12" sm="6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Remitente</h3>
          <p>{{ user.name }}</p>
          <p>CBU: {{ user.cbu }}</p>
        </v-col>
        <v-col cols="12" sm="6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Destinatario</h3>
          <p>{{ transaction.to }}</p>
          <p>CBU: {{ transaction.cbu }}</p>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="12">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Descripción</h3>
          <p>{{ transaction.description }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Categoría</h3>
          <p>{{ transaction.category }}</p>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <ActionButton text color="#8B5CF6">Descargar comprobante</ActionButton>
      <ActionButton text color="#8B5CF6">Reportar un problema</ActionButton>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {useTransactionsStore} from "@/store/transactionStore";
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import {useUsersStore} from "@/store/usersStore";
import router from "@/router/router";
import {onBeforeMount} from "vue";

const transaction = useTransactionsStore().getSelectedTransaction()
const userStore = useUsersStore()

onBeforeMount(() => {
  if (!transaction) {
    router.push('/movements');  // Redirige a la página "movements" si no hay transacción
  }
});


const user = userStore.getUserById(userStore.userId)

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
  return new Date(dateString).toLocaleDateString('es-ES', options)
}
</script>
