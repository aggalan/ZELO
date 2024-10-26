<template>
  <v-card class="pa-4">
    <v-card-title class="text-h5">Ingreso por Banco</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="selectedBank"
            :items="bankNames"
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
      <my-information show-popup title="" :account-details="accountDetails" />
      <v-row>
        <v-col class="d-flex justify-end">
          <ActionButton
            dark
            block
            large
            @click="startDeposit"
            :loading="loading"
          >
            INICIAR INGRESO
          </ActionButton>
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
          :key="deposit.id || index"
          @click="repeatDeposit(deposit)"
          class="px-0"
        >
          <v-list-item>
            <v-row align="center" no-gutters>
              <v-col>
                <v-list-item-title class="text-subtitle-1">
                  {{ deposit.to }} - ${{ deposit.amount }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ formatDate(deposit.creationTime) }}
                </v-list-item-subtitle>
              </v-col>
              <v-col cols="auto">
                <ActionButton
                  icon
                  @click.stop="repeatDeposit(deposit)"
                >
                  <v-icon>mdi-repeat</v-icon>
                </ActionButton>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {ref, computed, watch} from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue"
import {useBalanceStore} from "@/store/balanceStore"
import MyInformation from "@/components/dashboard/MyInformation.vue";
import {useUsersStore} from "@/store/usersStore";
import {useTransactionsStore} from "@/store/transactionStore";

const balanceStore = useBalanceStore()
const transactionsStore = useTransactionsStore()

const selectedBank = ref('')
const amount = ref('')
const loading = ref(false)
const confirmation = ref(false)
const banks = [
  {name: 'Banco Nación', cbu: '0000000000000222000000', alias: 'mi.nacion.alias'},
  {name: 'Banco Galicia', cbu: '0000000000000222330000', alias: 'mi.galicia.alias'},
  {name: 'Banco Santander', cbu: '0000000000000222330055', alias: 'mi.santander.alias'},
  {name: 'Banco BBVA', cbu: '0000000000000222334400', alias: 'mi.bbva.alias'},
  {name: 'Banco Macro', cbu: '0000000000001222334400', alias: 'mi.macro.alias'},
  {name: 'Banco HSBC', cbu: '0000000000001222334431', alias: 'mi.hsbc.alias'},
]
const bankNames = computed(() => banks.map(bank => bank.name))
const user = useUsersStore().getUser()
const accountDetails = ref({
  cbu: user.cbu,
  alias: user.alias,
})

const lastDeposits = computed(() => {
  return transactionsStore.getIncomesByUserId.slice(0, 5) // Get only the last 5 deposits
})

const startDeposit = () => {
  loading.value = true
  confirmation.value = false
  setTimeout(() => {
    balanceStore.enterMoney(amount.value, {name: selectedBank.value})
    loading.value = false
    confirmation.value = true
    console.log('Starting deposit:', {bank: selectedBank.value, amount: amount.value})
    // The lastDeposits will automatically update due to the computed property
  }, 2000)
}

const repeatDeposit = (deposit) => {
  selectedBank.value = deposit.to
  amount.value = deposit.amount.toString()
  console.log('Repeating deposit:', deposit)
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

// Watch for changes in the transactions store
watch(() => transactionsStore.transactions, () => {
  // This will trigger a re-computation of lastDeposits
}, {deep: true})
</script>

<style scoped>
.v-btn.violet-button {
  color: white;
  background-color: violet;
}
</style>
