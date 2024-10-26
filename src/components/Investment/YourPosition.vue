<template>
  <v-card class="mb-1 my-card position-card">
    <v-card-title class="d-flex align-center pa-5">
      <span class="text-h6 font-weight-bold">{{ title }}</span>
    </v-card-title>
    <v-card-text>
      <v-list v-if="paginatedInvestments.length > 0">
        <v-list-item
          v-for="investment in paginatedInvestments"
          :key="investment.id"
          :class="{ 'bg-primary-lighten-5': investment.id === currentInvestmentId }"
          class="mb-4"
          @click="setAsCurrentInvestment(investment)"
        >
          <template v-slot:prepend>
            <v-avatar :color="investment.iconColor + '16'" size="40">
              <v-icon :icon="investment.icon" :color="investment.iconColor"></v-icon>
            </v-avatar>
          </template>

          <v-list-item-title class="font-weight-bold">{{ investment.name }}</v-list-item-title>
          <v-list-item-subtitle>${{ investment.amount }}</v-list-item-subtitle>

          <template v-slot:append>
            <ActionButton
              :color="investment.id === currentInvestmentId ? 'grey' : 'primary'"
              :variant="investment.id === currentInvestmentId ? 'text' : 'flat'"
              @click.stop="setAsCurrentInvestment(investment)"
            >
              <span :class="{ 'text-purple': investment.id === currentInvestmentId }">
                {{ investment.id === currentInvestmentId ? 'Viendo' : 'Ver' }}
              </span>
            </ActionButton>
          </template>
        </v-list-item>
      </v-list>

      <v-sheet v-else class="d-flex flex-column align-center justify-center pa-6 mt-16">
        <v-icon icon="mdi-cash-remove" size="64" color="grey" class="mb-4"></v-icon>
        <p class="text-h6 text-center mb-4">No tienes inversiones activas</p>
      </v-sheet>

      <!-- Paginación -->
      <div v-if="paginatedInvestments.length > 0" class="d-flex justify-center">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          :total-visible="5"
          rounded="circle"
          class="pagination-fixed"
        ></v-pagination>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useInvestmentsStore } from "@/store/investmentStore"
import { useUsersStore } from "@/store/usersStore"
import { useRouter } from 'vue-router'
import ActionButton from "@/components/generalComponents/ActionButton.vue"

const investmentsStore = useInvestmentsStore()
const usersStore = useUsersStore()
const router = useRouter()

const investments = investmentsStore.getInvestmentsByUserId(usersStore.userId)
const currentInvestmentId = computed(() => investmentsStore.currentInvestment?.id)
const title = "Tu posición"

// Paginación
const itemsPerPage = 5
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(investments.value.length / itemsPerPage))

const paginatedInvestments = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return investments.value.slice(start, end)
})

const setAsCurrentInvestment = (investment) => {
  investmentsStore.setCurrentInvestment(investment.id)
}

const goToNewInvestment = () => {
  router.push('/investments/new')
}

const calculateReturn = (trend) => {
  if (trend.length < 2) return 0
  const firstValue = trend[0]
  const lastValue = trend[trend.length - 1]
  return ((lastValue - firstValue) / firstValue * 100).toFixed(2)
}

const getInvestmentTrendColor = (trend) => {
  const returnValue = calculateReturn(trend)
  return returnValue > 0 ? 'success' : returnValue < 0 ? 'error' : 'info'
}
</script>

<style scoped>
.text-purple {
  color: var(--primary);
}
.contenedor-principal {
  position: relative;
  min-height: 300px;
}
.position-card {
  height: 482px;
}
</style>
