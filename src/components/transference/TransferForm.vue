<template>
  <v-card class="my-card pa-6">
    <v-form @submit.prevent="verifyAndShowConfirmationDialog">
      <v-text-field
        v-model="cbuAlias"
        label="CBU / ALIAS"
        placeholder="Ingresar..."
        outlined
        class="mb-4"
      ></v-text-field>
      <v-text-field
        v-model="amount"
        label="Monto"
        placeholder="10,000"
        outlined
        type="number"
        prefix="$"
        class="mb-4"
      ></v-text-field>
      <v-text-field
        v-model="concept"
        label="Concepto"
        placeholder="Varios"
        outlined
        class="mb-6"
      ></v-text-field>
      <ActionButton
        dark
        large
        class="mr-4"
        type="submit"
      >
        Transferir
        <v-icon right>mdi-arrow-right</v-icon>
      </ActionButton>
      <ActionButton
        color="#4B5563"
        dark
        large
        @click="goToTransference"
      >
        Cancelar
      </ActionButton>
    </v-form>
    <!-- Reusable Confirmation Dialog -->
    <ConfirmationComponent
      v-model="showConfirmationDialog"
      :cbuAlias="cbuAlias"
      :amount="amount"
      :concept="concept"
      @confirm="confirmTransfer"
      @cancel="showConfirmationDialog = false"
    />
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import {useRouter } from "vue-router";
import {useBalanceStore} from "@/store/balanceStore";
import ConfirmationComponent from "@/components/transference/ConfirmationComponent.vue";

const balanceStore = useBalanceStore();
const router = useRouter();
const cbuAlias = ref('')
const amount = ref('')
const concept = ref('')
const showConfirmationDialog = ref(false); // Para controlar el popup

const verifyAndShowConfirmationDialog = () => {
  if (cbuAlias.value && balanceStore.canWithdraw( amount.value)) {
    showConfirmationDialog.value = true; // Mostrar el popup
  } else {
    alert('Por favor, complete todos los campos y verifique que tiene saldo suficiente');
  }
}


// Confirmar la transferencia desde el popup
const confirmTransfer = () => {
  balanceStore.withdrawMoney(parseFloat(amount.value), {to:{category:"transfer", concept: concept.value, cbu: cbuAlias.value}});
  console.log('Transferencia confirmada:', {
    cbuAlias: cbuAlias.value,
    amount: amount.value,
    concept: concept.value,
  });
  showConfirmationDialog.value = false; // Cerrar el popup
  cbuAlias.value = '';
  amount.value = '';
  concept.value = '';
  goToTransference();
}
const goToTransference = () => {
  router.push({path: '/transference'});
}
</script>
