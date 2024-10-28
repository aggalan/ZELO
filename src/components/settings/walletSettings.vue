<template>
  <v-card-text>
    <v-form @submit.prevent="saveSettings" ref="form">
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="defaultCurrency"
            :items="currencies"
            label="Moneda"
            outlined
            dense
            :rules="[v => !!v || 'Se requiere una moneda']"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="transactionLimit"
            :items="transactionLimits"
            label="Limite de Transacciones Diario"
            outlined
            dense
            :rules="[v => !!v || 'Se requiere un limite de transacciones']"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-switch
            v-model="autoConvert"
            label="Convertir a moneda seleccionada automaticamente"
            color="var(--primary)"
          ></v-switch>
        </v-col>
        <v-col cols="12" md="6">
          <v-switch
            v-model="instantTransfers"
            label="Habilitar transferencias instantaneas"
            color="var(--primary)"
          ></v-switch>
        </v-col>
      </v-row>
      <ActionButton
        class="mt-4"
        dark
        type="submit"
        :loading="loading"
      >
        Actualizar Configuracion de Billetera
      </ActionButton>
    </v-form>
  </v-card-text>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const defaultCurrency = ref('USD')
const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD']
const transactionLimit = ref('1000')
const transactionLimits = ['500', '1000', '2500', '5000', '10000']
const autoConvert = ref(true)
const instantTransfers = ref(false)
const loading = ref(false)
const form = ref(null)

const saveSettings = async () => {
  const isValid = await form.value.validate()
  if (isValid) {
    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    loading.value = false
    emit('save')
  }
}

const emit = defineEmits(['save'])
</script>
