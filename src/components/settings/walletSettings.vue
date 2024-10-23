<template>
  <v-card-text>
    <v-form @submit.prevent="saveSettings" ref="form">
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="defaultCurrency"
            :items="currencies"
            label="Default Currency"
            outlined
            dense
            :rules="[v => !!v || 'Default currency is required']"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="transactionLimit"
            :items="transactionLimits"
            label="Daily Transaction Limit"
            outlined
            dense
            :rules="[v => !!v || 'Transaction limit is required']"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-switch
            v-model="autoConvert"
            label="Auto-convert to default currency"
            color="#8B5CF6"
          ></v-switch>
        </v-col>
        <v-col cols="12" md="6">
          <v-switch
            v-model="instantTransfers"
            label="Enable instant transfers"
            color="#8B5CF6"
          ></v-switch>
        </v-col>
      </v-row>
      <v-btn
        color="#8B5CF6"
        class="mt-4"
        dark
        type="submit"
        :loading="loading"
      >
        Save Wallet Settings
      </v-btn>
    </v-form>
  </v-card-text>
</template>

<script setup>
import { ref } from 'vue'

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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    loading.value = false
    emit('save')
  }
}

const emit = defineEmits(['save'])
</script>
