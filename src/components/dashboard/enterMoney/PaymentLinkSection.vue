<template>
  <v-dialog v-model="dialogLink" max-width="500">
    <v-card class="my-card" elevation="2">
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-h5 mt-2">Link de Cobro</span>
        <v-btn icon @click="closeDialog" class="close-btn">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
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
        <ActionButton dark block large @click="generateLink" class="text-white">
          Generar link de cobro
        </ActionButton>

        <v-expand-transition>
          <div v-if="paymentLink">
            <v-divider class="my-4"></v-divider>
            <v-text-field
              :value="paymentLink"
              readonly
              outlined
              append-icon="mdi-content-copy"
              @click:append="copyToClipboard"
            ></v-text-field>
            <ActionButton @click="shareLink" class="text-white" large>
              Compartir Link
            </ActionButton>
          </div>
        </v-expand-transition>
      </v-card-text>
    </v-card>
  </v-dialog>
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
  paymentLink.value = `https://payment.example.com/${Math.random().toString(36).substr(2, 9)}`
  balanceStore.enterMoney(amount.value, {name:'Juan', description, category: 'Link de cobro'})
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(paymentLink.value)
}

const shareLink = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Link de Pago',
      text: `Pago por $${amount.value}`,
      url: paymentLink.value,
    })
  } else {
    copyToClipboard()
  }
}

const emit = defineEmits(['update:modelValue']);
const closeDialog = () => {
  emit('update:modelValue', false);
};
</script>

<style scoped>
.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
