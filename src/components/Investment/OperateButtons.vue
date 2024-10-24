<template>
  <v-card class="elevation-2">
    <v-card-title class="pa-4">Operar en plazo fijo</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-btn
            block
            color="var(--primary)"
            variant="elevated"
            class="action-btn invertir-btn"
            height="48"
            @click="openInvestDialog"
          >
            <v-icon left class="mr-2">mdi-cash-plus</v-icon>
            Invertir
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6">
          <v-btn
            block
            color="var(--on-surface-light)"
            variant="elevated"
            class="invertir-btn"
            height="48"
            @click="openWithdrawDialog"
          >
            <v-icon left class="mr-2">mdi-cash-minus</v-icon>
            Rescatar
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>

    <v-dialog v-model="investDialog" max-width="500px">
      <v-card>
        <v-card-title>Invertir en Plazo Fijo</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="investAmount"
            label="Monto a invertir"
            prefix="$"
            type="number"
          ></v-text-field>
          <v-select
            v-model="investTerm"
            :items="termOptions"
            label="Plazo"
            suffix="días"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="confirmInvest">Confirmar</v-btn>
          <v-btn color="grey" @click="investDialog = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="withdrawDialog" max-width="500px">
      <v-card>
        <v-card-title>Rescatar Inversión</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="withdrawAmount"
            label="Monto a rescatar"
            prefix="$"
            type="number"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="confirmWithdraw">Confirmar</v-btn>
          <v-btn color="grey" @click="withdrawDialog = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useInvestmentsStore } from '@/store/investmentStore'

const investmentStore = useInvestmentsStore()

const investDialog = ref(false)
const withdrawDialog = ref(false)
const investAmount = ref('')
const withdrawAmount = ref('')
const investTerm = ref('')
const termOptions = [30, 60, 90, 180, 360]

const openInvestDialog = () => {
  investDialog.value = true
}

const openWithdrawDialog = () => {
  withdrawDialog.value = true
}

const confirmInvest = () => {
  console.log(`Investing $${investAmount.value} for ${investTerm.value} days`)
  investDialog.value = false
}

const confirmWithdraw = () => {
  console.log(`Withdrawing $${withdrawAmount.value}`)
  withdrawDialog.value = false
}
</script>


<style scoped>
.invertir-btn {
  color: white; /* Use your desired color */
}
</style>
