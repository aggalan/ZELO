<template>
  <v-card class="pa-4">
    <v-card-title class="text-h5">Ingreso por Banco</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="selectedBank"
            :items="banks"
            label="Selecciona tu banco"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="amount"
            label="Monto a ingresar"
            prefix="$"
            outlined
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-alert
        border="left"
        colored-border
        type="info"
        elevation="2"
        class="mb-4"
        color="grey-lighten-3"
      >
        <strong>Cuenta de la cual transferir:</strong><br>
        CBU: {{ accountDetails.cbu }}<br>
        Alias: {{ accountDetails.alias }}
      </v-alert>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn
            dark
            block
            large
            @click="startDeposit"
            color = "deep-purple"
            :loading="loading"
          >
            INICIAR INGRESO
          </v-btn>
        </v-col>
      </v-row>
      <v-alert
        v-if="confirmation"
        type="success"
        class="mt-4"
      >
        Depósito realizado con éxito.
      </v-alert>
    </v-card-text>

    <v-card-text v-if="lastDeposits.length > 0">
      <div class="text-subtitle-1 font-weight-medium">Últimos depósitos</div>
      <v-list>
        <v-list-item
          v-for="(deposit, index) in lastDeposits"
          :key="index"
          @click="repeatDeposit(deposit)"
          class="px-0"
        >
          <v-list-item-content>
            <v-row align="center" no-gutters>
              <v-col>
                <v-list-item-title class="text-subtitle-1">
                  {{ deposit.bank }} - ${{ deposit.amount }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ formatDate(deposit.date) }}
                </v-list-item-subtitle>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  icon
                  color="deep-purple"
                  @click.stop="repeatDeposit(deposit)"
                >
                  <v-icon>mdi-repeat</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue"
import { useBalanceStore } from "@/store/balanceStore"

const balanceStore = useBalanceStore()

const selectedBank = ref('')
const amount = ref('')
const loading = ref(false)
const confirmation = ref(false)
const banks = [
  'Banco Nación',
  'Banco Galicia',
  'Banco Santander',
  'Banco BBVA',
  'Banco Macro',
  'Banco HSBC',
]

const accountDetails = reactive({
  cbu: '0000000000000000000000',
  alias: 'mi.cuenta.alias'
})

const lastDeposits = ref([
  { bank: 'Banco Nación', amount: 1000, date: new Date(2023, 4, 15) },
  { bank: 'Banco Galicia', amount: 500, date: new Date(2023, 4, 10) },
  { bank: 'Banco Santander', amount: 2000, date: new Date(2023, 4, 5) },
])

const startDeposit = () => {
  loading.value = true
  confirmation.value = false
  setTimeout(() => {
    balanceStore.enterMoney(amount.value)
    loading.value = false
    confirmation.value = true
    console.log('Starting deposit:', { bank: selectedBank.value, amount: amount.value })
  }, 2000)
}

const repeatDeposit = (deposit) => {
  selectedBank.value = deposit.bank
  amount.value = deposit.amount
  console.log('Repeating deposit:', deposit)
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}
</script>

<style scoped>
.v-btn.violet-button {
  color: white;
  background-color: violet;
}
</style>
