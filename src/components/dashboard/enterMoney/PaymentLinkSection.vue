<template>
  <v-card class="my-card" elevation="2">
    <v-card-title class="text-h5">Link de Pago</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="amount"
        label="Monto a recibir"
        prefix="$"
        outlined
        type="number"
      ></v-text-field>
      <v-text-field
        v-model="description"
        label="Descripción (opcional)"
        outlined
      ></v-text-field>
      <v-btn color="#8B5CF6" dark block large @click="generateLink">
        Generar Link de Pago
      </v-btn>
      <v-expand-transition>
        <div v-if="paymentLink">
          <v-divider class="my-4"></v-divider>
          <v-text-field
            :value="paymentLink"
            label="Link de Pago"
            readonly
            outlined
            append-icon="mdi-content-copy"
            @click:append="copyToClipboard"
          ></v-text-field>
          <v-btn color="primary" text @click="shareLink">
            Compartir Link
          </v-btn>
        </div>
      </v-expand-transition>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useBalanceStore } from '@/store/balanceStore'

const balanceStore = useBalanceStore()
const amount = ref('')
const description = ref('')
const paymentLink = ref('')

const generateLink = () => {
  // In a real application, this would call an API to generate the link
  paymentLink.value = `https://payment.example.com/${Math.random().toString(36).substr(2, 9)}`
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(paymentLink.value)
  // You might want to show a snackbar or toast here to confirm the copy action
}

const shareLink = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Link de Pago',
      text: `Pago por $${amount.value}`,
      url: paymentLink.value,
    })
  } else {
    // Fallback for browsers that don't support Web Share API
    copyToClipboard()
    // Show a message to the user that the link has been copied
  }
  balanceStore.enterMoney(amount.value)
}
</script>
