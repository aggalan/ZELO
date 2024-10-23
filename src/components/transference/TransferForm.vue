<template>
  <v-card class="my-card pa-6">
    <v-form @submit.prevent="submitTransfer">
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
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import {useRouter } from "vue-router";
import {useBalanceStore} from "@/store/balanceStore";

const router = useRouter();
const cbuAlias = ref('')
const amount = ref('')
const concept = ref('')

const submitTransfer = () => {
  // Handle transfer submission
  useBalanceStore().withdrawMoney(amount.value)
  console.log('Transfer submitted:', { cbuAlias: cbuAlias.value, amount: amount.value, concept: concept.value })

}
const goToTransference = () => {
  router.push({path: '/transference'});
}
</script>
