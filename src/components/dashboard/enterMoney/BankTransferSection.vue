<template>
  <v-card class="my-card" elevation="2">
    <v-card-title class="text-h5">Transferencia Bancaria</v-card-title>
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
            label="Monto a recibir"
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
      >
        <strong>Cuenta para transferir:</strong><br>
        CBU: 0000000000000000000000<br>
        Alias: mi.cuenta.alias
      </v-alert>
      <ActionButton dark block large @click="balanceStore.enterMoney(amount)">
        INICIAR INGRESO
      </ActionButton>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import {useBalanceStore} from "@/store/balanceStore";
const balanceStore = useBalanceStore()
const selectedBank = ref(null)
const amount = ref('')
const banks = [
  'Banco Nación',
  'Banco Galicia',
  'Banco Santander',
  'BBVA',
  'Banco Macro',
  'Banco HSBC',
]
</script>
