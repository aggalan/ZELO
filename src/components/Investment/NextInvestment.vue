<template>
  <v-card class="my-card">
    <v-card-title class="pa-4">Resumen</v-card-title>
    <v-card-text>
      <div v-if="currentInvestment" class="d-flex flex-nowrap overflow-x-auto gap-4">
        <div class="stat-card">
          <div class="text-overline">Inversión Total</div>
          <div class="text-h5 font-weight-bold">${{ currentInvestment.amount.toLocaleString() }}</div>
        </div>

        <div class="stat-card">
          <div class="text-overline">Rendimiento</div>
          <div class="text-h5 font-weight-bold"
               :class="{'text-success': currentInvestment.interest > 0, 'text-error': currentInvestment.interest < 0}">
            {{ (currentInvestment.interest * 100).toFixed(2) }}%
          </div>
        </div>

        <div class="stat-card">
          <div class="text-overline">Plazo</div>
          <div class="text-h5 font-weight-bold">{{ currentInvestment.description }}</div>
        </div>

        <div class="stat-card">
          <div class="text-overline">Vencimiento</div>
          <div class="text-h5 font-weight-bold">{{ maturityDate }}</div>
        </div>
      </div>
      <div v-else class="no-investment-message">
        <v-icon size="64" color="grey lighten-1">mdi-cash-remove</v-icon>
        <div v-if=!useInvestmentsStore().hasInvestments>
          <p  class="text-h6 mt-4">No tienes inversiones activas</p>
          <p  class="text-subtitle-1 mt-2">Comienza a invertir para ver un resumen aquí</p>
        </div>
        <p v-else class="text-h6 text-center">Seleccione una inversión para ver su rendimiento</p>

      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useInvestmentsStore } from '@/store/investmentStore'
import { useRouter } from 'vue-router'

const investmentStore = useInvestmentsStore()
const router = useRouter()

const currentInvestment = computed(() => investmentStore.getCurrentInvestment())

const maturityDate = computed(() => {
  if (!currentInvestment.value) return '-'
  const date = new Date()
  date.setMonth(date.getMonth() + 6)
  return date.toLocaleDateString()
})

const goToNewInvestment = () => {
  router.push('/investment/new')
}
</script>

<style scoped>
.stat-card {
  min-width: 200px;
  flex: 1;
  text-align: center;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(var(--surface), 0.5);
}

.gap-4 {
  gap: 1rem;
}

.no-investment-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px;
  background-color: rgba(var(--surface), 0.5);
  border-radius: 8px;
}

/* Estilos para el scrollbar */
.overflow-x-auto {
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}
</style>
