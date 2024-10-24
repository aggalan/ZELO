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
      <ActionButton  dark block large @click="generateLink">
        Generar Link de Pago
      </ActionButton>
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
          <ActionButton @click="shareLink" large>
            Compartir Link
          </ActionButton>
        </div>
      </v-expand-transition>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useBalanceStore } from '@/store/balanceStore'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const balanceStore = useBalanceStore()
const amount = ref('')
const description = ref('')
const paymentLink = ref('')

const generateLink = () => {
  // In a real application, this would call an API to generate the link
  paymentLink.value = `https://payment.example.com/${Math.random().toString(36).substr(2, 9)}`
  balanceStore.enterMoney(amount.value, 'Juan')
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
}
</script>
