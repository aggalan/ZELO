<template>
  <v-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" persistent max-width="400px">
    <v-card class="confirmation-card">
      <v-card-title class="text-h5 font-weight-bold pa-4">
        Confirmar Transferencia
      </v-card-title>
      <v-card-text class="pa-4">
        <v-list>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="primary">mdi-bank</v-icon>
            </template>
            <v-list-item-title class="text-subtitle-2">CBU / ALIAS</v-list-item-title>
            <v-list-item-subtitle class="text-body-1">{{ cbuAlias }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="green">mdi-cash</v-icon>
            </template>
            <v-list-item-title class="text-subtitle-2">Monto</v-list-item-title>
            <v-list-item-subtitle class="text-h6 font-weight-bold">${{ parseFloat(amount).toLocaleString() }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="concept">
            <template v-slot:prepend>
              <v-icon color="blue">mdi-text-box</v-icon>
            </template>
            <v-list-item-title class="text-subtitle-2">Concepto</v-list-item-title>
            <v-list-item-subtitle class="text-body-1">{{ concept }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="paymentMethod">
            <template v-slot:prepend>
              <v-icon color="orange">mdi-credit-card</v-icon>
            </template>
            <v-list-item-title class="text-subtitle-2">Método de Pago</v-list-item-title>
            <v-list-item-subtitle class="text-body-1">{{ paymentMethod }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
        <v-col>
          <ActionButton
            block
            class="mb-2"
            @click="confirm"
            :loading="loading"
          >
            CONFIRMAR
          </ActionButton>
          <ActionButton
            color="grey-darken-1"
            variant="outlined"
            block
            @click="cancel"
            :disabled="loading"
          >
            Cancelar
          </ActionButton>
        </v-col>

    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const props = defineProps({
  modelValue: Boolean,
  cbuAlias: String,
  amount: [String, Number],
  concept: String,
  paymentMethod: String,
})

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])

const loading = ref(false)

const confirm = async () => {
  loading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
    emit('confirm')
  } finally {
    loading.value = false
  }
}

const cancel = () => {
  emit('cancel')
}
</script>

<style scoped>
.confirmation-card {
  border-radius: 16px;
  overflow: hidden;
}

.v-list-item {
  padding: 16px 0;
}

.v-list-item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

@media (max-width: 600px) {
  .confirmation-card {
    margin: 16px;
  }

  .v-card-title {
    font-size: 1.25rem;
  }

  .v-list-item-title {
    font-size: 0.875rem;
  }

  .v-list-item-subtitle {
    font-size: 1rem;
  }
}
</style>
