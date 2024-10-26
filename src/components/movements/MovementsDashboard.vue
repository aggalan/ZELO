<template>
  <v-container fluid class="bg-white">
    <h1 class="text-h4 mb-6 mt-6 ml-2">Movimientos</h1>
    <v-row>
      <v-col cols="12" md="8">
        <RecentTransactions class="mt-4" title="Tu actividad" />
      </v-col>
      <v-col cols="12" md="4" class="mb-600000">
        <RecentFoodExpenses />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import RecentFoodExpenses from '@/components/movements/RecentExpenses.vue'
import RecentTransactions from "@/components/dashboard/RecentTransactions.vue";
import {computed, ref} from "vue";
import {useTransactionsStore} from "@/store/transactionStore";

</script>

<style scoped>
.custom-text-field :deep(.v-field__outline) {
  display: none;
}
</style>
