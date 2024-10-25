<template>
  <v-card v-if="transaction" class="mb-6 rounded-lg elevation-3 mt-5">
    <v-card-title class="text-h5 d-flex justify-space-between align-center pa-4 bg-primary">
      <span class="white--text">Detalles de la Transacción</span>
      <v-chip
        :color="transaction.type === 'incoming' ? 'light-green-accent-4' : 'deep-orange-accent-4'"
        text-color="white"
        class="font-weight-bold"
        elevation="2"
      >
        {{ transaction.type === 'incoming' ? 'Ingreso' : 'Egreso' }}
      </v-chip>
    </v-card-title>
    <v-card-text class="pa-4">
      <v-row>
        <v-col cols="12" sm="6">
          <p class="text-h4 font-weight-bold primary--text">${{ transaction.amount.toFixed(2) }}</p>
          <p class="text-subtitle-1">{{ formatDate(transaction.date) }}</p>
        </v-col>
        <v-col cols="12" sm="6" class="text-sm-right">
          <p class="text-subtitle-1">ID: {{ transaction.id }}</p>
          <p class="text-subtitle-1 font-weight-medium" :class="{'success--text': transaction.status === 'completed', 'warning--text': transaction.status !== 'completed'}">
            Estado: {{ transaction.status === 'completed' ? 'Completado' : 'Pendiente' }}
          </p>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="12" sm="6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Remitente</h3>
          <p>{{ transaction.sender.name }}</p>
          <p class="text-caption">CBU: {{ transaction.sender.account }}</p>
        </v-col>
        <v-col cols="12" sm="6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Destinatario</h3>
          <p>{{ transaction.recipient.name }}</p>
          <p class="text-caption">CBU: {{ transaction.recipient.account }}</p>
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
      <v-btn color="primary" text class="text-capitalize">
        <v-icon left>mdi-download</v-icon>
        Descargar comprobante
      </v-btn>
      <v-btn color="secondary" text class="text-capitalize">
        <v-icon left>mdi-alert-circle</v-icon>
        Reportar un problema
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  transaction: {
    type: Object,
    required: true
  }
})

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
  return new Date(dateString).toLocaleDateString('es-ES', options)
}
</script>

<style scoped>
.v-chip {
  font-size: 0.9rem;
  padding: 0 12px;
}
</style>
