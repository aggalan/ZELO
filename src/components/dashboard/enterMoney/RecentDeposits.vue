<template>
  <v-container>
    <h1 class="text-h4 mb-6">Ingresar dinero</h1>
    <v-card class="pa-4">
      <h2 class="text-h6 mb-4">Transferencia Bancaria</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="selectedBank"
            :items="banks"
            label="Selecciona tu banco"
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="amount"
            label="Monto a recibir"
            outlined
            dense
            prefix="$"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-card color="info" class="mb-4 pa-4">
        <v-card-text class="white--text">
          <strong>Cuenta para transferir:</strong><br>
          CBU: {{ accountDetails.cbu }}<br>
          Alias: {{ accountDetails.alias }}
        </v-card-text>
      </v-card>
      <v-btn
        block
        color="deep-purple"
        class="white--text mb-4"
        @click="startDeposit"
      >
        INICIAR INGRESO
      </v-btn>

      <v-expansion-panels v-if="lastDeposits.length > 0">
        <v-expansion-panel>
          <v-expansion-panel>
            Últimos depósitos
          </v-expansion-panel>
          <v-expansion-panel>
            <v-list>
              <v-list-item
                v-for="(deposit, index) in lastDeposits"
                :key="index"
                @click="repeatDeposit(deposit)"
              >
                <v-list-item>
                  <v-list-item-title>
                    {{ deposit.bank }} - ${{ deposit.amount }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ formatDate(deposit.date) }}
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item-action>
                  <v-btn
                    icon
                    @click.stop="repeatDeposit(deposit)"
                  >
                    <v-icon>mdi-repeat</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-expansion-panel>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {useTransactionsStore} from "@/store/transactionStore";

    const selectedBank = ref('')
    const amount = ref('')
    const banks = ['Banco 1', 'Banco 2', 'Banco 3']
    const accountDetails = reactive({
      cbu: '0000000000000000000000',
      alias: 'mi.cuenta.alias'
    })

    const lastDeposits = useTransactionsStore().getIncomesByUserId()

    const startDeposit = () => {
      // Implement deposit logic here
      console.log('Starting deposit:', { bank: selectedBank.value, amount: amount.value })
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
.v-btn {
  text-transform: none;
}
</style>
