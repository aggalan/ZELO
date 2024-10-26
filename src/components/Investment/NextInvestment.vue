<template>
  <v-card class="my-card">
    <v-card-title class="pa-4">Resumen</v-card-title>
    <v-card-text>
      <div class="d-flex flex-nowrap overflow-x-auto gap-4">
        <div class="stat-card">
          <div class="text-overline">Inversión Total</div>
          <div class="text-h5 font-weight-bold">${{ currentInvestment.amount }}</div>
        </div>

        <div class="stat-card">
          <div class="text-overline">Rendimiento</div>
          <div class="text-h5 font-weight-bold"
               :class="{'text-success': currentInvestment.interest > 0, 'text-error': currentInvestment.interest < 0}">
            {{ currentInvestment.interest * 100 }}%
          </div>
        </div>

        <!-- Plazo -->
        <div class="stat-card">
          <div class="text-overline">Plazo</div>
          <div class="text-h5 font-weight-bold">{{ currentInvestment.description }}</div>
        </div>

        <!-- Vencimiento -->
        <div class="stat-card">
          <div class="text-overline">Vencimiento</div>
          <div class="text-h5 font-weight-bold">{{ maturityDate }}</div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useInvestmentsStore } from '@/store/investmentStore'

const investmentStore = useInvestmentsStore()
const currentInvestment = computed(() => investmentStore.getCurrentInvestment())


const maturityDate = computed(() => {
  // This is a placeholder. You should calculate the actual maturity date based on your data
  const date = new Date()
  date.setMonth(date.getMonth() + 6)
  return date.toLocaleDateString()
})
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
